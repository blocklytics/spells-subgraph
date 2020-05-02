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

export class MCDJug__ilksResult {
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

export class MCDJug extends SmartContract {
  static bind(address: Address): MCDJug {
    return new MCDJug("MCDJug", address);
  }

  base(): BigInt {
    let result = super.call("base", []);

    return result[0].toBigInt();
  }

  try_base(): CallResult<BigInt> {
    let result = super.tryCall("base", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  drip(ilk: Bytes): BigInt {
    let result = super.call("drip", [EthereumValue.fromFixedBytes(ilk)]);

    return result[0].toBigInt();
  }

  try_drip(ilk: Bytes): CallResult<BigInt> {
    let result = super.tryCall("drip", [EthereumValue.fromFixedBytes(ilk)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  ilks(param0: Bytes): MCDJug__ilksResult {
    let result = super.call("ilks", [EthereumValue.fromFixedBytes(param0)]);

    return new MCDJug__ilksResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_ilks(param0: Bytes): CallResult<MCDJug__ilksResult> {
    let result = super.tryCall("ilks", [EthereumValue.fromFixedBytes(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new MCDJug__ilksResult(value[0].toBigInt(), value[1].toBigInt())
    );
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

export class DripCall extends EthereumCall {
  get inputs(): DripCall__Inputs {
    return new DripCall__Inputs(this);
  }

  get outputs(): DripCall__Outputs {
    return new DripCall__Outputs(this);
  }
}

export class DripCall__Inputs {
  _call: DripCall;

  constructor(call: DripCall) {
    this._call = call;
  }

  get ilk(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class DripCall__Outputs {
  _call: DripCall;

  constructor(call: DripCall) {
    this._call = call;
  }

  get rate(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get what(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get data(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class File2Call__Outputs {
  _call: File2Call;

  constructor(call: File2Call) {
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