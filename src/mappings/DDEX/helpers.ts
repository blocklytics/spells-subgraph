import { BigInt, log } from "@graphprotocol/graph-ts"
import { Timelock as TimelockContract, Submission } from '../../../generated/DDEX_Timelock/Timelock'
import { Spell } from '../../../generated/schema'
import { createPlatform, createTarget, createTimelock } from "../helpers"

const PLATFORM = "DDEX"

/** Returns human-readable function name from 4-byte signature
 * 
 * @dev These functions come from the DDEX contract functions with `onlyOwner` modifier.
 * @param signature 4-byte signature (keccak hash)
 * @returns result (or input if no result found)
 */
function nameForSignature(signature: string): string {
    if (signature == "0x715018a6") return "renounceOwnership()"
    else if (signature == "0xf2fde38b") return "transferOwnership(address newOwner)"
    else if (signature == "0x38eada1c") return "addAddress(address adr)"
    else if (signature == "0x4ba79dfe") return "removeAddress(address adr)"
    else return signature
}

/** Convenience function for creating DDEX Platform
 * 
 * @dev The `currentAdmin` is hardcoded based on deployment parameters
 * @dev TODO - update `currentAdmin` for ownership transfers
 */
function createPlatformForDDEX(): void {
    createPlatform(PLATFORM, true, true, "0xb15367df8a39ea06f8f81ed35d49e056ee05f3b7")
}

/** Creates and returns a Spell from the Timelock Submission event.
 * 
 * @param event Timelock Submission
 * @returns Spell
 */
export function createAndReturnSpell(event: Submission): Spell {
    let id = PLATFORM + "-" + event.params.transactionId.toHexString() // This is a nonce; not transaction hash
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForDDEX() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let timelockContract = TimelockContract.bind(timelockAddress)
        let spell = timelockContract.transactions(event.params.transactionId)
        let targetAddress = spell.value0
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        tx = new Spell(id)
        tx.eta = BigInt.fromI32(0)
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.expiresAtTimestamp = BigInt.fromI32(0)
        tx.value = spell.value1
        tx.signature = spell.value2.toHexString().slice(0, 10)
        tx.functionName = nameForSignature(tx.signature)
        tx.data = "0x" + spell.value2.toHexString().slice(10)
        tx.platform = PLATFORM
        tx.target = targetAddress.toHexString()
        tx.timelock = timelockAddress.toHexString()
        // spell.value3 // Bool
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
     }
     return tx as Spell
}