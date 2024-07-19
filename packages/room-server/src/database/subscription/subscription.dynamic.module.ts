

import { DynamicModule, Module } from '@nestjs/common';
import { DatasheetRecordSubscriptionBaseService } from 'database/subscription/datasheet.record.subscription.base.service';
import path from 'path';
import * as fs from 'fs';

@Module({
  providers: [
    {
      provide: DatasheetRecordSubscriptionBaseService,
      useClass: class SubscriptionService extends DatasheetRecordSubscriptionBaseService {}
    },
  ],
  exports: [
    {
      provide: DatasheetRecordSubscriptionBaseService,
      useClass: class SubscriptionService extends DatasheetRecordSubscriptionBaseService {}
    },
  ]
})
export class SubscriptionDynamicModule { 
  static forRoot(): DynamicModule {
    const subscriptionEnterpriseModulePath = path.join(__dirname, '../../enterprise/database/subscription');
    const isEnterpriseLevel: boolean = fs.existsSync(subscriptionEnterpriseModulePath);
    if (isEnterpriseLevel) {
      const { SubscriptionEnterpriseModule } = require(`${subscriptionEnterpriseModulePath}/subscription.enterprise.module`);
      return {
        module: SubscriptionEnterpriseModule,
      };
    }
    return { 
      module: SubscriptionDynamicModule,
    }; 

  }
}
