import { defaultEventListenerOptions, IEventListenerOptions, OPEventNameEnums } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RecordCreatedEvent } from '../domains/record.created.event';
import { isHandleEvent } from '../helpers/listener.helper';
import { TriggerEventHelper } from '../helpers/trigger.event.helper';

@Injectable()
export class RecordCreatedListener {
  private readonly options: IEventListenerOptions;

  constructor(private readonly triggerEventHelper: TriggerEventHelper) {
    this.options = defaultEventListenerOptions;
  }

  @OnEvent(OPEventNameEnums.RecordCreated)
  public async handleRecordCreatedEvent(event: RecordCreatedEvent) {
    if (!isHandleEvent(event, event.beforeApply, this.options)) {
      return;
    }

    // record matching condition
    await Promise.all([
      await this.triggerEventHelper.recordMatchConditionsTriggerHandler(event.context, event.metaContext),
      // record created
      await this.triggerEventHelper.recordCreatedTriggerHandler(event.context, event.metaContext),
    ]);
  }
}
