// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class LogNote extends EthereumEvent {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get arg1(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get arg2(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get arg3(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class MCDVat__ilksResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class MCDVat__urnsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class MCDVat extends SmartContract {
  static bind(address: Address): MCDVat {
    return new MCDVat("MCDVat", address);
  }

  Line(): BigInt {
    let result = super.call("Line", []);

    return result[0].toBigInt();
  }

  try_Line(): CallResult<BigInt> {
    let result = super.tryCall("Line", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  can(param0: Address, param1: Address): BigInt {
    let result = super.call("can", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_can(param0: Address, param1: Address): CallResult<BigInt> {
    let result = super.tryCall("can", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  dai(param0: Address): BigInt {
    let result = super.call("dai", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_dai(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("dai", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  debt(): BigInt {
    let result = super.call("debt", []);

    return result[0].toBigInt();
  }

  try_debt(): CallResult<BigInt> {
    let result = super.tryCall("debt", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  gem(param0: Bytes, param1: Address): BigInt {
    let result = super.call("gem", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_gem(param0: Bytes, param1: Address): CallResult<BigInt> {
    let result = super.tryCall("gem", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  ilks(param0: Bytes): MCDVat__ilksResult {
    let result = super.call("ilks", [EthereumValue.fromFixedBytes(param0)]);

    return new MCDVat__ilksResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_ilks(param0: Bytes): CallResult<MCDVat__ilksResult> {
    let result = super.tryCall("ilks", [EthereumValue.fromFixedBytes(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new MCDVat__ilksResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  live(): BigInt {
    let result = super.call("live", []);

    return result[0].toBigInt();
  }

  try_live(): CallResult<BigInt> {
    let result = super.tryCall("live", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  sin(param0: Address): BigInt {
    let result = super.call("sin", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_sin(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("sin", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  urns(param0: Bytes, param1: Address): MCDVat__urnsResult {
    let result = super.call("urns", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return new MCDVat__urnsResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_urns(param0: Bytes, param1: Address): CallResult<MCDVat__urnsResult> {
    let result = super.tryCall("urns", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new MCDVat__urnsResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  vice(): BigInt {
    let result = super.call("vice", []);

    return result[0].toBigInt();
  }

  try_vice(): CallResult<BigInt> {
    let result = super.tryCall("vice", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  wards(param0: Address): BigInt {
    let result = super.call("wards", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_wards(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("wards", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CageCall extends EthereumCall {
  get inputs(): CageCall__Inputs {
    return new CageCall__Inputs(this);
  }

  get outputs(): CageCall__Outputs {
    return new CageCall__Outputs(this);
  }
}

export class CageCall__Inputs {
  _call: CageCall;

  constructor(call: CageCall) {
    this._call = call;
  }
}

export class CageCall__Outputs {
  _call: CageCall;

  constructor(call: CageCall) {
    this._call = call;
  }
}

export class DenyCall extends EthereumCall {
  get inputs(): DenyCall__Inputs {
    return new DenyCall__Inputs(this);
  }

  get outputs(): DenyCall__Outputs {
    return new DenyCall__Outputs(this);
  }
}

export class DenyCall__Inputs {
  _call: DenyCall;

  constructor(call: DenyCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DenyCall__Outputs {
  _call: DenyCall;

  constructor(call: DenyCall) {
    this._call = call;
  }
}

export class FileCall extends EthereumCall {
  get inputs(): FileCall__Inputs {
    return new FileCall__Inputs(this);
  }

  get outputs(): FileCall__Outputs {
    return new FileCall__Outputs(this);
  }
}

export class FileCall__Inputs {
  _call: FileCall;

  constructor(call: FileCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get what(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get data(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class FileCall__Outputs {
  _call: FileCall;

  constructor(call: FileCall) {
    this._call = call;
  }
}

export class File1Call extends EthereumCall {
  get inputs(): File1Call__Inputs {
    return new File1Call__Inputs(this);
  }

  get outputs(): File1Call__Outputs {
    return new File1Call__Outputs(this);
  }
}

export class File1Call__Inputs {
  _call: File1Call;

  constructor(call: File1Call) {
    this._call = call;
  }

  get what(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get data(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class File1Call__Outputs {
  _call: File1Call;

  constructor(call: File1Call) {
    this._call = call;
  }
}

export class FluxCall extends EthereumCall {
  get inputs(): FluxCall__Inputs {
    return new FluxCall__Inputs(this);
  }

  get outputs(): FluxCall__Outputs {
    return new FluxCall__Outputs(this);
  }
}

export class FluxCall__Inputs {
  _call: FluxCall;

  constructor(call: FluxCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get src(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class FluxCall__Outputs {
  _call: FluxCall;

  constructor(call: FluxCall) {
    this._call = call;
  }
}

export class FoldCall extends EthereumCall {
  get inputs(): FoldCall__Inputs {
    return new FoldCall__Inputs(this);
  }

  get outputs(): FoldCall__Outputs {
    return new FoldCall__Outputs(this);
  }
}

export class FoldCall__Inputs {
  _call: FoldCall;

  constructor(call: FoldCall) {
    this._call = call;
  }

  get i(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get u(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class FoldCall__Outputs {
  _call: FoldCall;

  constructor(call: FoldCall) {
    this._call = call;
  }
}

export class ForkCall extends EthereumCall {
  get inputs(): ForkCall__Inputs {
    return new ForkCall__Inputs(this);
  }

  get outputs(): ForkCall__Outputs {
    return new ForkCall__Outputs(this);
  }
}

export class ForkCall__Inputs {
  _call: ForkCall;

  constructor(call: ForkCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get src(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get dink(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get dart(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ForkCall__Outputs {
  _call: ForkCall;

  constructor(call: ForkCall) {
    this._call = call;
  }
}

export class FrobCall extends EthereumCall {
  get inputs(): FrobCall__Inputs {
    return new FrobCall__Inputs(this);
  }

  get outputs(): FrobCall__Outputs {
    return new FrobCall__Outputs(this);
  }
}

export class FrobCall__Inputs {
  _call: FrobCall;

  constructor(call: FrobCall) {
    this._call = call;
  }

  get i(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get u(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get v(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get w(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get dink(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get dart(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class FrobCall__Outputs {
  _call: FrobCall;

  constructor(call: FrobCall) {
    this._call = call;
  }
}

export class GrabCall extends EthereumCall {
  get inputs(): GrabCall__Inputs {
    return new GrabCall__Inputs(this);
  }

  get outputs(): GrabCall__Outputs {
    return new GrabCall__Outputs(this);
  }
}

export class GrabCall__Inputs {
  _call: GrabCall;

  constructor(call: GrabCall) {
    this._call = call;
  }

  get i(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get u(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get v(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get w(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get dink(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get dart(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class GrabCall__Outputs {
  _call: GrabCall;

  constructor(call: GrabCall) {
    this._call = call;
  }
}

export class HealCall extends EthereumCall {
  get inputs(): HealCall__Inputs {
    return new HealCall__Inputs(this);
  }

  get outputs(): HealCall__Outputs {
    return new HealCall__Outputs(this);
  }
}

export class HealCall__Inputs {
  _call: HealCall;

  constructor(call: HealCall) {
    this._call = call;
  }

  get rad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class HealCall__Outputs {
  _call: HealCall;

  constructor(call: HealCall) {
    this._call = call;
  }
}

export class HopeCall extends EthereumCall {
  get inputs(): HopeCall__Inputs {
    return new HopeCall__Inputs(this);
  }

  get outputs(): HopeCall__Outputs {
    return new HopeCall__Outputs(this);
  }
}

export class HopeCall__Inputs {
  _call: HopeCall;

  constructor(call: HopeCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class HopeCall__Outputs {
  _call: HopeCall;

  constructor(call: HopeCall) {
    this._call = call;
  }
}

export class InitCall extends EthereumCall {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class MoveCall extends EthereumCall {
  get inputs(): MoveCall__Inputs {
    return new MoveCall__Inputs(this);
  }

  get outputs(): MoveCall__Outputs {
    return new MoveCall__Outputs(this);
  }
}

export class MoveCall__Inputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MoveCall__Outputs {
  _call: MoveCall;

  constructor(call: MoveCall) {
    this._call = call;
  }
}

export class NopeCall extends EthereumCall {
  get inputs(): NopeCall__Inputs {
    return new NopeCall__Inputs(this);
  }

  get outputs(): NopeCall__Outputs {
    return new NopeCall__Outputs(this);
  }
}

export class NopeCall__Inputs {
  _call: NopeCall;

  constructor(call: NopeCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class NopeCall__Outputs {
  _call: NopeCall;

  constructor(call: NopeCall) {
    this._call = call;
  }
}

export class RelyCall extends EthereumCall {
  get inputs(): RelyCall__Inputs {
    return new RelyCall__Inputs(this);
  }

  get outputs(): RelyCall__Outputs {
    return new RelyCall__Outputs(this);
  }
}

export class RelyCall__Inputs {
  _call: RelyCall;

  constructor(call: RelyCall) {
    this._call = call;
  }

  get usr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RelyCall__Outputs {
  _call: RelyCall;

  constructor(call: RelyCall) {
    this._call = call;
  }
}

export class SlipCall extends EthereumCall {
  get inputs(): SlipCall__Inputs {
    return new SlipCall__Inputs(this);
  }

  get outputs(): SlipCall__Outputs {
    return new SlipCall__Outputs(this);
  }
}

export class SlipCall__Inputs {
  _call: SlipCall;

  constructor(call: SlipCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get usr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SlipCall__Outputs {
  _call: SlipCall;

  constructor(call: SlipCall) {
    this._call = call;
  }
}

export class SuckCall extends EthereumCall {
  get inputs(): SuckCall__Inputs {
    return new SuckCall__Inputs(this);
  }

  get outputs(): SuckCall__Outputs {
    return new SuckCall__Outputs(this);
  }
}

export class SuckCall__Inputs {
  _call: SuckCall;

  constructor(call: SuckCall) {
    this._call = call;
  }

  get u(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get v(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SuckCall__Outputs {
  _call: SuckCall;

  constructor(call: SuckCall) {
    this._call = call;
  }
}
