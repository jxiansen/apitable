import { EventRealTypeEnums, EventSourceTypeEnums, IEventInstance, IEventListenerOptions, IOPEvent } from '@apitable/core';

/**
 * whether the robot event should to handle
 * @param event         robot trigger event
 * @param beforeApply
 * @param options
 */
export function isHandleEvent(event: IEventInstance<IOPEvent>, beforeApply: boolean, options: IEventListenerOptions): boolean {
  if (options?.realType !== EventRealTypeEnums.ALL && options?.realType !== event.realType) {
    return false;
  }
  if (options?.sourceType !== EventSourceTypeEnums.ALL && options?.sourceType !== event.sourceType) {
    return false;
  }
  return Boolean(options.beforeApply) === beforeApply;
}
