/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "test";

export enum RequestType {
  UNKONWN = 0,
  READ = 1,
  WRITE = 2,
  UNRECOGNIZED = -1,
}

export function requestTypeFromJSON(object: any): RequestType {
  switch (object) {
    case 0:
    case "UNKONWN":
      return RequestType.UNKONWN;
    case 1:
    case "READ":
      return RequestType.READ;
    case 2:
    case "WRITE":
      return RequestType.WRITE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestType.UNRECOGNIZED;
  }
}

export function requestTypeToJSON(object: RequestType): string {
  switch (object) {
    case RequestType.UNKONWN:
      return "UNKONWN";
    case RequestType.READ:
      return "READ";
    case RequestType.WRITE:
      return "WRITE";
    case RequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Request {
  Type: RequestType;
  Params?: { $case: "First"; First: string } | { $case: "Second"; Second: string };
}

function createBaseRequest(): Request {
  return { Type: 0, Params: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    switch (message.Params?.$case) {
      case "First":
        writer.uint32(18).string(message.Params.First);
        break;
      case "Second":
        writer.uint32(26).string(message.Params.Second);
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.Type = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.Params = { $case: "First", First: reader.string() };
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.Params = { $case: "Second", Second: reader.string() };
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      Type: isSet(object.Type) ? requestTypeFromJSON(object.Type) : 0,
      Params: isSet(object.First)
        ? { $case: "First", First: String(object.First) }
        : isSet(object.Second)
        ? { $case: "Second", Second: String(object.Second) }
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = requestTypeToJSON(message.Type));
    message.Params?.$case === "First" && (obj.First = message.Params?.First);
    message.Params?.$case === "Second" && (obj.Second = message.Params?.Second);
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.Type = object.Type ?? 0;
    if (object.Params?.$case === "First" && object.Params?.First !== undefined && object.Params?.First !== null) {
      message.Params = { $case: "First", First: object.Params.First };
    }
    if (object.Params?.$case === "Second" && object.Params?.Second !== undefined && object.Params?.Second !== null) {
      message.Params = { $case: "Second", Second: object.Params.Second };
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
