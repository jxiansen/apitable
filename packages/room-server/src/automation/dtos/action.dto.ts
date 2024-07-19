import { AutomationActionEntity } from '../entities/automation.action.entity';

export class RobotActionBaseInfoDto {
  actionId!: string;

  actionTypeId!: string;

  prevActionId!: string | null;

  nextActionId?: string | null;

  robotId!: string;
}

export class RobotActionInfoDto {
  id?: string;

  actionId!: string;

  typeId?: string;

  actionTypeId!: string;

  prevActionId!: string | null;

  input!: object | null;
}

export type RobotRelDto = Pick<AutomationActionEntity, 'robotId' | 'prevActionId'>;
