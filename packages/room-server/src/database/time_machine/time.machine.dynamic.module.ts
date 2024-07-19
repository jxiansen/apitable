import { DynamicModule, Module } from '@nestjs/common';
import { TimeMachineBaseService } from 'database/time_machine/time.machine.service.base';
import fs from 'fs';
import path from 'path';

@Module({
  providers: [
    {
      provide: TimeMachineBaseService,
      useClass: class TimeMachineService extends TimeMachineBaseService {},
    },
  ],
  exports: [
    {
      provide: TimeMachineBaseService,
      useClass: class TimeMachineService extends TimeMachineBaseService {},
    },
  ],
})
export class TimeMachineDynamicModule {
  static forRoot(): DynamicModule {
    const timeMachineEnterpriseModulePath = path.join(__dirname, '../../enterprise/database/time_machine');
    const isEnterpriseLevel: boolean = fs.existsSync(timeMachineEnterpriseModulePath);
    if (isEnterpriseLevel) {
      const { TimeMachineEnterpriseModule } = require(`${timeMachineEnterpriseModulePath}/time.machine.enterprise.module`);
      return {
        module: TimeMachineEnterpriseModule,
      };
    }
    return {
      module: TimeMachineDynamicModule,
    };
  }
}
