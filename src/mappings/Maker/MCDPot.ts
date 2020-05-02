import { log } from "@graphprotocol/graph-ts"
import { LogNote } from '../../../generated/Maker_MCDPot/MCDPot'
<<<<<<< HEAD
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
=======
import { Spell } from '../../../generated/schema'
import { updateSpellFromLogNote } from './helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev TODO - See See https://github.com/blocklytics/spells-subgraph/issues/5
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let debug_id = event.transaction.hash.toHexString()
    let arg1 = event.params.arg1.toHexString() // ??
    let arg2 = event.params.arg2.toHexString() // ??
    let usr = event.params.usr.toHexString()   // Spell contract address
    let sig = event.params.sig.toHexString()   // Signature // Lift = 0x3c278bd5
    let data = event.params.data.toHexString() // Value

    log.debug("MCDPot  setDelay for spell {} in tx {}", [usr, debug_id])

    let tx = Spell.load(usr)
    if (tx === null) {
        log.debug("MCDPot setDelay. Spell is null in tx {}. {} {} {} {} {}", [debug_id, arg1, arg2, usr, sig, data])
        // TODO - check assumption that only etched spells can be lifted?
    } else {
        log.debug("MCDPot setDelay. Spell found in tx {}. {} {} {} {} {}", [debug_id, arg1, arg2, usr, sig, data])
        // TODO - check that spells are being found
    }
>>>>>>> origin/master
}