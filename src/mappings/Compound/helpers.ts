import { BigInt } from "@graphprotocol/graph-ts"
import { QueueTransaction } from '../../../generated/Compound_Timelock/Timelock'
import { Spell } from '../../../generated/schema'
import { createPlatform, createTimelock, createTarget } from "../helpers"

const PLATFORM = "Compound"

/** Returns 4-byte signature (keccak hash) from human-readable function name
 * 
 * @dev These functions come from the Compound target contracts with `Admin Functions` specified.
 * @param functionName Human-readable function name
 * @returns 4-byte signature (or input if no result found)
 */
function signatureForName(functionName: string): string {
    if (functionName == "_setReserveFactor(uint256)") return "0xfca7820b"
    else if (functionName == "_setInterestRateModel(address)") return "0xf2b3abbd"
    else if (functionName == "_setCollateralFactor(address,uint256)") return "0xe4028eee"
    else if (functionName == "transfer(address,uint256)") return "0xa9059cbb"
    else if (functionName == "_reduceReserves(uint256)") return "0x601a0bf1"
    else if (functionName == "_setImplementation(address,bool,bytes)") return "0x555bcc40"
    else if (functionName == "_supportMarket(address)") return "0xa76b3fda"
    else if (functionName == "_setPriceOracle(address)") return "0x55ee1fe1"
    else if (functionName == "_setComptroller(address)") return "0x4576b5db"
    else if (functionName == "_setPendingAdmin(address)") return "0xb71d1a0c"
    else if (functionName == "_acceptAdmin()") return "0xe9c714f2"
    else return functionName
}

/** Convenience function for creating Compound Platform
 * 
 * @dev TODO - update `currentAdmin`
 */
function createPlatformForCompound(): void {
    createPlatform(PLATFORM, true, true)
}

export function createAndReturnSpell(event: QueueTransaction): Spell {
    let id = event.params.txHash.toHexString() // Signature of the spell (not the transaction hash!)
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForCompound() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let targetAddress = event.params.target
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        tx = new Spell(id)
        tx.eta = event.params.eta
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.expiresAtTimestamp = BigInt.fromI32(0)
        tx.value = event.params.value
        tx.functionName = event.params.signature
        tx.signature = signatureForName(tx.functionName)
        tx.data = event.params.data.toHexString()
        tx.platform = PLATFORM
        tx.target = targetAddress.toHexString()
        tx.timelock = timelockAddress.toHexString()
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
    }
    return tx as Spell
}