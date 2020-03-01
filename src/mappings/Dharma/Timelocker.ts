// import { Address, BigInt, log } from "@graphprotocol/graph-ts"
// // import { Confirmation, Deposit, Execution, ExecutionFailure, UnlockTimeSet, Submission, Revocation, RequirementChange, OwnerAddition, OwnerRemoval, LockSecondsChange, Timelock } from '../../../generated/DDEX_Timelock/Timelock'
// import { Tx } from '../../../generated/schema'
import { 
    AdharmaContingencyActivated,
    AdharmaContingencyExited,
    OwnershipTransferred,
    TimelockExpirationModified,
    TimelockInitiated,
    TimelockIntervalModified
} from '../../../generated/Dharma_Timelocker/Timelocker'
import { createAndReturnTx } from './helpers'

export function handleAdharmaContingencyActivated(event: AdharmaContingencyActivated): void {}

export function handleAdharmaContingencyExited(event: AdharmaContingencyExited): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTimelockExpirationModified(event: TimelockExpirationModified): void {}

export function handleTimelockInitiated(event: TimelockInitiated): void {
    createAndReturnTx(event)
}

export function handleTimelockIntervalModified(event: TimelockIntervalModified): void {}