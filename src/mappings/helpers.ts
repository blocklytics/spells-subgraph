import { Address, BigInt, ByteArray, Bytes } from "@graphprotocol/graph-ts"
import { Param, Platform, Target, Timelock } from '../../generated/schema'

/** Converts an event param value to an address string
 * 
 * @param hexString 32-byte string prepended with "0x"
 * @returns 20-byte string prepended with "0x"
 */
export function convertHexStringToAddressString(hexString: string): string {
    return hexString.slice(0, 3).concat(hexString.slice(27))
}

/** Converts an event param value to an BigInt string
 * 
 * @param hexString 32-byte string prepended with "0x"
 * @returns BigInt-like string
*/
export function convertHexStringToBigIntString(hexString: string): string {
    let bytes = ByteArray.fromHexString(hexString).reverse()
    let int = BigInt.fromSignedBytes(bytes as Bytes)
    return int.toString()
}

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

/** Creates a Param
 * 
 * @param id Unique name
 * @param description Human-readable description
 * @param platform Platform ID
 * @param target Target ID
 * @param currentValue Current value (as a string)
 */
export function createParam(id: string, description: string, platform: string, target: string, currentValue: string): void {
    let param = Param.load(id)
    if (param === null) {
        param = new Param(id)
        param.description = description
        param.platform = platform
        param.target = target
    }
    param.currentValue = currentValue
    param.save()
}

/** Returns human-readable name for Ethereum address
 * 
 * @param address Target address
 * @returns Human-readable name (or input if no result found)
 */
function targetNameForId(address: string): string {
    // Maker
    if (address == "0x9ef05f7f6deb616fd37ac3c959a2ddd25a54e4f5") return "Governance Contract"
    else if (address == "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359") return "SAI"
    // Compund
    else if (address == "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b") return "Comptroller"
    else if (address == "0x97bd4cc841fc999194174cd1803c543247a014fe") return "Comptroller"
    else if (address == "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5") return "cETH"
    else if (address == "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643") return "cDAI"
    else if (address == "0x39aa39c021dfbae8fac545936693ac917d5e7563") return "cUSDC"
    else if (address == "0xf5dce57282a584d2746faf1593d3121fcac444dc") return "cSAI"
    else if (address == "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e") return "cBAT"
    else if (address == "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407") return "cZRX"
    else if (address == "0x158079ee67fce2f58472a96584a73c7ab9ac95c1") return "cREP"
    else if (address == "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4") return "cWBTC"
    else if (address == "0x6d903f6003cca6255d85cca4d3b5e5146dc33925") return "Timelock"
    // Curve
    else if (address == "0x45f783cce6b7ff23b2ab2d70e416cdb7d6055f51") return "Curve Y"
    else if (address == "0x79a8c46dea5ada233abaffd40f3a0a2b1e5a4f27") return "Curve B"
    else if (address == "0xa5407eae9ba41422680e2e00537571bcc53efbfd") return "Curve S" // v2
    else if (address == "0xa2b47e3d5c44877cca798226b7b8118f9bfb7a56") return "Curve C"
    // DDEX
    else if (address == "0x74622073a4821dbfd046e9aa2ccf691341a076e1") return "Proxy"
    // Dharma
    else if (address == "0x00000000001e980d286be7f5f978f4cc33128202") return "Upgrade Beacon Controller"
    else if (address == "0x00000000002226c940b74d674b85e4be05539663") return "Upgrade Beacon Controller"
    else if (address == "0x00000000011df015e8ad00d7b2486a88c2eb8210") return "Key Ring Upgrader"
    else if (address == "0x0000000000796dc3aa12eb9fe3b6e8f4d92cc966") return "USDC Upgrade Beacon Controller"
    // DyDx
    else if (address == "0x1e0447b19bb6ecfdae1e4ae1694b0c3659614e4e") return "SoloMargin"
    else if (address == "0xba2906b18b069b40c6d2cafd392e76ad479b1b53") return "Timelock"
    else if (address == "0x93ae58cc1d029bbdf8b53a89337f4abb63f6d588") return "StopLimitOrders"
    else if (address == "0x787f552bdc17332c98aa360748884513e3cb401a") return "DaiPriceOracle"
    // Other
    return address
}