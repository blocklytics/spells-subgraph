import { BigInt, log } from "@graphprotocol/graph-ts"
import { CommitNewParameters, CommitNewAdmin } from '../../../generated/Curve_CurveY/CurveY'
import { Spell } from '../../../generated/schema'
import { createPlatform, createTimelock, createTarget } from "../helpers"

export const PLATFORM = "Curve"

function createPlatformForCurve(): void {
    createPlatform(PLATFORM, true, true, "0xc447fcaf1def19a583f97b3620627bf69c05b5fb") // Set at deployment
}

export function createAndReturnSpellForNewAdmin(event: CommitNewAdmin): Spell {
    let id = PLATFORM + "-" + event.params.admin.toHexString()
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForCurve() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let targetAddress = event.address
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        tx = new Spell(id)
        tx.description = "New Admin"
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.expiresAtTimestamp = BigInt.fromI32(0) // TODO - updates for kill deadline
        tx.eta = event.params.deadline
        tx.value = BigInt.fromI32(0)
        tx.functionName = "commit_transfer_ownership(_owner: address)"
        tx.signature = "0x6b441a40"
        tx.data = event.params.admin.toHexString()
        tx.platform = PLATFORM
        tx.target = targetAddress.toHexString()
        tx.timelock = timelockAddress.toHexString()
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
    }
    return tx as Spell
}

export function createAndReturnSpellForNewParameters(event: CommitNewParameters): Spell {
    let id = PLATFORM + "-" + event.params.A.toString() + "-" + event.params.admin_fee.toString() + "-" + event.params.fee.toString()
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForCurve() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let targetAddress = event.address
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        tx = new Spell(id)
        tx.description = "New Parameters"
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.expiresAtTimestamp = BigInt.fromI32(0) // TODO - update for kill deadline
        tx.eta = event.params.deadline
        tx.value = BigInt.fromI32(0)
        tx.functionName = "commit_new_parameters(uint256 amplification, uint256 new_fee, uint256 new_admin_fee)"
        tx.signature = "0xee11f5b6"
        tx.data = event.params.A.toString() + "-" + event.params.admin_fee.toString() + "-" + event.params.fee.toString()
        tx.platform = PLATFORM
        tx.target = targetAddress.toHexString()
        tx.timelock = timelockAddress.toHexString()
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
    } else {
        // id may not be unique
        let debug_id = event.transaction.hash.toHexString()
        log.warning("CurveY createAndReturnSpellForNewParameters. Duplicate id found for tx {}", [debug_id])
    }
    return tx as Spell
}