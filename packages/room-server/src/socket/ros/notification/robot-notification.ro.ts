

import { IRobotDto, IRobotNotificationType } from 'socket/dtos/ding-talk/robot-notification.dto';

export interface IRobotNotificationRo extends IRobotNotificationType {
  body: any;
  robot: IRobotDto;
  event: string;
}
