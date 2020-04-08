import { log } from "@graphprotocol/graph-ts"
import {
    Confirmation,
    ConfirmationTimeSet,
    Execution,
    ExecutionFailure,
    OwnerAddition,
    OwnerRemoval,
    RequirementChange,
    Revocation,
    SelectorSet,
    Submission,
    TimeLockChange,
    PartiallyDelayedMultiSig
} from '../../../generated/DyDx_PartiallyDelayedMultiSig/PartiallyDelayedMultiSig'
import { Spell } from '../../../generated/schema'
import { PLATFORM, createAndReturnSpell } from './helpers'

export function handleConfirmation(event: Confirmation): void {}

export function handleConfirmationTimeSet(event: ConfirmationTimeSet): void {
    let id = PLATFORM + "-" + event.params.transactionId.toString()
    let tx = Spell.load(id)
    if (tx === null) {
        let debug_id = event.transaction.hash.toHexString()
        log.error("DyDx spell not found: {} in tx {}", [id, debug_id])
        return
    }
    // Timelock needs to be pulled from contract
    let timelockContract = PartiallyDelayedMultiSig.bind(event.address)
    let timelockSeconds = timelockContract.try_secondsTimeLocked()
    if (timelockSeconds.reverted) {
        log.error("DyDx could not get timelockSeconds", [])
        return
    }
    tx.eta = event.params.confirmationTime.plus(timelockSeconds.value)
    tx.save()
}

export function handleExecution(event: Execution): void {
    let id = PLATFORM + "-" + event.params.transactionId.toString()
    let tx = Spell.load(id)
    if (tx === null) {
        let debug_id = event.transaction.hash.toHexString()
        log.error("DyDx spell not found: {} in tx {}", [id, debug_id])
        return
    }
    tx.isExecuted = true
    tx.executedAtTimestamp = event.block.timestamp
    tx.executedAtTransaction = event.transaction.hash.toHexString()
    tx.save()
}

export function handleExecutionFailure(event: ExecutionFailure): void {}

export function handleOwnerAddition(event: OwnerAddition): void {
    log.warning("DyDx OwnerAddition not handled.", [])
}

export function handleOwnerRemoval(event: OwnerRemoval): void {
    log.warning("DyDx OwnerRemoval not handled.", [])
}

export function handleRequirementChange(event: RequirementChange): void {
    // This function changes the number of confirmations required
    // event.params.required
    let debug_id = event.transaction.hash.toHexString()
    log.warning("DyDx RequirementChange not handled. {}", [debug_id])
}

export function handleRevocation(event: Revocation): void {}

export function handleSelectorSet(event: SelectorSet): void {
    // Whitelists function that do not need to go through a timelock
    log.warning("DyDx SelectorSet not handled. {} {} {}", [
        event.params.destination.toHexString(),
        event.params.selector.toHexString(),
        event.params.approved ? "True" : "False"
    ])
}

export function handleSubmission(event: Submission): void {
    createAndReturnSpell(event)
}

export function handleTimeLockChange(event: TimeLockChange): void {
    // This function changes the timelock period
    // event.params.secondsTimeLocked
    let debug_id = event.transaction.hash.toHexString()
    log.warning("DyDx TimeLockChange not handled. {} {}", [debug_id, event.params.secondsTimeLocked.toString()])
}