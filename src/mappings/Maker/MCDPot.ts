import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDPot/MCDPot'
import { createParam, convertHexStringToBigIntString, convertHexStringToAddressString } from '../helpers'

/** Handles anonymous event for `file(bytes32,uin32)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/rates-module/pot-detailed-documentation
 */
export function handleLogNoteFileForDsr(event: LogNote): void {
    let what = event.params.arg1.toString() // what
    let fax = event.params.arg2.toHexString() // dsr
    // let usr = event.params.usr.toHexString()   // DSPauseProxy

    if (what == "dsr") {
        createParam(
            "MCDPot-".concat(what),
            "MCD Savings Rate",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax) // ONE = 10^27
        )
    }
    else {
        log.warning("MCDPot what not handled: {}", [what])
    }
}

/** Handles anonymous event for `file(bytes32,address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
 */
export function handleLogNoteFileForVow(event: LogNote): void {
    let what = event.params.arg1.toString() // what
    let fax = event.params.arg2.toHexString() // vow
    // let usr = event.params.usr.toHexString()   // DSPauseProxy

    if (what == "vow") {
        createParam(
            "MCDPot-".concat(what),
            "Vow implementation",
            "Maker",
            event.address.toHexString(),
            convertHexStringToAddressString(fax)
        )
    }
    else {
        log.warning("MCDPot what not handled: {}", [what])
    }
}

/** Handles anonymous event for `cage()`
 * 
 * @dev - TODO - This has not been implemented
 */
export function handleLogNoteFileForCage(event: LogNote): void {
    let debug_id = event.transaction.hash.toHexString()
    let arg1 = event.params.arg1.toHexString() // null
    let arg2 = event.params.arg2.toHexString() // null
    let usr = event.params.usr.toHexString()   // DSPauseProxy

    log.warning("MCDPot handleLogNoteFileForCage not handled in tx {}", [debug_id])
}