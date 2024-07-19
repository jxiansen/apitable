import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ButtonClickedListener } from 'automation/events/listeners/button.clicked.listener';
import { NodeModule } from 'node/node.module';
import { UserModule } from 'user/user.module';
import { DocumentServiceDynamicModule } from 'workdoc/services/document.service.dynamic.module';
import { RobotActionController } from './controller/action.controller';
import { RobotActionTypeController } from './controller/action.type.controller';
import { RobotController } from './controller/robot.controller';
import { RobotRunHistoryController } from './controller/run.history.controller';
import { RobotTriggerController } from './controller/trigger.controller';
import { RobotTriggerTypeController } from './controller/trigger.type.controller';
import { TriggerEventHelper } from './events/helpers/trigger.event.helper';
import { FormSubmittedListener } from './events/listeners/form.submitted.listener';
import { RecordCreatedListener } from './events/listeners/record.created.listener';
import { RecordUpdatedListener } from './events/listeners/record.updated.listener';
import { AutomationActionRepository } from './repositories/automation.action.repository';
import { AutomationActionTypeRepository } from './repositories/automation.action.type.repository';
import { AutomationRobotRepository } from './repositories/automation.robot.repository';
import { AutomationRunHistoryRepository } from './repositories/automation.run.history.repository';
import { AutomationServiceRepository } from './repositories/automation.service.repository';
import { AutomationTriggerRepository } from './repositories/automation.trigger.repository';
import { AutomationTriggerTypeRepository } from './repositories/automation.trigger.type.repository';
import { AutomationService } from './services/automation.service';
import { RobotActionService } from './services/robot.action.service';
import { RobotRobotService } from './services/robot.robot.service';
import { RobotServiceDynamicModule } from './services/robot.service.dynamic.module';
import { RobotTriggerService } from './services/robot.trigger.service';
import { RobotTriggerTypeService } from './services/robot.trigger.type.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AutomationTriggerRepository,
      AutomationActionRepository,
      AutomationRobotRepository,
      AutomationRunHistoryRepository,
      AutomationServiceRepository,
      AutomationTriggerTypeRepository,
      AutomationActionTypeRepository,
    ]),
    NodeModule,
    UserModule,
    RobotServiceDynamicModule.forRoot(),
    DocumentServiceDynamicModule.forRoot(),
  ],
  controllers: [
    RobotController,
    RobotRunHistoryController,
    RobotActionTypeController,
    RobotTriggerTypeController,
    RobotActionController,
    RobotTriggerController,
  ],
  providers: [
    AutomationService,
    RobotTriggerService,
    RobotTriggerTypeService,
    FormSubmittedListener,
    ButtonClickedListener,
    TriggerEventHelper,
    RecordCreatedListener,
    RecordUpdatedListener,
    RobotActionService,
    RobotRobotService,
    AmqpConnection,
  ],
  exports: [AutomationService, RobotTriggerService, RobotTriggerTypeService, TriggerEventHelper, ButtonClickedListener],
})
export class RobotModule {}
