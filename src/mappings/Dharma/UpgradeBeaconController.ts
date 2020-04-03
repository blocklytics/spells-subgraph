import { log } from "@graphprotocol/graph-ts"
import { Spell } from '../../../generated/schema'
import { 
    OwnershipTransferred,
    Upgraded
} from '../../../generated/templates/Dharma_UpgradeBeaconController/UpgradeBeaconController'
import { PLATFORM } from './helpers'

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    let id = event.address.toHexString()
    log.warning("Dharma UpgradeBeaconController OwnershipTransferred not handled.", [id])
}

export function handleUpgraded(event: Upgraded): void {
    let newImplementation = event.params.newImplementation.toHexString()
    let id = PLATFORM + "-" + newImplementation
    let tx = Spell.load(id)
    if (tx === null) {
        log.warning("Dharma UpgradeBeaconController spell not found. {}", [id])
    } else {
        tx.isExecuted = true
        tx.executedAtTimestamp = event.block.timestamp
        tx.executedAtTransaction = event.transaction.hash.toHexString()
        tx.save()
    }
}