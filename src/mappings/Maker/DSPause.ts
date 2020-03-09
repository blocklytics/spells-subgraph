import { log } from "@graphprotocol/graph-ts"
import { LogNote, LogSetAuthority, LogSetOwner } from '../../../generated/Maker_DSPause/DSPause'
import { Spell } from '../../../generated/schema'
import { updateSpellFromLogNote } from './helpers'

/** Handles anonymous event for `setDelay(address)`
 * 
 * @dev TODO - See See https://github.com/blocklytics/spells-subgraph/issues/5
 */
export function handleLogNoteSetDelay(event: LogNote): void {
    let debug_id = event.transaction.hash.toHexString()
    let bar = event.params.bar.toHexString() // ??
    let fax = event.params.fax.toHexString() // ??
    let foo = "0x".concat(event.params.foo.toHexString().slice(26)) // ??
    let guy = event.params.guy.toHexString() // Spell contract address
    let sig = event.params.sig.toHexString() // Signature // Lift = 0x3c278bd5
    let wad = event.params.wad.toString()    // Value

    log.debug("DSPause setDelay for spell {} in tx {}", [guy, debug_id])

    let tx = Spell.load(guy)
    if (tx === null) {
        log.debug("DSPause setDelay. Spell is null in tx {}. {} {} {} {} {} {}", [debug_id, bar, fax, foo, guy, sig, wad])
        // TODO - check assumption that only etched spells can be lifted?
    } else {
        log.debug("DSPause setDelay. Spell found in tx {}. {} {} {} {} {} {}", [debug_id, bar, fax, foo, guy, sig, wad])
        // TODO - check that spells are being found
    }
}

/** Handles anonymous event for `plot(address usr, bytes32 tag, bytes memory fax, uint eta)`
 * 
 * @dev This event schedules a spell
 */
export function handleLogNotePlot(event: LogNote): void {
    updateSpellFromLogNote(event)
}

/** Handles anonymous event for `drop(address usr, bytes32 tag, bytes memory fax, uint eta)`
 * 
 * @dev This event cancels a spell
 */
export function handleLogNoteDrop(event: LogNote): void {
    updateSpellFromLogNote(event)
}

/** Handles anonymous event for `exec(address usr, bytes32 tag, bytes memory fax, uint eta)`
 * 
 * @dev This event executes a spell
 */
export function handleLogNoteExec(event: LogNote): void {
    updateSpellFromLogNote(event)
}

/** Handles event LogSetAuthority
 * 
 * @dev TODO - See https://github.com/blocklytics/spells-subgraph/issues/14
 */
export function handleLogSetAuthority(event: LogSetAuthority): void {
    let debug_id = event.transaction.hash.toHexString()
    log.warning("DSPause handleLogSetAuthority not handled in tx {}", [debug_id])
}

/** Handles event LogSetOwner
 * 
 * @dev TODO - See https://github.com/blocklytics/spells-subgraph/issues/14
 */
export function handleLogSetOwner(event: LogSetOwner): void {
    let debug_id = event.transaction.hash.toHexString()
    log.warning("DSPause handleLogSetOwner not handled in tx {}", [debug_id])
}