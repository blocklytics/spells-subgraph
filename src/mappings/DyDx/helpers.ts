import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { Submission } from '../../../generated/DyDx_PartiallyDelayedMultiSig/PartiallyDelayedMultiSig'
import { Spell } from '../../../generated/schema'
import { createPlatform, createTimelock, createTarget } from "../helpers"


export const PLATFORM = "DyDx"

/** Returns human-readable function name from 4-byte signature (keccak hash) 
 * 
 * @dev These functions come from the DyDx target contracts.
 * @param functionSignature 4-byte signature (keccak hash) 
 * @returns Human-readable function name (or input if no result found)
 */
function nameForSignature(functionSignature: string): string {
    if (functionSignature == "0x121fb72f") return functionSignature
    else if (functionSignature == "0x387a498a") return functionSignature
    else if (functionSignature == "0xf2901ae2") return functionSignature
    else if (functionSignature == "0x982f323c") return functionSignature
    else if (functionSignature == "0xef6957d0") return functionSignature
    else if (functionSignature == "0xe8e72f75") return functionSignature
    else if (functionSignature == "0x8f6bc659") return "ownerWithdrawExcessTokens(uint256,address)"
    else if (functionSignature == "0x00a341c8") return "ownerSetPokerAddress(address)"
    else if (functionSignature == "0x10b9e583") return "shutDown()"
    else if (functionSignature == "0xf83f4432") return "setSelector(address,bytes4,bool)"
    else if (functionSignature == "0xa029b36b") return "changeTimeLock(uint32)"
    else if (functionSignature == "0x7065cb48") return "addOwner(address)"
    else if (functionSignature == "0x173825d9") return "removeOwner(address)"
    else return functionSignature
}

/** Convenience function for creating DyDx Platform
 * 
 */
function createPlatformForDyDx(): void {
    createPlatform(PLATFORM, true, true) // TODO add hard-coded admins
}

export function createAndReturnSpell(event: Submission): Spell {
    let id = PLATFORM + "-" + event.params.transactionId.toString()
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForDyDx() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let input = event.transaction.input.toHexString()
        if (input.slice(0, 10) != "0xc6427474") {
            let debug_id = event.transaction.hash.toHexString()
            log.warning("DyDx createAndReturnSpell unexpected function selector {} in tx {}", [input.slice(0, 10), debug_id])
        }

        // function submitTransaction(
        //     address destination,
        //     uint256 value,
        //     bytes memory data
        // )
        //   0 0xc6427474
        //  10 0000000000000000000000001e0447b19bb6ecfdae1e4ae1694b0c3659614e4e
        //  74 0000000000000000000000000000000000000000000000000000000000000000
        // 138 0000000000000000000000000000000000000000000000000000000000000060
        // 202 0000000000000000000000000000000000000000000000000000000000000044
        // 266 121fb72f
        // 274 0000000000000000000000000000000000000000000000000000000000000002
        // 00000000000000000000000012691baf9094d2af161ba48ab5f024779b70456b
        // 00000000000000000000000000000000000000000000000000000000

        let targetAddress = Address.fromHexString(input.slice(34, 74)) as Address
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        tx = new Spell(id)
        tx.eta = BigInt.fromI32(0)
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.expiresAtTimestamp = BigInt.fromI32(0)
        tx.value = BigInt.fromI32(0) // TODO - add value from input.slice(74,138)
        tx.signature = "0x" + input.slice(266, 274)
        tx.functionName = nameForSignature(tx.signature)
        tx.data = "0x" + input.slice(274)
        tx.platform = PLATFORM
        tx.target = targetAddress.toHexString()
        tx.timelock = timelockAddress.toHexString()
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
    }
    return tx as Spell
}