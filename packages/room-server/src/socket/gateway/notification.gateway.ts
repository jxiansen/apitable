import { UseFilters } from '@nestjs/common';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GatewayConstants } from 'shared/common/constants/socket.module.constants';
import { NotificationTypes } from 'shared/enums/request-types.enum';
import { HttpExceptionFilter } from 'socket/filter/http-exception.filter';
import { IAuthenticatedSocket } from 'socket/interface/socket/authenticated-socket.interface';
import { NodeChangeRo } from 'socket/ros/notification/node-change.ro';
import { NodeBrowsedRo } from 'socket/ros/notification/node.browsed.ro';
import { INotificationRo } from 'socket/ros/notification/notification.ro';
import { WatchSpaceRo } from 'socket/ros/notification/watch-space.ro';
import { NotificationService } from 'socket/services/notification/notification.service';

@WebSocketGateway(GatewayConstants.NOTIFICATION_PORT, {
  path: GatewayConstants.NOTIFICATION_PATH,
  pingTimeout: GatewayConstants.PING_TIMEOUT,
})
export class NotificationGateway {
  constructor(private readonly notificationService: NotificationService) {}

  /*
   * The Server object of the current namespace socket.io will be injected into the controller later
   */
  @WebSocketServer() server: any;

  @UseFilters(HttpExceptionFilter)
  @SubscribeMessage(NotificationTypes.NOTIFY)
  playerNotify(@MessageBody() message: INotificationRo, @ConnectedSocket() client: IAuthenticatedSocket): boolean {
    if (isNil(client.auth.userId)) {
      return false;
    }
    message.event = NotificationTypes.NOTIFY;
    message.socketId = client.id;
    return this.notificationService.broadcastNotify(message, client);
  }

  @SubscribeMessage(NotificationTypes.WATCH_SPACE)
  watchSpace(@MessageBody() message: WatchSpaceRo, @ConnectedSocket() client: IAuthenticatedSocket): Promise<boolean> {
    return this.notificationService.watchSpace(message, client);
  }

  @SubscribeMessage(NotificationTypes.NODE_CHANGE)
  nodeChange(@MessageBody() message: NodeChangeRo, @ConnectedSocket() client: IAuthenticatedSocket): boolean {
    return this.notificationService.nodeChange(message, client);
  }

  @SubscribeMessage(NotificationTypes.NODE_BROWSED)
  async nodeBrowsed(@MessageBody() message: NodeBrowsedRo, @ConnectedSocket() client: IAuthenticatedSocket): Promise<boolean> {
    return await this.notificationService.nodeBrowsed(message.nodeId, client.auth.userId);
  }
}
