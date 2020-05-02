import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_Flopper/Flopper'
import { createParam, convertHexStringToBigIntString } from '../helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev Maker docs https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/flop-detailed-documentation
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let what = event.params.arg1.toString()    // what
    let fax = event.params.arg2.toHexString()  // data

    if (what == "beg") {
        createParam(
            "Flopper-".concat(what),
            "Minimum bid decrease",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "pad") {
        createParam(
            "Flopper-".concat(what),
            "Auction lot size",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "ttl") {
        createParam(
            "Flopper-".concat(what),
            "Bid lifetime",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else if (what == "tau") {
        createParam(
            "Flopper-".concat(what),
            "Maximum auction duration",
            "Maker",
            event.address.toHexString(),
            convertHexStringToBigIntString(fax)
        )
    }
    else {
        log.warning("Flopper what not handled: {}", [what])
    }
}