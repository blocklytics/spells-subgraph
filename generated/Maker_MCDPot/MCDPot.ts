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

export class MCDPot extends SmartContract {
  static bind(address: Address): MCDPot {
    return new MCDPot("MCDPot", address);
  }

  Pie(): BigInt {
    let result = super.call("Pie", []);

    return result[0].toBigInt();
  }

  try_Pie(): CallResult<BigInt> {
    let result = super.tryCall("Pie", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  chi(): BigInt {
    let result = super.call("chi", []);

    return result[0].toBigInt();
  }

  try_chi(): CallResult<BigInt> {
    let result = super.tryCall("chi", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  drip(): BigInt {
    let result = super.call("drip", []);

    return result[0].toBigInt();
  }

  try_drip(): CallResult<BigInt> {
    let result = super.tryCall("drip", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  dsr(): BigInt {
    let result = super.call("dsr", []);

    return result[0].toBigInt();
  }

  try_dsr(): CallResult<BigInt> {
    let result = super.tryCall("dsr", []);
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

  pie(param0: Address): BigInt {
    let result = super.call("pie", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_pie(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("pie", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  rho(): BigInt {
    let result = super.call("rho", []);

    return result[0].toBigInt();
  }

  try_rho(): CallResult<BigInt> {
    let result = super.tryCall("rho", []);
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

  get guy(): Address {
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
}

export class DripCall__Outputs {
  _call: DripCall;

  constructor(call: DripCall) {
    this._call = call;
  }

  get tmp(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExitCall extends EthereumCall {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
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

  get addr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class File1Call__Outputs {
  _call: File1Call;

  constructor(call: File1Call) {
    this._call = call;
  }
}

export class JoinCall extends EthereumCall {
  get inputs(): JoinCall__Inputs {
    return new JoinCall__Inputs(this);
  }

  get outputs(): JoinCall__Outputs {
    return new JoinCall__Outputs(this);
  }
}

export class JoinCall__Inputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }

  get wad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class JoinCall__Outputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
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

  get guy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RelyCall__Outputs {
  _call: RelyCall;

  constructor(call: RelyCall) {
    this._call = call;
  }
}
