import { Address } from "@graphprotocol/graph-ts"
import { Platform, Target, Timelock } from '../../generated/schema'

/** Creates a Platform
 * 
 * @param id Platform name
 * @param usesAdmin Whether or not the contract is controlled by an admin
 * @param usesTimelock Whether or not the contract uses a timelock
 * @param currentAdmin Optional
 */
export function createPlatform(id: string, usesAdmin: boolean, usesTimelock: boolean, currentAdmin: string = null): void {
    let platform = Platform.load(id)
    if (platform === null) {
        platform = new Platform(id)
        platform.usesAdmin = usesAdmin
        platform.usesTimelock = usesTimelock
        platform.currentAdmin = currentAdmin
        platform.save()
    }    
}

/** Creates a Timelock
 * 
 * @dev The timelock is the contract which controls scheduling and execution of the Spell
 * 
 * @param address Timelock address
 * @param platform Platform name
 */
export function createTimelock(address: Address, platform: string): void {
    let id = address.toHexString()
    let timelock = Timelock.load(id)
    if (timelock === null) {
        timelock = new Timelock(id)
        timelock.platform = platform
        timelock.save()
    }
}

/** Creates a Target
 * 
 * @dev The target is the contract affected by the Spell
 * 
 * @param address Target address
 * @param platform Platform name
 */
export function createTarget(address: Address, platform: string): void {
    let id = address.toHexString()
    let target = Target.load(id)
    if (target === null) {
        target = new Target(id)
        target.platform = platform
        target.name = targetNameForId(id)
        target.save()
    }
}

/** Returns human-readable name for Ethereum address
 * 
 * @dev TODO
 * @param address Target address
 * @returns Human-readable name (or input if no result found)
 */
function targetNameForId(address: string): string {
    // Maker
    if (address == "0x9ef05f7f6deb616fd37ac3c959a2ddd25a54e4f5") return "Governance Contract"
    // Compund
    else if (address == "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b") return "Comptroller"
    else if (address == "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5") return "cETH"
    else if (address == "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643") return "cDAI"
    else if (address == "0x39aa39c021dfbae8fac545936693ac917d5e7563") return "cUSDC"
    // Curve
    else if (address == "0x45f783cce6b7ff23b2ab2d70e416cdb7d6055f51") return "Curve Y"
    // DDEX
    else if (address == "0x74622073a4821dbfd046e9aa2ccf691341a076e1") return "Proxy"
    // Dharma
    else if (address == "0x00000000001e980d286be7f5f978f4cc33128202") return "Upgrade Beacon Controller"
    else if (address == "0x00000000002226c940b74d674b85e4be05539663") return "Upgrade Beacon Controller"
    else if (address == "0x00000000011df015e8ad00d7b2486a88c2eb8210") return "Key Ring Upgrader"
    // Other
    return address
}