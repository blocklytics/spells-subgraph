import { log } from "@graphprotocol/graph-ts"
import { CommitNewAdmin, NewAdmin, CommitNewParameters, NewParameters } from '../../../generated/Curve_CurveY/CurveY'
import { Platform, Timelock, Spell } from '../../../generated/schema'
import { PLATFORM, createAndReturnSpellForNewAdmin, createAndReturnSpellForNewParameters } from "./helpers"

/** Handles CurveY event CommitNewAdmin
 * 
 * @dev The spell is scheduled with a proposed admin
 * @dev TODO - Any outstanding spells should be set to Cancelled
 */
export function handleCommitNewAdmin(event: CommitNewAdmin): void {
    createAndReturnSpellForNewAdmin(event)
  }
  
/** Handles CurveY event NewAdmin
 * 
 * @dev The spell is executed and admin changes
 * @dev This updates entities Spell, Timelock and Platform
 * @dev TODO - Any outstanding spells should be set to Cancelled
 */
export function handleNewAdmin(event: NewAdmin): void {
    // Set Spell isExecuted true
    let id = PLATFORM + event.params.admin.toHexString()
    let tx = Spell.load(id)
    if (tx === null) {
        log.warning("CurveY Spell not found {}", [id])
    } else {
        tx.isExecuted = true
        tx.executedAtTimestamp = event.block.timestamp
        tx.executedAtTransaction = event.transaction.hash.toHexString()
        tx.save()
    }

    // Log ownership transfers in Timelock entity
    let timelock_id = event.address.toHexString()
    let timelock = Timelock.load(timelock_id)
    if (timelock === null) {
        log.warning("CurveY Timelock not found, {}", [timelock_id])
    } else {
        timelock.currentAdmin = event.params.admin.toHexString()
        timelock.save()
    }

    // Log ownership transfers in Platform entity
    let platform_id = event.address.toHexString()
    let platform = Platform.load(platform_id)
    if (platform === null) {
        log.warning("CurveY Platform not found, {}", [platform_id])
    } else {
        platform.currentAdmin = event.params.admin.toHexString()
        platform.save()
    }
}

/** Handles CurveY event CommitNewParameters
 * 
 * @dev The spell is scheduled with a proposed parameters
 * @dev TODO - Any outstanding spells should be set to Cancelled
 */
export function handleCommitNewParameters(event: CommitNewParameters): void {
    createAndReturnSpellForNewParameters(event)
}

/** Handles CurveY event NewParameters
 * 
 * @dev The spell is executed and parameters change
 * @dev TODO - Any outstanding spells should be set to Cancelled
 */
export function handleNewParameters(event: NewParameters): void {
    let id = PLATFORM + "-" + event.params.A.toString() + "-" + event.params.admin_fee.toString() + "-" + event.params.fee.toString()
    let tx = Spell.load(id)
    if (tx === null) {
        let debug_id = event.transaction.hash.toHexString()
        log.warning("CurveY Spell not found {}", [debug_id])
    } else {
        tx.isExecuted = true
        tx.executedAtTimestamp = event.block.timestamp
        tx.executedAtTransaction = event.transaction.hash.toHexString()
        tx.save()
    }
}
  