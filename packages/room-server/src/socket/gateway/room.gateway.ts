import { UseFilters, UseInterceptors } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GatewayConstants } from 'shared/common/constants/socket.module.constants';
import { RequestTypes } from 'shared/enums/request-types.enum';
import { Socket } from 'socket.io';
import { HttpExceptionFilter } from 'socket/filter/http-exception.filter';
import { ExecuteTimeInterceptor } from 'socket/interceptor/execute-time.interceptor';
import { RoomService } from 'socket/services/room/room.service';
import { Span } from '@metinseylan/nestjs-opentelemetry';

@UseFilters(HttpExceptionFilter)
@WebSocketGateway(GatewayConstants.ROOM_PORT, {
  path: GatewayConstants.ROOM_PATH,
  namespace: GatewayConstants.ROOM_NAMESPACE,
  pingTimeout: GatewayConstants.PING_TIMEOUT,
})
export class RoomGateway {
  constructor(private readonly roomService: RoomService) {}

  /*
   * The Server object of the current namespace socket.io will be injected into the controller later
   */
  @WebSocketServer() server: any;

  @SubscribeMessage(RequestTypes.WATCH_ROOM)
  @Span()
  async watchRoom(@MessageBody() message: any, @ConnectedSocket() client: Socket): Promise<any | null> {
    return await this.roomService.watchRoom(message, client);
  }

  @SubscribeMessage(RequestTypes.LEAVE_ROOM)
  leaveRoom(@MessageBody() message: any, @ConnectedSocket() client: Socket): boolean {
    this.roomService.leaveRoom(message, client);
    return true;
  }

  @UseInterceptors(ExecuteTimeInterceptor)
  @SubscribeMessage(RequestTypes.CLIENT_ROOM_CHANGE)
  @Span()
  async roomChange(@MessageBody() message: any, @ConnectedSocket() client: Socket): Promise<any> {
    return await this.roomService.roomChange(message, client);
  }

  @SubscribeMessage(RequestTypes.ENGAGEMENT_CURSOR)
  moveCursor(@MessageBody() message: any, @ConnectedSocket() client: Socket): boolean {
    this.roomService.moveCursor(message, client);
    return true;
  }

  /**
   * nest-server `fusion api` triggers
   *
   * @param message
   * @param client
   */
  @SubscribeMessage(RequestTypes.NEST_ROOM_CHANGE)
  newChange(@MessageBody() message: any, @ConnectedSocket() client: Socket): boolean {
    this.roomService.broadcastServerChange(message.roomId, message.data, client);
    return true;
  }
}
