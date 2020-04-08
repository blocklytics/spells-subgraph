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

export class SelectorSet extends EthereumEvent {
  get params(): SelectorSet__Params {
    return new SelectorSet__Params(this);
  }
}

export class SelectorSet__Params {
  _event: SelectorSet;

  constructor(event: SelectorSet) {
    this._event = event;
  }

  get destination(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get selector(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ConfirmationTimeSet extends EthereumEvent {
  get params(): ConfirmationTimeSet__Params {
    return new ConfirmationTimeSet__Params(this);
  }
}

export class ConfirmationTimeSet__Params {
  _event: ConfirmationTimeSet;

  constructor(event: ConfirmationTimeSet) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get confirmationTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TimeLockChange extends EthereumEvent {
  get params(): TimeLockChange__Params {
    return new TimeLockChange__Params(this);
  }
}

export class TimeLockChange__Params {
  _event: TimeLockChange;

  constructor(event: TimeLockChange) {
    this._event = event;
  }

  get secondsTimeLocked(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Confirmation extends EthereumEvent {
  get params(): Confirmation__Params {
    return new Confirmation__Params(this);
  }
}

export class Confirmation__Params {
  _event: Confirmation;

  constructor(event: Confirmation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get transactionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Revocation extends EthereumEvent {
  get params(): Revocation__Params {
    return new Revocation__Params(this);
  }
}

export class Revocation__Params {
  _event: Revocation;

  constructor(event: Revocation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get transactionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Submission extends EthereumEvent {
  get params(): Submission__Params {
    return new Submission__Params(this);
  }
}

export class Submission__Params {
  _event: Submission;

  constructor(event: Submission) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Execution extends EthereumEvent {
  get params(): Execution__Params {
    return new Execution__Params(this);
  }
}

export class Execution__Params {
  _event: Execution;

  constructor(event: Execution) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ExecutionFailure extends EthereumEvent {
  get params(): ExecutionFailure__Params {
    return new ExecutionFailure__Params(this);
  }
}

export class ExecutionFailure__Params {
  _event: ExecutionFailure;

  constructor(event: ExecutionFailure) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnerAddition extends EthereumEvent {
  get params(): OwnerAddition__Params {
    return new OwnerAddition__Params(this);
  }
}

export class OwnerAddition__Params {
  _event: OwnerAddition;

  constructor(event: OwnerAddition) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnerRemoval extends EthereumEvent {
  get params(): OwnerRemoval__Params {
    return new OwnerRemoval__Params(this);
  }
}

export class OwnerRemoval__Params {
  _event: OwnerRemoval;

  constructor(event: OwnerRemoval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RequirementChange extends EthereumEvent {
  get params(): RequirementChange__Params {
    return new RequirementChange__Params(this);
  }
}

export class RequirementChange__Params {
  _event: RequirementChange;

  constructor(event: RequirementChange) {
    this._event = event;
  }

  get required(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PartiallyDelayedMultiSig__transactionsResult {
  value0: Address;
  value1: BigInt;
  value2: Bytes;
  value3: boolean;

  constructor(value0: Address, value1: BigInt, value2: Bytes, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromBytes(this.value2));
    map.set("value3", EthereumValue.fromBoolean(this.value3));
    return map;
  }
}

export class PartiallyDelayedMultiSig extends SmartContract {
  static bind(address: Address): PartiallyDelayedMultiSig {
    return new PartiallyDelayedMultiSig("PartiallyDelayedMultiSig", address);
  }

  owners(param0: BigInt): Address {
    let result = super.call("owners", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_owners(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("owners", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  isOwner(param0: Address): boolean {
    let result = super.call("isOwner", [EthereumValue.fromAddress(param0)]);

    return result[0].toBoolean();
  }

  try_isOwner(param0: Address): CallResult<boolean> {
    let result = super.tryCall("isOwner", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  confirmations(param0: BigInt, param1: Address): boolean {
    let result = super.call("confirmations", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toBoolean();
  }

  try_confirmations(param0: BigInt, param1: Address): CallResult<boolean> {
    let result = super.tryCall("confirmations", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  secondsTimeLocked(): BigInt {
    let result = super.call("secondsTimeLocked", []);

    return result[0].toBigInt();
  }

  try_secondsTimeLocked(): CallResult<BigInt> {
    let result = super.tryCall("secondsTimeLocked", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  instantData(param0: Address, param1: Bytes): boolean {
    let result = super.call("instantData", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromFixedBytes(param1)
    ]);

    return result[0].toBoolean();
  }

  try_instantData(param0: Address, param1: Bytes): CallResult<boolean> {
    let result = super.tryCall("instantData", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromFixedBytes(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getTransactionCount(pending: boolean, executed: boolean): BigInt {
    let result = super.call("getTransactionCount", [
      EthereumValue.fromBoolean(pending),
      EthereumValue.fromBoolean(executed)
    ]);

    return result[0].toBigInt();
  }

  try_getTransactionCount(
    pending: boolean,
    executed: boolean
  ): CallResult<BigInt> {
    let result = super.tryCall("getTransactionCount", [
      EthereumValue.fromBoolean(pending),
      EthereumValue.fromBoolean(executed)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  isConfirmed(transactionId: BigInt): boolean {
    let result = super.call("isConfirmed", [
      EthereumValue.fromUnsignedBigInt(transactionId)
    ]);

    return result[0].toBoolean();
  }

  try_isConfirmed(transactionId: BigInt): CallResult<boolean> {
    let result = super.tryCall("isConfirmed", [
      EthereumValue.fromUnsignedBigInt(transactionId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getConfirmationCount(transactionId: BigInt): BigInt {
    let result = super.call("getConfirmationCount", [
      EthereumValue.fromUnsignedBigInt(transactionId)
    ]);

    return result[0].toBigInt();
  }

  try_getConfirmationCount(transactionId: BigInt): CallResult<BigInt> {
    let result = super.tryCall("getConfirmationCount", [
      EthereumValue.fromUnsignedBigInt(transactionId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  transactions(param0: BigInt): PartiallyDelayedMultiSig__transactionsResult {
    let result = super.call("transactions", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new PartiallyDelayedMultiSig__transactionsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBytes(),
      result[3].toBoolean()
    );
  }

  try_transactions(
    param0: BigInt
  ): CallResult<PartiallyDelayedMultiSig__transactionsResult> {
    let result = super.tryCall("transactions", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new PartiallyDelayedMultiSig__transactionsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBytes(),
        value[3].toBoolean()
      )
    );
  }

  getOwners(): Array<Address> {
    let result = super.call("getOwners", []);

    return result[0].toAddressArray();
  }

  try_getOwners(): CallResult<Array<Address>> {
    let result = super.tryCall("getOwners", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }

  getTransactionIds(
    from: BigInt,
    to: BigInt,
    pending: boolean,
    executed: boolean
  ): Array<BigInt> {
    let result = super.call("getTransactionIds", [
      EthereumValue.fromUnsignedBigInt(from),
      EthereumValue.fromUnsignedBigInt(to),
      EthereumValue.fromBoolean(pending),
      EthereumValue.fromBoolean(executed)
    ]);

    return result[0].toBigIntArray();
  }

  try_getTransactionIds(
    from: BigInt,
    to: BigInt,
    pending: boolean,
    executed: boolean
  ): CallResult<Array<BigInt>> {
    let result = super.tryCall("getTransactionIds", [
      EthereumValue.fromUnsignedBigInt(from),
      EthereumValue.fromUnsignedBigInt(to),
      EthereumValue.fromBoolean(pending),
      EthereumValue.fromBoolean(executed)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigIntArray());
  }

  getConfirmations(transactionId: BigInt): Array<Address> {
    let result = super.call("getConfirmations", [
      EthereumValue.fromUnsignedBigInt(transactionId)
    ]);

    return result[0].toAddressArray();
  }

  try_getConfirmations(transactionId: BigInt): CallResult<Array<Address>> {
    let result = super.tryCall("getConfirmations", [
      EthereumValue.fromUnsignedBigInt(transactionId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }

  transactionCount(): BigInt {
    let result = super.call("transactionCount", []);

    return result[0].toBigInt();
  }

  try_transactionCount(): CallResult<BigInt> {
    let result = super.tryCall("transactionCount", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  submitTransaction(destination: Address, value: BigInt, data: Bytes): BigInt {
    let result = super.call("submitTransaction", [
      EthereumValue.fromAddress(destination),
      EthereumValue.fromUnsignedBigInt(value),
      EthereumValue.fromBytes(data)
    ]);

    return result[0].toBigInt();
  }

  try_submitTransaction(
    destination: Address,
    value: BigInt,
    data: Bytes
  ): CallResult<BigInt> {
    let result = super.tryCall("submitTransaction", [
      EthereumValue.fromAddress(destination),
      EthereumValue.fromUnsignedBigInt(value),
      EthereumValue.fromBytes(data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  confirmationTimes(param0: BigInt): BigInt {
    let result = super.call("confirmationTimes", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_confirmationTimes(param0: BigInt): CallResult<BigInt> {
    let result = super.tryCall("confirmationTimes", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  MAX_OWNER_COUNT(): BigInt {
    let result = super.call("MAX_OWNER_COUNT", []);

    return result[0].toBigInt();
  }

  try_MAX_OWNER_COUNT(): CallResult<BigInt> {
    let result = super.tryCall("MAX_OWNER_COUNT", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  required(): BigInt {
    let result = super.call("required", []);

    return result[0].toBigInt();
  }

  try_required(): CallResult<BigInt> {
    let result = super.tryCall("required", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class RemoveOwnerCall extends EthereumCall {
  get inputs(): RemoveOwnerCall__Inputs {
    return new RemoveOwnerCall__Inputs(this);
  }

  get outputs(): RemoveOwnerCall__Outputs {
    return new RemoveOwnerCall__Outputs(this);
  }
}

export class RemoveOwnerCall__Inputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOwnerCall__Outputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }
}

export class RevokeConfirmationCall extends EthereumCall {
  get inputs(): RevokeConfirmationCall__Inputs {
    return new RevokeConfirmationCall__Inputs(this);
  }

  get outputs(): RevokeConfirmationCall__Outputs {
    return new RevokeConfirmationCall__Outputs(this);
  }
}

export class RevokeConfirmationCall__Inputs {
  _call: RevokeConfirmationCall;

  constructor(call: RevokeConfirmationCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevokeConfirmationCall__Outputs {
  _call: RevokeConfirmationCall;

  constructor(call: RevokeConfirmationCall) {
    this._call = call;
  }
}

export class AddOwnerCall extends EthereumCall {
  get inputs(): AddOwnerCall__Inputs {
    return new AddOwnerCall__Inputs(this);
  }

  get outputs(): AddOwnerCall__Outputs {
    return new AddOwnerCall__Outputs(this);
  }
}

export class AddOwnerCall__Inputs {
  _call: AddOwnerCall;

  constructor(call: AddOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddOwnerCall__Outputs {
  _call: AddOwnerCall;

  constructor(call: AddOwnerCall) {
    this._call = call;
  }
}

export class ExecuteMultipleTransactionsCall extends EthereumCall {
  get inputs(): ExecuteMultipleTransactionsCall__Inputs {
    return new ExecuteMultipleTransactionsCall__Inputs(this);
  }

  get outputs(): ExecuteMultipleTransactionsCall__Outputs {
    return new ExecuteMultipleTransactionsCall__Outputs(this);
  }
}

export class ExecuteMultipleTransactionsCall__Inputs {
  _call: ExecuteMultipleTransactionsCall;

  constructor(call: ExecuteMultipleTransactionsCall) {
    this._call = call;
  }

  get transactionIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class ExecuteMultipleTransactionsCall__Outputs {
  _call: ExecuteMultipleTransactionsCall;

  constructor(call: ExecuteMultipleTransactionsCall) {
    this._call = call;
  }
}

export class ChangeTimeLockCall extends EthereumCall {
  get inputs(): ChangeTimeLockCall__Inputs {
    return new ChangeTimeLockCall__Inputs(this);
  }

  get outputs(): ChangeTimeLockCall__Outputs {
    return new ChangeTimeLockCall__Outputs(this);
  }
}

export class ChangeTimeLockCall__Inputs {
  _call: ChangeTimeLockCall;

  constructor(call: ChangeTimeLockCall) {
    this._call = call;
  }

  get _secondsTimeLocked(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeTimeLockCall__Outputs {
  _call: ChangeTimeLockCall;

  constructor(call: ChangeTimeLockCall) {
    this._call = call;
  }
}

export class ChangeRequirementCall extends EthereumCall {
  get inputs(): ChangeRequirementCall__Inputs {
    return new ChangeRequirementCall__Inputs(this);
  }

  get outputs(): ChangeRequirementCall__Outputs {
    return new ChangeRequirementCall__Outputs(this);
  }
}

export class ChangeRequirementCall__Inputs {
  _call: ChangeRequirementCall;

  constructor(call: ChangeRequirementCall) {
    this._call = call;
  }

  get _required(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeRequirementCall__Outputs {
  _call: ChangeRequirementCall;

  constructor(call: ChangeRequirementCall) {
    this._call = call;
  }
}

export class ConfirmTransactionCall extends EthereumCall {
  get inputs(): ConfirmTransactionCall__Inputs {
    return new ConfirmTransactionCall__Inputs(this);
  }

  get outputs(): ConfirmTransactionCall__Outputs {
    return new ConfirmTransactionCall__Outputs(this);
  }
}

export class ConfirmTransactionCall__Inputs {
  _call: ConfirmTransactionCall;

  constructor(call: ConfirmTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConfirmTransactionCall__Outputs {
  _call: ConfirmTransactionCall;

  constructor(call: ConfirmTransactionCall) {
    this._call = call;
  }
}

export class SubmitTransactionCall extends EthereumCall {
  get inputs(): SubmitTransactionCall__Inputs {
    return new SubmitTransactionCall__Inputs(this);
  }

  get outputs(): SubmitTransactionCall__Outputs {
    return new SubmitTransactionCall__Outputs(this);
  }
}

export class SubmitTransactionCall__Inputs {
  _call: SubmitTransactionCall;

  constructor(call: SubmitTransactionCall) {
    this._call = call;
  }

  get destination(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SubmitTransactionCall__Outputs {
  _call: SubmitTransactionCall;

  constructor(call: SubmitTransactionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ReplaceOwnerCall extends EthereumCall {
  get inputs(): ReplaceOwnerCall__Inputs {
    return new ReplaceOwnerCall__Inputs(this);
  }

  get outputs(): ReplaceOwnerCall__Outputs {
    return new ReplaceOwnerCall__Outputs(this);
  }
}

export class ReplaceOwnerCall__Inputs {
  _call: ReplaceOwnerCall;

  constructor(call: ReplaceOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ReplaceOwnerCall__Outputs {
  _call: ReplaceOwnerCall;

  constructor(call: ReplaceOwnerCall) {
    this._call = call;
  }
}

export class ExecuteTransactionCall extends EthereumCall {
  get inputs(): ExecuteTransactionCall__Inputs {
    return new ExecuteTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteTransactionCall__Outputs {
    return new ExecuteTransactionCall__Outputs(this);
  }
}

export class ExecuteTransactionCall__Inputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteTransactionCall__Outputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }
}

export class SetSelectorCall extends EthereumCall {
  get inputs(): SetSelectorCall__Inputs {
    return new SetSelectorCall__Inputs(this);
  }

  get outputs(): SetSelectorCall__Outputs {
    return new SetSelectorCall__Outputs(this);
  }
}

export class SetSelectorCall__Inputs {
  _call: SetSelectorCall;

  constructor(call: SetSelectorCall) {
    this._call = call;
  }

  get destination(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get selector(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get approved(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetSelectorCall__Outputs {
  _call: SetSelectorCall;

  constructor(call: SetSelectorCall) {
    this._call = call;
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

  get _owners(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _required(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _secondsTimeLocked(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _noDelayDestinations(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _noDelaySelectors(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
