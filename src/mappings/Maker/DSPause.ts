import { Address, log } from "@graphprotocol/graph-ts"
import { LogNote, LogSetAuthority, LogSetOwner } from '../../../generated/Maker_DSPause/DSPause'
import { Tx, Timelock } from '../../../generated/schema'

export function handleLogNote(event: LogNote): void {
    let id = event.params.sig.toHexString() // Sig
    log.debug("DSPause handleLogNote in tx {}", [id])
    let tx = Tx.load(id)
    if (tx !== null) {
        log.debug("(handleLogNote) id is not null {}", [id])
        tx = new Tx(id)

        createTimelock(event.address)
        tx.eta = event.params.wad
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.signature = event.params.foo.toHexString()
        tx.data = event.params.bar.toHexString()
        tx.target = event.params.guy.toHexString()
        tx.timelock = event.address.toHexString() // Should match id in createTimelock function
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
    }
}

export function handleLogSetAuthority(event: LogSetAuthority): void {}

export function handleLogSetOwner(event: LogSetOwner): void {}

function createTimelock(address: Address): void {
    let id = address.toHexString()
    let timelock = Timelock.load(id)
    if (timelock === null) {
        timelock = new Timelock(id)
        timelock.platform = "Maker"
        timelock.save()
    }
}