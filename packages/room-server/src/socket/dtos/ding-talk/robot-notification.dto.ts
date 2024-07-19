

import { RobotNotificationTypeEnum } from 'shared/enums/ding-talk/robot-notification-type.enum';

interface INotificationAt {
  /**
   * Cell phone number
   * Cell phone number of the person being @ (add the @person's cell phone number to the content)
   */
  atMobiles: string[];
  /**
   * Whether @all
   */
  isAll: boolean;
}

interface IText {
  content: string;
}

interface IMarkDown {
  title: string;
  text: string;
}

export interface IRobotNotificationType {
  msgtype: RobotNotificationTypeEnum;
}

export interface IRobotDto {
  accessToken: string;
  secret: string;
}

export interface IRobotNotificationTextDto extends IRobotNotificationType {
  text: IText;
  at?: INotificationAt;
}

export interface IRobotNotificationMarkDownDto extends IRobotNotificationType {
  markdown: IMarkDown;
  at?: INotificationAt;
}
