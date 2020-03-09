import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { TimelockInitiated } from '../../../generated/Dharma_Timelocker/Timelocker'
import { Spell } from '../../../generated/schema'
import { createPlatform, createTimelock, createTarget } from '../helpers'

export const PLATFORM = "Dharma"

/** Returns human-readable function name from 4-byte signature
 * 
 * @dev These functions come from the Dharma contract comments.
 * @param signature 4-byte signature (keccak hash)
 * @returns result (or input if no result found)
 */
function nameForSignature(signature: string): string {
    if (signature == "0xf000999e") return "upgrade(address,address,address)"
    else if (signature == "0x3e12b2ed") return "transferControllerOwnership(address,address)"
    else if (signature == "0xe950c085") return "modifyTimelockInterval(bytes4,uint256)"
    else if (signature == "0xd7ce3c6f") return "modifyTimelockExpiration(bytes4,uint256)"
    else return signature
}

/** Convenience function for creating DDEX Platform
 * 
 * @dev The `currentAdmin` is hardcoded based on deployment parameters of the Timelocker
 * @dev TODO - update `currentAdmin` for ownership transfers
 */
function createPlatformForDharma(): void {
    createPlatform(PLATFORM, true, true, "0x00000001008b2ff2004f00a7c8a0f48c675e5034")
}

/** Creates and returns a Spell from the Timelocker TimelockInitiated event.
 * 
 * @dev If the spell already exists, it is returned. If the spell does not exist, it is created then returned.
 * @param event Timelocker TimelockInitiated
 * @returns Spell
 */
export function createAndReturnSpell(event: TimelockInitiated): Spell {
    let id = PLATFORM + "-" + event.params.arguments.toHexString() // Contract uses hashed value of args
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForDharma() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let targetAddress = Address.fromHexString("0x".concat(event.params.arguments.toHexString().slice(26,66))) as Address // UpgradeBeaconController
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        // log.debug("Dharma new tx args: {} {} {} in tx {}", [
        //     "0x".concat(event.params.arguments.toHexString().slice(26,66)),   // UpgradeBeaconController
        //     // Note: the UpgradeBeaconController will emit an Upgrade event with new implementation
        //     // TODO - See https://github.com/blocklytics/spells-subgraph/issues/12
        //     //      - Create a template for UpgradeBeaconControllers
        //     //      - List for Upgrade events to check when a Spell is executed
        //     "0x".concat(event.params.arguments.toHexString().slice(80,120)),  // UpgradeBeacon
        //     "0x".concat(event.params.arguments.toHexString().slice(144,184)), // Implementation
        //     event.transaction.hash.toHexString()
        // ])

        tx = new Spell(id)
        tx.description = "Upgrade"
        tx.eta = event.params.timeComplete
        tx.createdAtTimestamp = event.block.timestamp
        tx.createdAtTransaction = event.transaction.hash.toHexString()
        tx.expiresAtTimestamp = event.params.timeExpired
        tx.value = BigInt.fromI32(0)
        tx.signature = event.params.functionSelector.toHexString()
        tx.functionName = nameForSignature(tx.signature)
        tx.data = event.params.arguments.toHexString()
        tx.platform = PLATFORM
        tx.target = targetAddress.toHexString()
        tx.timelock = timelockAddress.toHexString()
        tx.isCancelled = false
        tx.isExecuted = false
        tx.save()
     }
     return tx as Spell
}