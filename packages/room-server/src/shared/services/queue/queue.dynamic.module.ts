

import { DynamicModule, Module } from '@nestjs/common';
import { enableAmqp } from 'app.environment';
import { QueueModule } from './queue.module';
import { QueueSenderBaseService } from './queue.sender.base.service';

@Module({
  providers: [
    {
      provide: QueueSenderBaseService,
      useClass: class QueueService extends QueueSenderBaseService {
      },
    },
  ],
  exports: [
    {
      provide: QueueSenderBaseService,
      useClass: class QueueService extends QueueSenderBaseService {
      }
    },
  ]
})
export class QueueDynamicModule {
  static forRoot(): DynamicModule {
    if (enableAmqp) {
      return {
        module: QueueModule,
      };
    }
    return {
      module: QueueDynamicModule,
    };
  }
}
