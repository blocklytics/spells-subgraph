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

export class Kick extends EthereumEvent {
  get params(): Kick__Params {
    return new Kick__Params(this);
  }
}

export class Kick__Params {
  _event: Kick;

  constructor(event: Kick) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lot(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

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

  get usr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get arg1(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get arg2(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class MCDFlapper__bidsResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
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
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class MCDFlapper extends SmartContract {
  static bind(address: Address): MCDFlapper {
    return new MCDFlapper("MCDFlapper", address);
  }

  beg(): BigInt {
    let result = super.call("beg", []);

    return result[0].toBigInt();
  }

  try_beg(): CallResult<BigInt> {
    let result = super.tryCall("beg", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  bids(param0: BigInt): MCDFlapper__bidsResult {
    let result = super.call("bids", [EthereumValue.fromUnsignedBigInt(param0)]);

    return new MCDFlapper__bidsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_bids(param0: BigInt): CallResult<MCDFlapper__bidsResult> {
    let result = super.tryCall("bids", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new MCDFlapper__bidsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  gem(): Address {
    let result = super.call("gem", []);

    return result[0].toAddress();
  }

  try_gem(): CallResult<Address> {
    let result = super.tryCall("gem", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  kick(lot: BigInt, bid: BigInt): BigInt {
    let result = super.call("kick", [
      EthereumValue.fromUnsignedBigInt(lot),
      EthereumValue.fromUnsignedBigInt(bid)
    ]);

    return result[0].toBigInt();
  }

  try_kick(lot: BigInt, bid: BigInt): CallResult<BigInt> {
    let result = super.tryCall("kick", [
      EthereumValue.fromUnsignedBigInt(lot),
      EthereumValue.fromUnsignedBigInt(bid)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  kicks(): BigInt {
    let result = super.call("kicks", []);

    return result[0].toBigInt();
  }

  try_kicks(): CallResult<BigInt> {
    let result = super.tryCall("kicks", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
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

  tau(): BigInt {
    let result = super.call("tau", []);

    return result[0].toBigInt();
  }

  try_tau(): CallResult<BigInt> {
    let result = super.tryCall("tau", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  ttl(): BigInt {
    let result = super.call("ttl", []);

    return result[0].toBigInt();
  }

  try_ttl(): CallResult<BigInt> {
    let result = super.tryCall("ttl", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  vat(): Address {
    let result = super.call("vat", []);

    return result[0].toAddress();
  }

  try_vat(): CallResult<Address> {
    let result = super.tryCall("vat", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
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

  get vat_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gem_(): Address {
    return this._call.inputValues[1].value.toAddress();
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

  get rad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CageCall__Outputs {
  _call: CageCall;

  constructor(call: CageCall) {
    this._call = call;
  }
}

export class DealCall extends EthereumCall {
  get inputs(): DealCall__Inputs {
    return new DealCall__Inputs(this);
  }

  get outputs(): DealCall__Outputs {
    return new DealCall__Outputs(this);
  }
}

export class DealCall__Inputs {
  _call: DealCall;

  constructor(call: DealCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DealCall__Outputs {
  _call: DealCall;

  constructor(call: DealCall) {
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

  get what(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get data(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FileCall__Outputs {
  _call: FileCall;

  constructor(call: FileCall) {
    this._call = call;
  }
}

export class KickCall extends EthereumCall {
  get inputs(): KickCall__Inputs {
    return new KickCall__Inputs(this);
  }

  get outputs(): KickCall__Outputs {
    return new KickCall__Outputs(this);
  }
}

export class KickCall__Inputs {
  _call: KickCall;

  constructor(call: KickCall) {
    this._call = call;
  }

  get lot(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class KickCall__Outputs {
  _call: KickCall;

  constructor(call: KickCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

export class TendCall extends EthereumCall {
  get inputs(): TendCall__Inputs {
    return new TendCall__Inputs(this);
  }

  get outputs(): TendCall__Outputs {
    return new TendCall__Outputs(this);
  }
}

export class TendCall__Inputs {
  _call: TendCall;

  constructor(call: TendCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get lot(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get bid(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TendCall__Outputs {
  _call: TendCall;

  constructor(call: TendCall) {
    this._call = call;
  }
}

export class TickCall extends EthereumCall {
  get inputs(): TickCall__Inputs {
    return new TickCall__Inputs(this);
  }

  get outputs(): TickCall__Outputs {
    return new TickCall__Outputs(this);
  }
}

export class TickCall__Inputs {
  _call: TickCall;

  constructor(call: TickCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TickCall__Outputs {
  _call: TickCall;

  constructor(call: TickCall) {
    this._call = call;
  }
}

export class YankCall extends EthereumCall {
  get inputs(): YankCall__Inputs {
    return new YankCall__Inputs(this);
  }

  get outputs(): YankCall__Outputs {
    return new YankCall__Outputs(this);
  }
}

export class YankCall__Inputs {
  _call: YankCall;

  constructor(call: YankCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class YankCall__Outputs {
  _call: YankCall;

  constructor(call: YankCall) {
    this._call = call;
  }
}
