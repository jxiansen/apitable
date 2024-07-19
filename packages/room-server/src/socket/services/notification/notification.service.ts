

import { Injectable, Logger } from '@nestjs/common';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { BackendGrpcClient } from 'grpc/client/backend.grpc.client';
import { SocketConstants } from 'shared/common/constants/socket.module.constants';
import { NotificationTypes } from 'shared/enums/request-types.enum';
import { Socket } from 'socket.io';
import { IAuthenticatedSocket } from 'socket/interface/socket/authenticated-socket.interface';
import { NodeChangeRo } from 'socket/ros/notification/node-change.ro';
import { INotificationRo } from 'socket/ros/notification/notification.ro';
import { WatchSpaceRo } from 'socket/ros/notification/watch-space.ro';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly backendGrpcClient: BackendGrpcClient
  ) {}

  broadcastNotify(message: INotificationRo, client: Socket): boolean {
    if (isNil(message.toUuid)) {
      this.logger.error('NotNotify:UserMismatch');
      return false;
    }
    try {
      client.in(SocketConstants.USER_SOCKET_ROOM + message.toUuid).emit(message.event, message);
      this.logger.debug(message);
      return true;
    } catch (e) {
      this.logger.error('Error:broadcastNotify', (e as Error)?.stack);
      return false;
    }
  }

  async watchSpace(message: WatchSpaceRo, client: IAuthenticatedSocket): Promise<boolean> {
    try {
      await client.join(this.getSpaceRoom(message.spaceId));
      return true;
    } catch (e) {
      this.logger.error('Error:watchSpace', (e as Error)?.stack);
      return false;
    }
  }

  nodeChange(message: NodeChangeRo, client: IAuthenticatedSocket): boolean {
    try {
      let room = this.getSpaceRoom(message.spaceId);
      if (message.uuid) {
        room = this.getUserRoom(message.uuid);
      }
      client.to(room).emit(NotificationTypes.NODE_CHANGE, message);
      this.logger.debug(message);
      return true;
    } catch (e) {
      this.logger.error('Error:nodeChange', (e as Error)?.stack);
      return false;
    }
  }

  async nodeBrowsed(nodeId: string, uuid: string): Promise<boolean> {
    try {
      const result = await this.backendGrpcClient.recordNodeBrowsing({ nodeId, uuid });
      return result.success;
    } catch (e) {
      this.logger.error('Error:nodeBrowsed', (e as Error)?.stack);
      return false;
    }
  }

  private getSpaceRoom(spaceId: string): string {
    return SocketConstants.SPACE_ROOM_PREFIX + spaceId;
  }

  private getUserRoom(uuid: string): string {
    return SocketConstants.USER_SOCKET_ROOM + uuid;
  }
}
