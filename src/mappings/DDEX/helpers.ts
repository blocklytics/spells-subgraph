import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { Timelock as TimelockContract, Submission } from '../../../generated/DDEX_Timelock/Timelock'
import { Platform, Target, Timelock, Tx } from '../../../generated/schema'

const PLATFORM = "DDEX"

export function createAndReturnTx(event: Submission): Tx {
    let id = PLATFORM + "-" + event.params.transactionId.toHexString()
    let tx = Tx.load(id)
    if (tx === null) {
        tx = new Tx(id)
        createTimelock(event.address)

        let timelockContract = TimelockContract.bind(event.address)
        let spell = timelockContract.transactions(event.params.transactionId)
        let targetAddress = spell.value0
        createTarget(targetAddress)

        tx.eta = BigInt.fromI32(0)
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.value = spell.value1
        tx.signature = spell.value2.toHexString().slice(0, 10)
        tx.data = "0x" + spell.value2.toHexString().slice(10)
        tx.target = targetAddress.toHexString()
        tx.timelock = event.address.toHexString() // Should match id in createTimelock function
        // spell.value3 // Bool
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