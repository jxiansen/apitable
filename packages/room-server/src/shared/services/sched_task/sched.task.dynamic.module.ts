import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import * as fs from 'fs';
import { NodeModule } from 'node/node.module';
import path from 'path';

/**
 * original sched.task.module
 */
@Module({})
export class SchedTaskDynamicModule {
  static register(enabled: boolean): DynamicModule {
    const dynamicModule = {
      module: SchedTaskDynamicModule,
      imports: [DatabaseModule, NodeModule],
      providers: [],
    };

    const schedTaskEnterpriseServicePath = path.join(__dirname, '../../../enterprise/sched_task');
    const isEnterpriseLevel: boolean = fs.existsSync(schedTaskEnterpriseServicePath);

    if (!enabled || !isEnterpriseLevel) {
      return dynamicModule;
    }

    const { SchedTaskService } = require(`${schedTaskEnterpriseServicePath}/sched.task.service`);

    return {
      ...dynamicModule,
      providers: [SchedTaskService],
    };
  }
}
