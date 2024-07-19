

import { NotificationTypes } from 'shared/enums/request-types.enum';

export class EventEmitDto {
  readonly event!: NotificationTypes;
  readonly data: unknown;
}
