import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { Confirmation, Deposit, Execution, ExecutionFailure, UnlockTimeSet, Submission, Revocation, RequirementChange, OwnerAddition, OwnerRemoval, LockSecondsChange, Timelock } from '../../../generated/DDEX_Timelock/Timelock'
import { Tx } from '../../../generated/schema'
import { createAndReturnTx } from "../DDEX/helpers"

export function handleConfirmation(event: Confirmation): void {}
export function handleDeposit(event: Deposit): void {}
export function handleExecution(event: Execution): void {
    // tx executed
    let id = "DDEX-" + event.params.transactionId.toHexString()
    let tx = Tx.load(id)
    if (tx === null) {
        log.warning("(handleExecution) Tx not found {}", [id])
        return
    }
    tx.isExecuted = true
    tx.executedAtTimestamp = event.block.timestamp
    tx.executedAtTransaction = event.transaction.hash.toHexString()
    tx.save()
}
export function handleExecutionFailure(event: ExecutionFailure): void {}
export function handleLockSecondsChange(event: LockSecondsChange): void {
    // Delay changed
}
export function handleOwnerAddition(event: OwnerAddition): void {}
export function handleOwnerRemoval(event: OwnerRemoval): void {}
export function handleRequirementChange(event: RequirementChange): void {}
export function handleRevocation(event: Revocation): void {}
export function handleSubmission(event: Submission): void {
    /** @dev Adds a new transaction to the transaction mapping, if transaction does not exist yet.
      * @param destination Transaction target address.
      * @param value Transaction ether value.
      * @param data Transaction data payload.
      * @return Returns transaction ID.
      */
    createAndReturnTx(event)
}
export function handleUnlockTimeSet(event: UnlockTimeSet): void {
    // Timelock set
    let id = "DDEX-" + event.params.transactionId.toHexString()
    let tx = Tx.load(id)
    if (tx === null) {
        log.warning("(handleExecution) Tx not found {}", [id])
        return
    }
    tx.eta = event.params.confirmationTime
    tx.save()
}