import { log } from "@graphprotocol/graph-ts"
import { 
    CancelTransaction, 
    ExecuteTransaction, 
    NewAdmin, 
    NewDelay, 
    NewPendingAdmin, 
    QueueTransaction 
} from '../../../generated/Compound_Timelock/Timelock'
import { Timelock, Spell } from '../../../generated/schema'
import { 
    createAndReturnSpell
} from './helpers'

export function handleCancelTransaction(event: CancelTransaction): void {
    let id = event.params.txHash.toHexString() // Signature of the transaction - not a transaction hash!
    let tx = Spell.load(id)
    if (tx === null) {
        log.error("Compound Timelock handleCancelTransaction. Spell id not found: {}", [id])
        return
    }
    tx.isCancelled = true
    tx.cancelledAtTimestamp = event.block.timestamp
    tx.cancelledAtTransaction = event.transaction.hash.toHexString()
    tx.save()
}

export function handleExecuteTransaction(event: ExecuteTransaction): void {
    let id = event.params.txHash.toHexString() // Signature of the transaction - not a transaction hash!
    let tx = Spell.load(id)
    if (tx === null) {
        log.error("Compound Timelock handleExecuteTransaction. Spell id not found: {}", [id])
        return
    }
    tx.isExecuted = true
    tx.executedAtTimestamp = event.block.timestamp
    tx.executedAtTransaction = event.transaction.hash.toHexString()
    tx.save()
}

export function handleNewAdmin(event: NewAdmin): void {
    let id = event.address.toHexString()
    let timelock = Timelock.load(id)
    if (timelock === null) {
        log.error("Compound Timelock handleExecuteTransaction. Timelock id not found: {}", [id])
        return
    }
    timelock.currentAdmin = event.params.newAdmin.toHexString()
    timelock.save()
}

export function handleNewDelay(event: NewDelay): void {
    // TODO - See https://github.com/blocklytics/spells-subgraph/issues/5
}

export function handleNewPendingAdmin(event: NewPendingAdmin): void {
    // TODO - See https://github.com/blocklytics/spells-subgraph/issues/13
}

export function handleQueueTransaction(event: QueueTransaction): void {
    createAndReturnSpell(event)
}