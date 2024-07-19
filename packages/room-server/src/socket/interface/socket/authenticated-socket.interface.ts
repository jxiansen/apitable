

import * as SocketIO from 'socket.io';
import { ITokenPayload } from './token-payload.interface';

export interface IAuthenticatedSocket extends SocketIO.Socket {
  auth: ITokenPayload;
}
