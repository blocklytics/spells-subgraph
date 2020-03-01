import { Address, log } from "@graphprotocol/graph-ts"
import { CommitNewAdmin, NewAdmin, CommitNewParameters, NewParameters } from '../../../generated/Curve_CurveY/CurveY'
import { Platform, Param, Tx } from '../../../generated/schema'
import { createAndReturnTx } from "./helpers"

export function handleCommitNewAdmin(event: CommitNewAdmin): void {
    let id = event.transaction.hash.toHexString()
    let eta = event.params.deadline.toString()
    log.warning("This case in not being handled -> handleCommitNewAdmin tx {} deadline {}", [id, eta])
  }
  
export function handleNewAdmin(event: NewAdmin): void {
    let id = event.transaction.hash.toHexString()
    log.debug("This case in not being handled -> handleNewAdmin tx {}", [id])
}

export function handleCommitNewParameters(event: CommitNewParameters): void {
    createAndReturnTx(event)

}

export function handleNewParameters(event: NewParameters): void {
    // A, admin_fee, fee
    let id = event.transaction.hash.toHexString()
    log.debug("handleNewParameters tx {}", [id])
}
  