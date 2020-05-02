import { log } from "@graphprotocol/graph-ts"
import { Confirmation, Deposit, Execution, ExecutionFailure, UnlockTimeSet, Submission, Revocation, RequirementChange, OwnerAddition, OwnerRemoval, LockSecondsChange, Timelock } from '../../../generated/DDEX_Timelock/Timelock'
import { Spell } from '../../../generated/schema'
import { createAndReturnSpell } from "../DDEX/helpers"

export function handleConfirmation(event: Confirmation): void {}
export function handleDeposit(event: Deposit): void {}
export function handleExecution(event: Execution): void {
    // tx executed
    let id = "DDEX-" + event.params.transactionId.toHexString()
    let tx = Spell.load(id)
    if (tx === null) {
        log.warning("DDEX Timelock handleExecution. Spell not found {}", [id])
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
    log.warning("DDEX Timelock LockSecondsChange not handled {}", [event.params.lockSeconds.toString()])
}
export function handleOwnerAddition(event: OwnerAddition): void {}
export function handleOwnerRemoval(event: OwnerRemoval): void {}
export function handleRequirementChange(event: RequirementChange): void {}
export function handleRevocation(event: Revocation): void {}
export function handleSubmission(event: Submission): void {
    createAndReturnSpell(event)
}
export function handleUnlockTimeSet(event: UnlockTimeSet): void {
    // Timelock set
    let id = "DDEX-" + event.params.transactionId.toHexString()
    let tx = Spell.load(id)
    if (tx === null) {
        log.warning("DDEX Timelock handleUnlockTimeSet. Spell not found {}", [id])
        return
    }
    tx.eta = event.params.confirmationTime
    tx.save()
}