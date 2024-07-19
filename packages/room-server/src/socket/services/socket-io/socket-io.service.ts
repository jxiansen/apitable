import { Injectable, Logger } from '@nestjs/common';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { SocketConstants } from 'shared/common/constants/socket.module.constants';
import { isBackendServer, isNestServer, isRoomConnect } from 'shared/helpers/socket.helper';
import { IAuthenticatedSocket } from 'socket/interface/socket/authenticated-socket.interface';
import { NestService } from 'socket/services/nest/nest.service';
import { RoomService } from 'socket/services/room/room.service';

@Injectable()
export class SocketIoService {
  private readonly logger = new Logger(SocketIoService.name);

  constructor(
    private readonly nestService: NestService,
    private readonly roomService: RoomService,
  ) {}

  public joinRoom(socket: IAuthenticatedSocket) {
    // nest-server room
    if (isNestServer(socket)) {
      void socket.join(SocketConstants.NEST_SERVER_PREFIX);
      void this.nestService.setSocket(socket);
    } else if (isBackendServer(socket)) {
      // java-server room
      void socket.join(SocketConstants.JAVA_SERVER_PREFIX);
    } else {
      // TODO: authentication
      // connection with user id joins room user room
      if (!isNil(socket.auth.userId)) {
        void socket.join(SocketConstants.USER_SOCKET_ROOM + socket.auth.userId);
      }
    }
  }

  public async leaveRoom(socket: IAuthenticatedSocket) {
    if (isNestServer(socket)) {
      void socket.leave(SocketConstants.NEST_SERVER_PREFIX);
      await this.nestService.removeSocket(socket);
    } else if (isBackendServer(socket)) {
      void socket.leave(SocketConstants.JAVA_SERVER_PREFIX);
    } else if (isRoomConnect(socket)) {
      await this.roomService.clientDisconnect(socket);
    } else {
      // exit the user room
      void socket.leave(SocketConstants.USER_SOCKET_ROOM + socket.auth.userId);
      this.logger.log({ message: 'SocketIoService:UserLeaveRoom', room: SocketConstants.USER_SOCKET_ROOM + socket.auth.userId, socketId: socket.id });
    }
  }
}
