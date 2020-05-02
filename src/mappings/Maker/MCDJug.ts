import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDJug/MCDJug'
import { createParam, convertHexStringToBigIntString } from '../helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let what = event.params.arg1.toString()
    let fax = event.params.arg2.toHexString()
    // let usr = event.params.usr.toHexString()   // ??

    if (what == "base") {
        createParam(
            "MCDJug-".concat(what),
            "Fee applying to all collateral types",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else {
        log.warning("MCDJug what not handled: {} fax {}", [what, fax])
    }
}