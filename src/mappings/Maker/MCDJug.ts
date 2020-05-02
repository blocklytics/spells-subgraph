import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDJug/MCDJug'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    // let debug_id = event.transaction.hash.toHexString()
    let what = event.params.arg1.toString() // ??
    let fax = event.params.arg2.toHexString() // ??
    let usr = event.params.usr.toHexString()   // Spell contract address
    // let sig = event.params.sig.toHexString()   // Signature // Lift = 0x3c278bd5
    // let data = event.params.data.toHexString() // Value

    log.debug("MCDJug handleLogNoteSetDelay what: {} fax: {} usr: {}", [what, fax, usr])
    log.warning("MCDJug what not handled: {}", [what])
}