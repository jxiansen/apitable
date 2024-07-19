
import { AutomationTriggerEntity } from '../entities/automation.trigger.entity';

export type RobotTriggerBaseInfoDto = Pick<AutomationTriggerEntity, 'triggerId' | 'triggerTypeId' | 'robotId'>;

export type RobotTriggerInfoDto = Pick<AutomationTriggerEntity, 'triggerId' | 'triggerTypeId' | 'input'>;

export type TriggerTriggerTypeRelDto = Pick<AutomationTriggerEntity, 'triggerId' | 'triggerTypeId'>;

export type ResourceRobotTriggerDto = Pick<AutomationTriggerEntity, 'triggerId' | 'triggerTypeId' | 'input' | 'robotId'>;