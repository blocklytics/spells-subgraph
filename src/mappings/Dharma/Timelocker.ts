import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { Platform, Timelock } from '../../../generated/schema'
import { 
    AdharmaContingencyActivated,
    AdharmaContingencyExited,
    OwnershipTransferred,
    TimelockExpirationModified,
    TimelockInitiated,
    TimelockIntervalModified
} from '../../../generated/Dharma_Timelocker/Timelocker'
import { PLATFORM, createAndReturnSpell } from './helpers'

export function handleAdharmaContingencyActivated(event: AdharmaContingencyActivated): void {
    let id = event.transaction.hash.toHexString()
    log.warning("Dharma AdharmaContingencyActivated not handled in tx {}", [id])
}

export function handleAdharmaContingencyExited(event: AdharmaContingencyExited): void {
    let id = event.transaction.hash.toHexString()
    log.warning("Dharma AdharmaContingencyExited not handled in tx {}", [id])
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    // Log ownership transfers in Timelock entity
    let id = event.address.toHexString()
    let timelock = Timelock.load(id)
    if (timelock === null) {
        log.warning("Dharma OwnershipTransferred not handled. Timelock could not be found {}", [id])
    } else {
        timelock.currentAdmin = event.params.newOwner.toHexString()
        timelock.save()
    }

    // Log ownership transfers in Platform entity
    let platform = Platform.load(PLATFORM)
    if (platform === null) {
        log.warning("Dharma OwnershipTransferred not handled. Platform could not be found {}", [PLATFORM])
    } else {
        platform.currentAdmin = event.params.newOwner.toHexString()
        platform.save()
    }
}

export function handleTimelockExpirationModified(event: TimelockExpirationModified): void {
    // TODO
    // let id = event.transaction.hash.toHexString()
    // log.debug("Dharma TimelockExpirationModified in tx {}", [id])
    // event.params.functionSelector
    // event.params.newExpiration
    // event.params.oldExpiration
}

export function handleTimelockInitiated(event: TimelockInitiated): void {
    createAndReturnSpell(event)
}

export function handleTimelockIntervalModified(event: TimelockIntervalModified): void {
    // TODO - log timelock modifications in Timelock entity
    // let id = event.transaction.hash.toHexString()
    // log.debug("Dharma TimelockIntervalModified in tx {}", [id])
    // event.params.functionSelector
    // event.params.newInterval
    // event.params.oldInterval
}