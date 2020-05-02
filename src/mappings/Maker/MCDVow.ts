import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDVow/MCDVow'
import { createParam, convertHexStringToBigIntString } from '../helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let what = event.params.arg1.toString()
    let fax = event.params.arg2.toHexString()
    // let usr = event.params.usr.toHexString()   // ??

    if (what == "wait") {
        createParam(
            "MCDVow-".concat(what),
            "Length of the debt queue",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "hump") {
        createParam(
            "MCDVow-".concat(what),
            "Surplus buffer",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "sump") {
        createParam(
            "MCDVow-".concat(what),
            "Debt auction bid size",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "dump") {
        createParam(
            "MCDVow-".concat(what),
            "Debt auction lot size",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "bump") {
        createParam(
            "MCDVow-".concat(what),
            "Surplus auction lot size",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else {
        log.warning("MCDVow what not handled: {} fax {}", [what, fax])
    }
}