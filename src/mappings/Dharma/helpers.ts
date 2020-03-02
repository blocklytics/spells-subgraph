import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { Timelocker as TimelockerContract, TimelockInitiated } from '../../../generated/Dharma_Timelocker/Timelocker'
import { Platform, Target, Timelock, Tx } from '../../../generated/schema'

const PLATFORM = "Dharma"

export function createAndReturnTx(event: TimelockInitiated): Tx {
    // TODO get old tx and invalidate
    
    let id = PLATFORM + "-" + event.params.arguments.toHexString() // Contract uses hashed value of args
    let tx = Tx.load(id)
    if (tx === null) {
        tx = new Tx(id)
        createTimelock(event.address)
        let targetAddress = event.address // TODO this should be the beacon 
        createTarget(targetAddress) // TODO see above

        tx.eta = event.params.timeComplete
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.value = BigInt.fromI32(0)
        tx.signature = event.params.functionSelector.toHexString()
        tx.data = event.params.arguments.toHexString()
        tx.target = targetAddress.toHexString() // TODO see above
        tx.timelock = event.address.toHexString() // Should match id in createTimelock function
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
     }
     return tx as Tx
}

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

export function createTarget(address: Address): void {
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