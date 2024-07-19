import { AutomationRobotEntity } from '../entities/automation.robot.entity';

export type ResourceRobotDto = Pick<AutomationRobotEntity, 'robotId' | 'resourceId'>;

export type RobotBaseInfoDto = Pick<AutomationRobotEntity, 'name' | 'description' | 'isActive' | 'robotId'>;
