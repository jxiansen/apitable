import { RobotActionBaseInfoDto } from '../dtos/action.dto';
import { TriggerTriggerTypeRelDto } from '../dtos/trigger.dto';

export class RobotBaseInfoVo {
  robotId!: string;

  isActive!: boolean;

  name?: string;

  description?: string;

  /**
   * the robot's node contain trigger and actions.
   */
  nodes!: (TriggerTriggerTypeRelDto | RobotActionBaseInfoDto)[];
}
