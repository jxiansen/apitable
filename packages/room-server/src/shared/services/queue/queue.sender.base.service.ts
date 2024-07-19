import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class QueueSenderBaseService {
  public async sendMessage(_exchange: string, _routingKey: string, _message: any) {
    await Promise.resolve([]);
  }

  public async sendMessageWithId(_messageId: string, _exchange: string, _routingKey: string, _message: any) {
    await Promise.resolve([]);
  }
}
