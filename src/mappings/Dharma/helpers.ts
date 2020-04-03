import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { TimelockInitiated } from '../../../generated/Dharma_Timelocker/Timelocker'
import { Spell } from '../../../generated/schema'
import { Dharma_UpgradeBeaconController } from '../../../generated/templates'
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
    // Save arguments
    let upgradeBeaconControllerAddress = Address.fromString("0x".concat(event.params.arguments.toHexString().slice(26,66)))
    // let upgradeBeaconAddress = Address.fromString("0x".concat(event.params.arguments.toHexString().slice(90,130))) // Unused
    let implementationAddress = Address.fromString("0x".concat(event.params.arguments.toHexString().slice(154,194)))

    let id = PLATFORM + "-" + implementationAddress.toHexString()
    let tx = Spell.load(id)
    if (tx === null) {
        createPlatformForDharma() // Ensure platform is created

        let timelockAddress = event.address
        createTimelock(timelockAddress, PLATFORM) // Ensure timelock is created

        let targetAddress = upgradeBeaconControllerAddress
        createTarget(targetAddress, PLATFORM) // Ensure target is created

        // Create from templates
        Dharma_UpgradeBeaconController.create(upgradeBeaconControllerAddress)

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
     } else {
         log.warning("Dharma spell already exists for implementation {}", [id])
     }
     return tx as Spell
}