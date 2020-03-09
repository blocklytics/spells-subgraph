import { log } from "@graphprotocol/graph-ts"
import { Etch, LogNote, LogSetAuthority, LogSetOwner } from '../../../generated/Maker_DSChief/DSChief'
import { createSpellIfValid } from './helpers'

export function handleEtch(event: Etch): void {
    createSpellIfValid(event)
}

export function handleLogNoteLift(event: LogNote): void {}

export function handleLogSetAuthority(event: LogSetAuthority): void {
    let id = event.transaction.hash.toHexString()
    log.warning("DSChief handleLogSetAuthority is not handled. Emitted in tx {}", [id])
}

export function handleLogSetOwner(event: LogSetOwner): void {
    let id = event.transaction.hash.toHexString()
    log.warning("DSChief handleLogSetOwner is not handled. Emitted in tx {}", [id])
}
