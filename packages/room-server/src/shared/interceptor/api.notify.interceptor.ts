import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Strings } from '@apitable/core';
import { DATASHEET_HTTP_DECORATE, DATASHEET_MEMBER_FIELD, DATASHEET_META_HTTP_DECORATE, InjectLogger, USER_HTTP_DECORATE } from '../common';
import { map, toString, truncate } from 'lodash';
import { ApiResponse } from '../../fusion/vos/api.response';
import { ApiRecordDto } from '../../fusion/dtos/api.record.dto';
import { I18nService } from 'nestjs-i18n';
import { tap } from 'rxjs/operators';
import { Logger } from 'winston';
import { QueueSenderBaseService } from 'shared/services/queue/queue.sender.base.service';

/**
 * Fusion API Notify intercept, middleware -> hooks -> interceptor
 */
@Injectable()
export class ApiNotifyInterceptor implements NestInterceptor {
  constructor(
    @InjectLogger() private readonly logger: Logger,
    private readonly i18n: I18nService,
    private readonly queueSenderService: QueueSenderBaseService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request = context.switchToHttp().getRequest<any>();
    return next.handle().pipe(
      tap((data: ApiResponse<any>) => {
        if (request[DATASHEET_MEMBER_FIELD] && data.data && data.data.records) {
          this.createMemberNotification(request, data.data.records).catch((err) => {
            this.logger.error('Failed to notice members about the record modification through API', { stack: err?.stack, message: err?.message });
          });
        }
      }),
    ) as any as Promise<any>;
  }

  async createMemberNotification(request: any, records: ApiRecordDto[]): Promise<void> {
    if (!request[DATASHEET_MEMBER_FIELD].size) {
      return;
    }
    if (!records.length) {
      return;
    }
    const memberFields = request[DATASHEET_MEMBER_FIELD];
    const datasheet = request[DATASHEET_HTTP_DECORATE];
    const metadata = request[DATASHEET_META_HTTP_DECORATE];
    const viewId = request.query.viewId ? request.query.viewId : metadata.views[0].id;
    const primaryFieldId = metadata.views[0].columns[0].fieldId;
    const primaryFieldName = metadata.fieldMap[primaryFieldId].name;
    for (const record of records) {
      for (const memberField of memberFields) {
        if (record.fields && record.fields[memberField]) {
          // get the field name
          const fieldName = metadata.fieldMap[memberField]?.name || memberField;
          const recordTitle = toString(record.fields[primaryFieldId] || record.fields[primaryFieldName]);
          const unitIds: string[] = map(record.fields[memberField] as string[], 'id');
          if (!unitIds.length) {
            continue;
          }
          const message = {
            nodeId: datasheet.dstId,
            spaceId: datasheet.spaceId,
            body: {
              extras: {
                fieldName,
                recordTitle: recordTitle
                  ? truncate(recordTitle, { length: 20 })
                  : await this.i18n.translate(Strings.record_unnamed, {
                      lang: request[USER_HTTP_DECORATE]?.locale,
                    }),
                recordIds: [record.recordId],
                viewId: viewId,
              },
            },
            templateId: 'single_record_member_mention',
            toUnitId: unitIds,
            fromUserId: request[USER_HTTP_DECORATE].id,
          };
          return this.queueSenderService.sendMessage('apitable.notification.exchange', 'notification.message', message);
        }
      }
    }
  }
}
