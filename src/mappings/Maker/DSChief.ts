import { Address, BigInt, Bytes, log } from "@graphprotocol/graph-ts"
import { Etch, LogNote, LogSetAuthority, LogSetOwner, DSChief } from '../../../generated/Maker_DSChief/DSChief'
import { DSSpell } from '../../../generated/Maker_DSChief/DSSpell'
import { Tx } from '../../../generated/schema'
import { createTxIfValid } from './helpers'

export function handleEtch(event: Etch): void {
    createTxIfValid(event)
}

export function handleLogNote(event: LogNote): void {
    let id = event.transaction.hash.toHexString()
    log.debug("DSChief handleLogNote in tx {}", [id])
}

export function handleLogSetAuthority(event: LogSetAuthority): void {
    let id = event.transaction.hash.toHexString()
    log.debug("handleLogSetAuthority in tx {}", [id])
}

export function handleLogSetOwner(event: LogSetOwner): void {
    let id = event.transaction.hash.toHexString()
    log.debug("handleLogSetOwner in tx {}", [id])
}
