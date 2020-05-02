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

export class Bite extends EthereumEvent {
  get params(): Bite__Params {
    return new Bite__Params(this);
  }
}

export class Bite__Params {
  _event: Bite;

  constructor(event: Bite) {
    this._event = event;
  }

  get ilk(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get urn(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ink(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get art(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tab(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get flip(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[6].value.toBigInt();
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

export class MCDCat__ilksResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class MCDCat extends SmartContract {
  static bind(address: Address): MCDCat {
    return new MCDCat("MCDCat", address);
  }

  bite(ilk: Bytes, urn: Address): BigInt {
    let result = super.call("bite", [
      EthereumValue.fromFixedBytes(ilk),
      EthereumValue.fromAddress(urn)
    ]);

    return result[0].toBigInt();
  }

  try_bite(ilk: Bytes, urn: Address): CallResult<BigInt> {
    let result = super.tryCall("bite", [
      EthereumValue.fromFixedBytes(ilk),
      EthereumValue.fromAddress(urn)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  ilks(param0: Bytes): MCDCat__ilksResult {
    let result = super.call("ilks", [EthereumValue.fromFixedBytes(param0)]);

    return new MCDCat__ilksResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_ilks(param0: Bytes): CallResult<MCDCat__ilksResult> {
    let result = super.tryCall("ilks", [EthereumValue.fromFixedBytes(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new MCDCat__ilksResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
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

  vow(): Address {
    let result = super.call("vow", []);

    return result[0].toAddress();
  }

  try_vow(): CallResult<Address> {
    let result = super.tryCall("vow", []);
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BiteCall extends EthereumCall {
  get inputs(): BiteCall__Inputs {
    return new BiteCall__Inputs(this);
  }

  get outputs(): BiteCall__Outputs {
    return new BiteCall__Outputs(this);
  }
}

export class BiteCall__Inputs {
  _call: BiteCall;

  constructor(call: BiteCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get urn(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class BiteCall__Outputs {
  _call: BiteCall;

  constructor(call: BiteCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get data(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class File1Call__Outputs {
  _call: File1Call;

  constructor(call: File1Call) {
    this._call = call;
  }
}

export class File2Call extends EthereumCall {
  get inputs(): File2Call__Inputs {
    return new File2Call__Inputs(this);
  }

  get outputs(): File2Call__Outputs {
    return new File2Call__Outputs(this);
  }
}

export class File2Call__Inputs {
  _call: File2Call;

  constructor(call: File2Call) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get what(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get flip(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class File2Call__Outputs {
  _call: File2Call;

  constructor(call: File2Call) {
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
