import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDVow/MCDVow'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    // let debug_id = event.transaction.hash.toHexString()
    let what = event.params.arg1.toString() // ??
    let fax = event.params.arg2.toHexString() // ??
    let usr = event.params.usr.toHexString()   // Spell contract address

    log.debug("MCDVow handleLogNoteSetDelay what: {} fax: {} usr: {}", [what, fax, usr])
    
    log.warning("MCDVow what not handled: {}", [what])
}