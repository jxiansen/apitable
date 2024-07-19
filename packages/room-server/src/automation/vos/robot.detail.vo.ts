

import { IRobot } from '@apitable/core';
import { RobotTriggerInfoDto } from '../dtos/trigger.dto';
import { AutomationTriggerTypeEntity } from '../entities/automation.trigger.type.entity';

export type RobotDetailVo = IRobot & {
  trigger: RobotTriggerInfoDto | {},
  triggerType? : Pick<AutomationTriggerTypeEntity, 'triggerTypeId' | 'inputJSONSchema'>,
};