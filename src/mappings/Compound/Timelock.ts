import { Address, log } from "@graphprotocol/graph-ts"
import { 
    CancelTransaction, 
    ExecuteTransaction, 
    NewAdmin, 
    NewDelay, 
    NewPendingAdmin, 
    QueueTransaction 
} from '../../../generated/Compound_Timelock/Timelock'
import { Timelock, Tx } from '../../../generated/schema'
import { 
    createAndReturnTx
} from './helpers'

export function handleCancelTransaction(event: CancelTransaction): void {
    let id = event.params.txHash.toHexString() // Signature of the transaction - not a transaction hash!
    let tx = Tx.load(id)
    if (tx === null) {
        log.error("(CancelTransaction) Tx id not found: {}", [id])
        return
    }
    tx.isCancelled = true
    tx.cancelledAtTimestamp = event.block.timestamp
    tx.cancelledAtTransaction = event.transaction.hash.toHexString()
    tx.save()
}

export function handleExecuteTransaction(event: ExecuteTransaction): void {
    let id = event.params.txHash.toHexString() // Signature of the transaction - not a transaction hash!
    let tx = Tx.load(id)
    if (tx === null) {
        log.error("(CancelTransaction) Tx id not found: {}", [id])
        return
    }
    tx.isExecuted = true
    tx.executedAtTimestamp = event.block.timestamp
    tx.executedAtTransaction = event.transaction.hash.toHexString()
    tx.save()
}

export function handleNewAdmin(event: NewAdmin): void {}

export function handleNewDelay(event: NewDelay): void {}

export function handleNewPendingAdmin(event: NewPendingAdmin): void {}

export function handleQueueTransaction(event: QueueTransaction): void {
    createAndReturnTx(event)
}