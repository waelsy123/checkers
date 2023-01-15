/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, Rpc } from "../helpers";
export const protobufPackage = "waelsy123.checkers.checkers";
export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
}
export interface MsgCreatePostResponse {}
export interface MsgCreateGame {
  creator: string;
  black: string;
  red: string;
  wager: Long;
  denom: string;
}
export interface MsgCreateGameResponse {
  gameIndex: string;
}
export interface MsgPlayMove {
  creator: string;
  gameIndex: string;
  fromX: Long;
  fromY: Long;
  toX: Long;
  toY: Long;
}
export interface MsgPlayMoveResponse {
  capturedX: number;
  capturedY: number;
  winner: string;
}
export interface MsgRejectGame {
  creator: string;
  gameIndex: string;
}
export interface MsgRejectGameResponse {}

function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    creator: "",
    title: "",
    body: ""
  };
}

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }

    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.title = reader.string();
          break;

        case 3:
          message.body = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : ""
    };
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePost>, I>>(object: I): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    return message;
  }

};

function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {};
}

export const MsgCreatePostResponse = {
  encode(_: MsgCreatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreatePostResponse {
    return {};
  },

  toJSON(_: MsgCreatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePostResponse>, I>>(_: I): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    return message;
  }

};

function createBaseMsgCreateGame(): MsgCreateGame {
  return {
    creator: "",
    black: "",
    red: "",
    wager: Long.UZERO,
    denom: ""
  };
}

export const MsgCreateGame = {
  encode(message: MsgCreateGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.black !== "") {
      writer.uint32(18).string(message.black);
    }

    if (message.red !== "") {
      writer.uint32(26).string(message.red);
    }

    if (!message.wager.isZero()) {
      writer.uint32(32).uint64(message.wager);
    }

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGame();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.black = reader.string();
          break;

        case 3:
          message.red = reader.string();
          break;

        case 4:
          message.wager = (reader.uint64() as Long);
          break;

        case 5:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGame {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      black: isSet(object.black) ? String(object.black) : "",
      red: isSet(object.red) ? String(object.red) : "",
      wager: isSet(object.wager) ? Long.fromValue(object.wager) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: MsgCreateGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.black !== undefined && (obj.black = message.black);
    message.red !== undefined && (obj.red = message.red);
    message.wager !== undefined && (obj.wager = (message.wager || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGame>, I>>(object: I): MsgCreateGame {
    const message = createBaseMsgCreateGame();
    message.creator = object.creator ?? "";
    message.black = object.black ?? "";
    message.red = object.red ?? "";
    message.wager = object.wager !== undefined && object.wager !== null ? Long.fromValue(object.wager) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgCreateGameResponse(): MsgCreateGameResponse {
  return {
    gameIndex: ""
  };
}

export const MsgCreateGameResponse = {
  encode(message: MsgCreateGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameIndex !== "") {
      writer.uint32(10).string(message.gameIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gameIndex = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGameResponse {
    return {
      gameIndex: isSet(object.gameIndex) ? String(object.gameIndex) : ""
    };
  },

  toJSON(message: MsgCreateGameResponse): unknown {
    const obj: any = {};
    message.gameIndex !== undefined && (obj.gameIndex = message.gameIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGameResponse>, I>>(object: I): MsgCreateGameResponse {
    const message = createBaseMsgCreateGameResponse();
    message.gameIndex = object.gameIndex ?? "";
    return message;
  }

};

function createBaseMsgPlayMove(): MsgPlayMove {
  return {
    creator: "",
    gameIndex: "",
    fromX: Long.UZERO,
    fromY: Long.UZERO,
    toX: Long.UZERO,
    toY: Long.UZERO
  };
}

export const MsgPlayMove = {
  encode(message: MsgPlayMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.gameIndex !== "") {
      writer.uint32(18).string(message.gameIndex);
    }

    if (!message.fromX.isZero()) {
      writer.uint32(24).uint64(message.fromX);
    }

    if (!message.fromY.isZero()) {
      writer.uint32(32).uint64(message.fromY);
    }

    if (!message.toX.isZero()) {
      writer.uint32(40).uint64(message.toX);
    }

    if (!message.toY.isZero()) {
      writer.uint32(48).uint64(message.toY);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayMove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayMove();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.gameIndex = reader.string();
          break;

        case 3:
          message.fromX = (reader.uint64() as Long);
          break;

        case 4:
          message.fromY = (reader.uint64() as Long);
          break;

        case 5:
          message.toX = (reader.uint64() as Long);
          break;

        case 6:
          message.toY = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPlayMove {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      gameIndex: isSet(object.gameIndex) ? String(object.gameIndex) : "",
      fromX: isSet(object.fromX) ? Long.fromValue(object.fromX) : Long.UZERO,
      fromY: isSet(object.fromY) ? Long.fromValue(object.fromY) : Long.UZERO,
      toX: isSet(object.toX) ? Long.fromValue(object.toX) : Long.UZERO,
      toY: isSet(object.toY) ? Long.fromValue(object.toY) : Long.UZERO
    };
  },

  toJSON(message: MsgPlayMove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameIndex !== undefined && (obj.gameIndex = message.gameIndex);
    message.fromX !== undefined && (obj.fromX = (message.fromX || Long.UZERO).toString());
    message.fromY !== undefined && (obj.fromY = (message.fromY || Long.UZERO).toString());
    message.toX !== undefined && (obj.toX = (message.toX || Long.UZERO).toString());
    message.toY !== undefined && (obj.toY = (message.toY || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlayMove>, I>>(object: I): MsgPlayMove {
    const message = createBaseMsgPlayMove();
    message.creator = object.creator ?? "";
    message.gameIndex = object.gameIndex ?? "";
    message.fromX = object.fromX !== undefined && object.fromX !== null ? Long.fromValue(object.fromX) : Long.UZERO;
    message.fromY = object.fromY !== undefined && object.fromY !== null ? Long.fromValue(object.fromY) : Long.UZERO;
    message.toX = object.toX !== undefined && object.toX !== null ? Long.fromValue(object.toX) : Long.UZERO;
    message.toY = object.toY !== undefined && object.toY !== null ? Long.fromValue(object.toY) : Long.UZERO;
    return message;
  }

};

function createBaseMsgPlayMoveResponse(): MsgPlayMoveResponse {
  return {
    capturedX: 0,
    capturedY: 0,
    winner: ""
  };
}

export const MsgPlayMoveResponse = {
  encode(message: MsgPlayMoveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.capturedX !== 0) {
      writer.uint32(8).int32(message.capturedX);
    }

    if (message.capturedY !== 0) {
      writer.uint32(16).int32(message.capturedY);
    }

    if (message.winner !== "") {
      writer.uint32(26).string(message.winner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayMoveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayMoveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.capturedX = reader.int32();
          break;

        case 2:
          message.capturedY = reader.int32();
          break;

        case 3:
          message.winner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPlayMoveResponse {
    return {
      capturedX: isSet(object.capturedX) ? Number(object.capturedX) : 0,
      capturedY: isSet(object.capturedY) ? Number(object.capturedY) : 0,
      winner: isSet(object.winner) ? String(object.winner) : ""
    };
  },

  toJSON(message: MsgPlayMoveResponse): unknown {
    const obj: any = {};
    message.capturedX !== undefined && (obj.capturedX = Math.round(message.capturedX));
    message.capturedY !== undefined && (obj.capturedY = Math.round(message.capturedY));
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlayMoveResponse>, I>>(object: I): MsgPlayMoveResponse {
    const message = createBaseMsgPlayMoveResponse();
    message.capturedX = object.capturedX ?? 0;
    message.capturedY = object.capturedY ?? 0;
    message.winner = object.winner ?? "";
    return message;
  }

};

function createBaseMsgRejectGame(): MsgRejectGame {
  return {
    creator: "",
    gameIndex: ""
  };
}

export const MsgRejectGame = {
  encode(message: MsgRejectGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.gameIndex !== "") {
      writer.uint32(18).string(message.gameIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectGame();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.gameIndex = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRejectGame {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      gameIndex: isSet(object.gameIndex) ? String(object.gameIndex) : ""
    };
  },

  toJSON(message: MsgRejectGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameIndex !== undefined && (obj.gameIndex = message.gameIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectGame>, I>>(object: I): MsgRejectGame {
    const message = createBaseMsgRejectGame();
    message.creator = object.creator ?? "";
    message.gameIndex = object.gameIndex ?? "";
    return message;
  }

};

function createBaseMsgRejectGameResponse(): MsgRejectGameResponse {
  return {};
}

export const MsgRejectGameResponse = {
  encode(_: MsgRejectGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectGameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRejectGameResponse {
    return {};
  },

  toJSON(_: MsgRejectGameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectGameResponse>, I>>(_: I): MsgRejectGameResponse {
    const message = createBaseMsgRejectGameResponse();
    return message;
  }

};
/** Msg defines the Msg service. */

export interface Msg {
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
  PlayMove(request: MsgPlayMove): Promise<MsgPlayMoveResponse>;
  RejectGame(request: MsgRejectGame): Promise<MsgRejectGameResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
    this.CreateGame = this.CreateGame.bind(this);
    this.PlayMove = this.PlayMove.bind(this);
    this.RejectGame = this.RejectGame.bind(this);
  }

  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("waelsy123.checkers.checkers.Msg", "CreatePost", data);
    return promise.then(data => MsgCreatePostResponse.decode(new _m0.Reader(data)));
  }

  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse> {
    const data = MsgCreateGame.encode(request).finish();
    const promise = this.rpc.request("waelsy123.checkers.checkers.Msg", "CreateGame", data);
    return promise.then(data => MsgCreateGameResponse.decode(new _m0.Reader(data)));
  }

  PlayMove(request: MsgPlayMove): Promise<MsgPlayMoveResponse> {
    const data = MsgPlayMove.encode(request).finish();
    const promise = this.rpc.request("waelsy123.checkers.checkers.Msg", "PlayMove", data);
    return promise.then(data => MsgPlayMoveResponse.decode(new _m0.Reader(data)));
  }

  RejectGame(request: MsgRejectGame): Promise<MsgRejectGameResponse> {
    const data = MsgRejectGame.encode(request).finish();
    const promise = this.rpc.request("waelsy123.checkers.checkers.Msg", "RejectGame", data);
    return promise.then(data => MsgRejectGameResponse.decode(new _m0.Reader(data)));
  }

}