import { DynamicModule, Module } from '@nestjs/common';
import path from 'path';
import fs from 'fs';
import { RobotActionTypeBaseService, RobotActionTypeService } from './robot.action.type.base.service';
import { AutomationActionTypeRepository } from '../repositories/automation.action.type.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomationServiceRepository } from '../repositories/automation.service.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AutomationActionTypeRepository, AutomationServiceRepository])],
  providers: [
    {
      provide: RobotActionTypeBaseService,
      useClass: RobotActionTypeService,
    },
  ],
  exports: [
    {
      provide: RobotActionTypeBaseService,
      useClass: RobotActionTypeService,
    },
  ],
})
export class RobotServiceDynamicModule {
  static forRoot(): DynamicModule {
    const robotEnterpriseModulePath = path.join(__dirname, '../../enterprise/automation');
    const isEnterpriseLevel: boolean = fs.existsSync(robotEnterpriseModulePath);
    if (isEnterpriseLevel) {
      const { AutomationEnterpriseModule } = require(`${robotEnterpriseModulePath}/automation.enterprise.module`);
      return {
        module: AutomationEnterpriseModule,
      };
    }
    return {
      module: RobotServiceDynamicModule,
    };
  }
}
