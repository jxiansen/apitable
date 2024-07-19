

/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
import { BasicResult, ServerRoomChangeRo } from "../common/Core";

export const protobufPackage = "grpc.serving";

/** socket-server provided service */
export interface SocketService {
  /**
   * ============ room->socket ======================================
   * Server sends room Change event
   */
  serverRoomChange(request: ServerRoomChangeRo, metadata?: Metadata): Observable<BasicResult>;
}
