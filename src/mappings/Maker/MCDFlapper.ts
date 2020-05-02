import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDFlapper/MCDFlapper'
import { createParam, convertHexStringToBigIntString } from '../helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flap-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let what = event.params.arg1.toString()
    let fax = event.params.arg2.toHexString()
    // let usr = event.params.usr.toHexString()   // ??

    if (what == "beg") {
        createParam(
            "MCDFlapper-".concat(what),
            "Minimum bid increase",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "ttl") {
        createParam(
            "MCDFlapper-".concat(what),
            "Bid lifetime",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "tau") {
        createParam(
            "MCDFlapper-".concat(what),
            "Maximum auction duration",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else {
        log.warning("MCDFlapper what not handled: {} {}", [what, fax])
    }
}