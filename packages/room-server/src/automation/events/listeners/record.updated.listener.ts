

import { defaultEventListenerOptions, IEventListenerOptions, OPEventNameEnums } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RecordUpdatedEvent } from '../domains/record.updated.event';
import { isHandleEvent } from '../helpers/listener.helper';
import { TriggerEventHelper } from '../helpers/trigger.event.helper';

@Injectable()
export class RecordUpdatedListener {
  private readonly options: IEventListenerOptions;

  constructor(private readonly triggerEventHelper: TriggerEventHelper) {
    this.options = defaultEventListenerOptions;
  }

  @OnEvent(OPEventNameEnums.RecordUpdated)
  public async handleRecordUpdatedEvent(event: RecordUpdatedEvent) {
    if (!isHandleEvent(event, event.beforeApply, this.options)) {
      return;
    }

    await this.triggerEventHelper.recordMatchConditionsTriggerHandler(event.context, event.metaContext);
  }
}
