import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDVat/MCDVat'
import { createParam, convertHexStringToBigIntString } from "../helpers"

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let what = event.params.arg1.toString()
    let fax = event.params.arg2.toHexString()

    if (what == "Line") {
        createParam(
            "MCDVat-".concat(what),
            "Total debt ceiling for all collateral types",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else {
        log.warning("MCDVat what not handled: {}", [what])
    }
}