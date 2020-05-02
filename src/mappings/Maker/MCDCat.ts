import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDCat/MCDCat'
import { createParam } from "../helpers"

/** Handles anonymous event for `flipFile(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/core-module/cat-detailed-documentation
 */
export function handleFlipFile(event: LogNote): void {
    let debug_id = event.transaction.hash.toHexString()
    let what = event.params.arg1.toString()
    let fax = event.params.arg2.toHexString()
    let usr = event.params.usr.toHexString()

    if (what == "USDC-A") {
        createParam(
            "MCDCat-".concat(what),
            "",
            "Maker",
            event.address.toHexString(),
            fax
        )
    }
    else if (what == "BAT-A") {
        createParam(
            "MCDCat-".concat(what),
            "",
            "Maker",
            event.address.toHexString(),
            fax
        )
    }
    else if (what == "ETH-A") {
        createParam(
            "MCDCat-".concat(what),
            "",
            "Maker",
            event.address.toHexString(),
            fax
        )
    }
    else if (what == "SAI") {
        createParam(
            "MCDCat-".concat(what),
            "",
            "Maker",
            event.address.toHexString(),
            fax
        )
    }
    else {
        log.warning("MCDCat what not handled: {}", [what])
    }
}