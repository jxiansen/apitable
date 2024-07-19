import { NotificationTypes } from 'shared/enums/request-types.enum';
import { IBaseUserDto } from 'socket/dtos/user/base-user.dto';

export interface INotificationRo {
  readonly rowNo: number;
  readonly createdAt: string;
  readonly notifyBody: object;
  readonly notifyType: string;
  readonly fromUser: IBaseUserDto;
  readonly isRead: number;
  readonly id: string;
  readonly toUuid: string;
  readonly updatedAt: string;
  event: NotificationTypes;
  socketId: string;
}
