

import { isNil } from '@nestjs/common/utils/shared.utils';
import { BootstrapConstants } from 'shared/common/constants/bootstrap.constants';
import { GatewayConstants, SocketConstants } from 'shared/common/constants/socket.module.constants';
import { IAuthenticatedSocket } from 'socket/interface/socket/authenticated-socket.interface';

/**
 * to judge whether 'room' connection
 *
 * @param socket
 */
export const isRoomConnect = (socket: IAuthenticatedSocket): boolean => {
  return !isNil(socket.auth.cookie) && socket.id.includes(GatewayConstants.ROOM_NAMESPACE);
};

/**
 * to judge whether 'java' connection
 *
 * @param socket
 */
export const isBackendServer = (socket: IAuthenticatedSocket): boolean => {
  return !isNil(socket.auth.userId) && socket.auth.userId.includes(SocketConstants.JAVA_SERVER_PREFIX);
};

/**
 * to judge whether 'nest-server' connection
 *
 * @param socket
 */
export const isNestServer = (socket: IAuthenticatedSocket): boolean => {
  // 'room_' 'nest-server' The prefix of the userId passed to the application startup must be consistent
  return !isNil(socket.auth.userId) && socket.auth.userId.includes('room_');
};

/**
 * NestServer Ip
 */
export const getSocketServerAddr = (serverIp: string) => {
  return 'http://' + serverIp + ':' + BootstrapConstants.SERVER_PORT;
};