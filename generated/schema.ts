// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Timelock extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Timelock entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Timelock entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Timelock", id.toString(), this);
  }

  static load(id: string): Timelock | null {
    return store.get("Timelock", id) as Timelock | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get platform(): string {
    let value = this.get("platform");
    return value.toString();
  }

  set platform(value: string) {
    this.set("platform", Value.fromString(value));
  }

  get currentAdmin(): string | null {
    let value = this.get("currentAdmin");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentAdmin(value: string | null) {
    if (value === null) {
      this.unset("currentAdmin");
    } else {
      this.set("currentAdmin", Value.fromString(value as string));
    }
  }

  get spells(): Array<string | null> {
    let value = this.get("spells");
    return value.toStringArray();
  }

  set spells(value: Array<string | null>) {
    this.set("spells", Value.fromStringArray(value));
  }
}

export class Platform extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Platform entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Platform entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Platform", id.toString(), this);
  }

  static load(id: string): Platform | null {
    return store.get("Platform", id) as Platform | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentAdmin(): string | null {
    let value = this.get("currentAdmin");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentAdmin(value: string | null) {
    if (value === null) {
      this.unset("currentAdmin");
    } else {
      this.set("currentAdmin", Value.fromString(value as string));
    }
  }

  get usesAdmin(): boolean {
    let value = this.get("usesAdmin");
    return value.toBoolean();
  }

  set usesAdmin(value: boolean) {
    this.set("usesAdmin", Value.fromBoolean(value));
  }

  get usesTimelock(): boolean {
    let value = this.get("usesTimelock");
    return value.toBoolean();
  }

  set usesTimelock(value: boolean) {
    this.set("usesTimelock", Value.fromBoolean(value));
  }

  get spells(): Array<string | null> {
    let value = this.get("spells");
    return value.toStringArray();
  }

  set spells(value: Array<string | null>) {
    this.set("spells", Value.fromStringArray(value));
  }

  get targets(): Array<string | null> {
    let value = this.get("targets");
    return value.toStringArray();
  }

  set targets(value: Array<string | null>) {
    this.set("targets", Value.fromStringArray(value));
  }

  get timelocks(): Array<string | null> {
    let value = this.get("timelocks");
    return value.toStringArray();
  }

  set timelocks(value: Array<string | null>) {
    this.set("timelocks", Value.fromStringArray(value));
  }
}

export class Spell extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Spell entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Spell entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Spell", id.toString(), this);
  }

  static load(id: string): Spell | null {
    return store.get("Spell", id) as Spell | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get eta(): BigInt {
    let value = this.get("eta");
    return value.toBigInt();
  }

  set eta(value: BigInt) {
    this.set("eta", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get createdAtTransaction(): string {
    let value = this.get("createdAtTransaction");
    return value.toString();
  }

  set createdAtTransaction(value: string) {
    this.set("createdAtTransaction", Value.fromString(value));
  }

  get expiresAtTimestamp(): BigInt {
    let value = this.get("expiresAtTimestamp");
    return value.toBigInt();
  }

  set expiresAtTimestamp(value: BigInt) {
    this.set("expiresAtTimestamp", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get functionName(): string {
    let value = this.get("functionName");
    return value.toString();
  }

  set functionName(value: string) {
    this.set("functionName", Value.fromString(value));
  }

  get signature(): string {
    let value = this.get("signature");
    return value.toString();
  }

  set signature(value: string) {
    this.set("signature", Value.fromString(value));
  }

  get data(): string {
    let value = this.get("data");
    return value.toString();
  }

  set data(value: string) {
    this.set("data", Value.fromString(value));
  }

  get target(): string {
    let value = this.get("target");
    return value.toString();
  }

  set target(value: string) {
    this.set("target", Value.fromString(value));
  }

  get timelock(): string {
    let value = this.get("timelock");
    return value.toString();
  }

  set timelock(value: string) {
    this.set("timelock", Value.fromString(value));
  }

  get platform(): string {
    let value = this.get("platform");
    return value.toString();
  }

  set platform(value: string) {
    this.set("platform", Value.fromString(value));
  }

  get isCancelled(): boolean {
    let value = this.get("isCancelled");
    return value.toBoolean();
  }

  set isCancelled(value: boolean) {
    this.set("isCancelled", Value.fromBoolean(value));
  }

  get isExecuted(): boolean {
    let value = this.get("isExecuted");
    return value.toBoolean();
  }

  set isExecuted(value: boolean) {
    this.set("isExecuted", Value.fromBoolean(value));
  }

  get cancelledAtTimestamp(): BigInt | null {
    let value = this.get("cancelledAtTimestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set cancelledAtTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("cancelledAtTimestamp");
    } else {
      this.set("cancelledAtTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get cancelledAtTransaction(): string | null {
    let value = this.get("cancelledAtTransaction");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cancelledAtTransaction(value: string | null) {
    if (value === null) {
      this.unset("cancelledAtTransaction");
    } else {
      this.set("cancelledAtTransaction", Value.fromString(value as string));
    }
  }

  get executedAtTimestamp(): BigInt | null {
    let value = this.get("executedAtTimestamp");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set executedAtTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("executedAtTimestamp");
    } else {
      this.set("executedAtTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get executedAtTransaction(): string | null {
    let value = this.get("executedAtTransaction");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set executedAtTransaction(value: string | null) {
    if (value === null) {
      this.unset("executedAtTransaction");
    } else {
      this.set("executedAtTransaction", Value.fromString(value as string));
    }
  }
}

export class Target extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Target entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Target entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Target", id.toString(), this);
  }

  static load(id: string): Target | null {
    return store.get("Target", id) as Target | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get platform(): string {
    let value = this.get("platform");
    return value.toString();
  }

  set platform(value: string) {
    this.set("platform", Value.fromString(value));
  }

  get params(): Array<string | null> {
    let value = this.get("params");
    return value.toStringArray();
  }

  set params(value: Array<string | null>) {
    this.set("params", Value.fromStringArray(value));
  }

  get spells(): Array<string | null> {
    let value = this.get("spells");
    return value.toStringArray();
  }

  set spells(value: Array<string | null>) {
    this.set("spells", Value.fromStringArray(value));
  }
}

export class Param extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Param entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Param entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Param", id.toString(), this);
  }

  static load(id: string): Param | null {
    return store.get("Param", id) as Param | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get target(): string {
    let value = this.get("target");
    return value.toString();
  }

  set target(value: string) {
    this.set("target", Value.fromString(value));
  }
}
