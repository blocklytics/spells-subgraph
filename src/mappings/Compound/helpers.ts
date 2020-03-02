import { Address, log } from "@graphprotocol/graph-ts"
import { QueueTransaction } from '../../../generated/Compound_Timelock/Timelock'
import { Platform, Target, Timelock, Tx } from '../../../generated/schema'

const PLATFORM = "Compound"

export function createAndReturnTx(event: QueueTransaction): Tx {
    let id = event.params.txHash.toHexString() // Signature of the spell - this is not a transaction hash!
    let tx = Tx.load(id)
    if (tx === null) {
        log.debug("(QueueTransaction) Tx created: {}", [id])
        tx = new Tx(id)

        createTimelock(event.address)
        // createPlatform()
        createTarget(event.params.target)

        tx.eta = event.params.eta
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.value = event.params.value
        tx.signature = event.params.signature
        tx.data = event.params.data.toHexString()
        tx.target = event.params.target.toHexString()
        log.debug("Compound target {}", [tx.target])
        tx.timelock = event.address.toHexString() // Should match id in createTimelock function
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
    }
    return tx as Tx
}

export function createTimelock(address: Address): void {
    log.debug("Compound createTimelock", [])
    createPlatform()
    let id = address.toHexString()
    let timelock = Timelock.load(id)
    if (timelock === null) {
        timelock = new Timelock(id)
        timelock.platform = PLATFORM
        timelock.save()
    }
}

export function createTarget(address: Address): void {
    log.debug("Compound createTarget", [])
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
    log.debug("Compound createPlatform", [])
    let id = PLATFORM
    let platform = Platform.load(id)
    if (platform === null) {
        platform = new Platform(id)
        platform.save()
    }    
}