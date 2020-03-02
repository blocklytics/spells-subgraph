import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { DSChief, Etch } from '../../../generated/Maker_DSChief/DSChief'
import { DSSpell } from '../../../generated/Maker_DSChief/DSSpell'
import { Platform, Target, Timelock, Tx } from '../../../generated/schema'

const PLATFORM = "Maker"

export function createTimelock(address: Address): void {
    createPlatform()
    let id = address.toHexString()
    let timelock = Timelock.load(id)
    if (timelock === null) {
        timelock = new Timelock(id)
        timelock.platform = PLATFORM
        timelock.save()
    }
}

export function createTxIfValid(event: Etch): void {
    let id = event.params.slate.toHexString()  // Slate
    let tx = Tx.load(id)
    if (tx === null) {
        tx = new Tx(id)

        createTimelock(event.address)
        /* Query DSCheif for slate info.
         *   Note: slates are stored in a map and must be accessed individually
         *   TODO: Only first index is checked - some iteration should be used here
         */
        let DSChiefContract = DSChief.bind(event.address)
        let slateAddressResult = DSChiefContract.try_slates(event.params.slate, BigInt.fromI32(0))
        if (slateAddressResult.reverted) {
            // log.warning("slateAddress not found in tx {}", [id])
        } else {
            let slateAddress = slateAddressResult.value
            let slateContract = DSSpell.bind(slateAddress)
    
            let sigResult = slateContract.try_sig()
            let etaResult = slateContract.try_eta()
            let tagResult = slateContract.try_tag()
            if (sigResult.reverted || etaResult.reverted || tagResult.reverted) {
                // log.warning("slateAddress reverted", [])
            } else {
                let sig = sigResult.value.toHexString()
                let eta = etaResult.value
                let tag = tagResult.value.toHexString()
                log.debug("slateAddress result {} {} {} slate {}", [sig, eta.toHexString(), tag, id])
                createTarget(event.address) // TODO check assumption that this is DSChief

                tx.eta = eta
                tx.createdAtTimestamp = event.block.timestamp
                tx.createdAtTransaction = event.transaction.hash.toHexString()
                tx.value = BigInt.fromI32(0) // TODO check assumption that value is not available
                tx.signature = sig // TODO check assumption that sig = function signature
                tx.data = tag // TODO check assumption that tag = data
                tx.target = event.address.toHexString()   // TODO see above
                tx.timelock = event.address.toHexString() // Should match id in createTimelock function
                tx.isCancelled = false
                tx.isExecuted = false
                tx.save()
            }
        }
    }
}

export function createTarget(address: Address): void {
    log.debug("Maker createTarget", [])
    createPlatform()
    let id = address.toHexString()
    let target = Target.load(id)
    if (target === null) {
        target = new Target(id)
        target.platform = PLATFORM
        target.save()
    }
}

export function createPlatform(): void {
    let id = PLATFORM
    let platform = Platform.load(id)
    if (platform === null) {
        platform = new Platform(id)
        platform.save()
    }    
}