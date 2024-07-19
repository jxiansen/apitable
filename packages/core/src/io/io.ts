import { Events, Player } from '../modules/shared/player';
import { IWatchResponse, SyncRequestTypes } from 'sync/types';
import { wait } from 'utils/async';

export interface IRegisterOption {
  token: string;
  messageHandler: (message: any) => void;
}

export class IO {
  private abort = false; // abort link
  callbackCache: Map<string, (arg: any) => any> = new Map();

  watchRoomRetryInterval: NodeJS.Timeout | undefined;

  constructor(
    public roomId: string,
    public socket: SocketIOClient.Socket
  ) {}

  async waitToConnect() {
    this.abort = false;
    while (!this.socket.connected) {
      console.log(`waiting for ${this.roomId} socket connection...`);
      if (this.abort) {
        console.error('Connection cancelled: ', this.roomId);
        return false;
      }
      await wait(500);
    }
    return true;
  }

  async watch<T extends IWatchResponse, P>(roomId: string, shareId: string | undefined, embedId?: string, params?: P): Promise<T | void> {
    await this.waitToConnect();
    return new Promise<T | void>((resolve, reject) => {
      if (!this.socket.connected) {
        resolve();
        return;
      }
      let retryTimes = 5;

      const emit = (interval: NodeJS.Timeout | undefined) => {
        this.socket.emit(SyncRequestTypes.WATCH_ROOM, { ...params, roomId, shareId, embedLinkId: embedId }, (msg: T) => {
          clearInterval(interval);
          if (interval !== this.watchRoomRetryInterval) {
            resolve();
            return;
          }

          if ('success' in msg && msg.success) {
            // console.log('watched in ', roomId, this.socket.id, 'msg:', msg);
            resolve(msg);
          } else {
            Player.doTrigger(Events.app_error_logger, {
              error: new Error(`watchRoom failed: ${msg.message}`),
              metaData: {
                socketConnected: this.socket.connected,
              },
            });
            reject(msg);
          }
        });
      };

      const interval = setInterval(() => {
        if (retryTimes < 0) {
          clearInterval(interval);
          reject(
            'The link with the server has not been established successfully, please refresh and try again. \
                  If you have any questions, please scan the QR code on the right to add customer service, and let us help you solve'
          );
        }
        retryTimes--;
        emit(interval);
      }, 3 * 1000);
      this.watchRoomRetryInterval = interval;
      emit(interval);
    });
  }

  request<T, P extends { type: string }>(params: P): Promise<T> {
    if (!this.socket) {
      throw new Error("socket didn't prepared");
    }

    // console.log('Send data:', params);
    return new Promise<any>((resolve) => {
      this.socket.emit(params.type, params, (responseData: T) => {
        resolve(responseData);
      });
    });
  }

  unWatch() {
    this.abort = true;
    clearInterval(this.watchRoomRetryInterval);
    this.watchRoomRetryInterval = undefined;

    return new Promise((resolve) => {
      this.socket.emit(SyncRequestTypes.LEAVE_ROOM, { roomId: this.roomId }, (msg: any) => {
        console.log('unwatch: ', this.roomId, 'msg:', msg);
        this.offAll();
        resolve(msg);
      });
    });
  }

  offAll() {
    this.callbackCache.forEach((cb, name) => {
      this.socket.off(name, cb);
    });
    this.callbackCache.clear();
  }

  on<T>(name: string, cb: (arg: T) => void) {
    if (this.callbackCache.has(name)) {
      throw new Error(`Do not bind socket events repeatedly: ${name}`);
    }
    this.callbackCache.set(name, cb);
    this.socket.on(name, cb);
  }
}
