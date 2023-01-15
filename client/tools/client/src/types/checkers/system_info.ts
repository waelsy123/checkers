/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "waelsy123.checkers.checkers";
export interface SystemInfo {
  nextId: Long;
  fifoHeadIndex: string;
  fifoTailIndex: string;
}

function createBaseSystemInfo(): SystemInfo {
  return {
    nextId: Long.UZERO,
    fifoHeadIndex: "",
    fifoTailIndex: ""
  };
}

export const SystemInfo = {
  encode(message: SystemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextId.isZero()) {
      writer.uint32(8).uint64(message.nextId);
    }

    if (message.fifoHeadIndex !== "") {
      writer.uint32(18).string(message.fifoHeadIndex);
    }

    if (message.fifoTailIndex !== "") {
      writer.uint32(26).string(message.fifoTailIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextId = (reader.uint64() as Long);
          break;

        case 2:
          message.fifoHeadIndex = reader.string();
          break;

        case 3:
          message.fifoTailIndex = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemInfo {
    return {
      nextId: isSet(object.nextId) ? Long.fromValue(object.nextId) : Long.UZERO,
      fifoHeadIndex: isSet(object.fifoHeadIndex) ? String(object.fifoHeadIndex) : "",
      fifoTailIndex: isSet(object.fifoTailIndex) ? String(object.fifoTailIndex) : ""
    };
  },

  toJSON(message: SystemInfo): unknown {
    const obj: any = {};
    message.nextId !== undefined && (obj.nextId = (message.nextId || Long.UZERO).toString());
    message.fifoHeadIndex !== undefined && (obj.fifoHeadIndex = message.fifoHeadIndex);
    message.fifoTailIndex !== undefined && (obj.fifoTailIndex = message.fifoTailIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemInfo>, I>>(object: I): SystemInfo {
    const message = createBaseSystemInfo();
    message.nextId = object.nextId !== undefined && object.nextId !== null ? Long.fromValue(object.nextId) : Long.UZERO;
    message.fifoHeadIndex = object.fifoHeadIndex ?? "";
    message.fifoTailIndex = object.fifoTailIndex ?? "";
    return message;
  }

};