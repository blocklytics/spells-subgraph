import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { CurveY as CurveYContract, CommitNewParameters, NewParameters } from '../../../generated/Curve_CurveY/CurveY'
import { Platform, Target, Timelock, Tx } from '../../../generated/schema'

const PLATFORM = "Curve"

export function createAndReturnTx(event: CommitNewParameters): Tx {
    let id = PLATFORM + "-" + event.params.deadline.toHexString()
    let tx = Tx.load(id)
    if (tx === null) {
        tx = new Tx(id)
        createTimelock(event.address)
        createTarget(event.address)

        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.eta = event.params.deadline
        tx.value = BigInt.fromI32(0)
        tx.signature = "NewParameters"
        tx.data = event.params.A.toString() + "-" + event.params.admin_fee.toString() + "-" + event.params.fee.toString()
        tx.target = event.address.toHexString()
        tx.timelock = event.address.toHexString()
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