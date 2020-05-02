import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { DSChief, Etch } from '../../../generated/Maker_DSChief/DSChief'
import { DSSpell as DSChief_DSSpell } from '../../../generated/Maker_DSChief/DSSpell'
import { LogNote } from '../../../generated/Maker_DSPause/DSPause'
import { DSSpell as DSPause_DSSpell } from '../../../generated/Maker_DSPause/DSSpell'
import { Spell } from '../../../generated/schema'
import { createPlatform, createTimelock, createTarget } from "../helpers"

const PLATFORM = "Maker"

/** Convenience function for creating Maker Platform
 * 
 */
function createPlatformForMaker(): void {
    createPlatform(PLATFORM, false, true)
}

/** Handler for DSPause anonymous event LogNote
 * 
 * @dev This will never create a new spell (see DSChief's handleEtch)
 * @dev The signature will vary based on what state the spell is in:
 * @dev 0x46d2fbbb = plot (schedule)
 * @dev 0x168ccd67 = exec (execute)
 * @dev 0x162c7de3 = drop (cancel)
 *
 * @param event DSPause LogNote
 */
export function updateSpellFromLogNote(event: LogNote): void {
    let debug_id = event.transaction.hash.toHexString()
    // let bar = event.params.bar.toHexString() // ??
    // let fax = event.params.fax.toHexString() // tx data
    let foo = "0x".concat(event.params.foo.toHexString().slice(26)) // Spell contract address
    let guy = event.params.guy.toHexString() // DSProxy
    let sig = event.params.sig.toHexString() // Signature
    // let wad = event.params.wad.toString()    // Value

    // log.debug("DSPause createSpellFromLogNote sig {} foo {} guy {} tx {}", [sig, foo, guy, debug_id])

    let id = guy
    let tx = Spell.load(id)
    if (tx === null) {
        // Spell should only ever be created in DSChief Etch and loaded here.
        log.warning("DSPause createSpellFromLogNote. Unexpected spell in tx {}.", [debug_id])
        return
    }

    if (sig == "0x46d2fbbb") {
        // log.debug("DSPause createSpellFromLogNote. Plot {}", [id])
        let spellAddress = Address.fromHexString(id) as Address
        let spellContract = DSPause_DSSpell.bind(spellAddress)
        let etaResult = spellContract.try_eta()
        if (etaResult.reverted) {
            log.warning("DSPause createSpellFromLogNote. Plot reverted in tx {} sig {} foo {} guy {}", [debug_id, sig, foo, guy])
        } else {
            tx.eta = etaResult.value
            tx.save()
        }
    }
    else if (sig == "0x168ccd67") {
        // log.debug("DSPause createSpellFromLogNote. Exec {}", [id])
        tx.isExecuted = true
        tx.executedAtTimestamp = event.block.timestamp
        tx.executedAtTransaction = event.transaction.hash.toHexString()
        tx.save()
    }
    else if (sig == "0x162c7de3") {
        // log.debug("DSPause createSpellFromLogNote. Drop {}", [id])
        tx.isCancelled = true
        tx.cancelledAtTimestamp = event.block.timestamp
        tx.cancelledAtTransaction = event.transaction.hash.toHexString()
        tx.save()
    }
}

/** Creates a new Spell from the DSChief Etch event.
 * 
 * @dev Slates are stored in a map and must be accessed by iterating the `slates()` function.
 * @dev There is no error checking at the smart contract level for valid/invalid spells. We assume some required fields:
 *   - sig
 *   - eta
 *   - action
 *   - pause
 *   - done
 * 
 * @param event DSChief Etch
 */
export function createSpellIfValid(event: Etch): void {
    let debug_id = event.transaction.hash.toHexString()
    let slate = event.params.slate
    let DSChiefContract = DSChief.bind(event.address)
    let i = BigInt.fromI32(0)
    let isRunning = true
    while (isRunning) {
        let spellAddressResult = DSChiefContract.try_slates(slate, i)
        if (spellAddressResult.reverted) {
            isRunning = false
            continue
        } else {
            i = i.plus(BigInt.fromI32(1))
        }

        // Query spell contract for details
        let spellAddress = spellAddressResult.value
        let spellContract = DSChief_DSSpell.bind(spellAddress)

        // Create new spell
        let id = spellAddress.toHexString()
        let tx = Spell.load(id)
        if (tx === null) {
            // Immediately check for reverted values
            let sigResult = spellContract.try_sig()
            if (sigResult.reverted) {
                log.warning("DSChief createSpellIfValid. Sig reverted for {}", [spellAddress.toHexString()])
                continue
            }

            let etaResult = spellContract.try_eta()
            if (etaResult.reverted) {
                log.warning("DSChief createSpellIfValid. ETA reverted for {}", [spellAddress.toHexString()])
                continue
            }

            // let tagResult = spellContract.try_tag()
            // if (tagResult.reverted) {
                // log.warning("DSChief createSpellIfValid. Tag reverted for {}", [spellAddress.toHexString()])
                // continue
            // }

            let actionResult = spellContract.try_action()
            if (actionResult.reverted) {
                log.warning("DSChief createSpellIfValid. Action reverted for {}", [spellAddress.toHexString()])
                continue
            }

            let pauseResult = spellContract.try_pause()
            if (pauseResult.reverted) {
                log.warning("DSChief createSpellIfValid. Timelock could not be created for {}", [spellAddress.toHexString()])
                continue
            }

            let doneResult = spellContract.try_done()
            if (doneResult.reverted) {
                log.warning("DSChief createSpellIfValid. Done reverted for {}", [spellAddress.toHexString()])
                continue
            }

            if (doneResult.value) log.warning("DSChief createSpellIfValid. Spell is already done {} see tx {}", [id, debug_id])
            createPlatformForMaker() // Ensure platform is created

            let timelockAddress = pauseResult.value
            createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

            let targetAddress = event.address // TODO check assumption that this is DSChief
            createTarget(targetAddress, PLATFORM) // Ensure target is created

            tx = new Spell(id)

            // Optional description
            let descriptionResult = spellContract.try_description()
            if (!descriptionResult.reverted) {
                tx.description = descriptionResult.value
            }

            tx.eta = etaResult.value
            tx.createdAtTimestamp = event.block.timestamp
            tx.createdAtTransaction = event.transaction.hash.toHexString()
            tx.expiresAtTimestamp = BigInt.fromI32(0)
            tx.value = BigInt.fromI32(0)                 // TODO check assumption that value is not available
            tx.signature = sigResult.value.toHexString() // TODO - check - this is always 0x61461954
            tx.functionName = tx.signature               // TODO
            tx.data = actionResult.value.toHexString()   // TODO check assumption that data = action makes sense
            tx.platform = PLATFORM
            tx.target = targetAddress.toHexString()
            tx.timelock = timelockAddress.toHexString()  // Should match id in createTimelock function
            tx.isCancelled = false
            tx.isExecuted = false
            tx.save()
        }
    }
}