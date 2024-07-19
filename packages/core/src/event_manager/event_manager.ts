import { isEqual } from 'lodash';
import { defaultEventListenerOptions } from './const';
import { AnyObject, IEventInstance, IEventListenerMap, IEventListenerOptions, IEventManager, IOPEvent } from './interface';
import { EventRealTypeEnums, EventSourceTypeEnums, OPEventNameEnums } from './enum';

/**
 * Manage event monitoring
 */
export class EventManager implements IEventManager {
  // Maintain the mapping relationship between registered events and binding actions
  eventListenerMap: IEventListenerMap = {};

  /**
   * Listen for events
   * @param eventName event name
   * @param actionFunc action function
   * @param _options
   */
  addEventListener(eventName: OPEventNameEnums, actionFunc: (context: any) => void, _options: IEventListenerOptions = defaultEventListenerOptions) {
    const options = { ...defaultEventListenerOptions, ..._options };
    const eventListener = {
      actionFunc,
      options,
    };
    if (this.eventListenerMap[eventName]) {
      this.eventListenerMap[eventName]!.push(eventListener);
    } else {
      this.eventListenerMap[eventName] = [eventListener];
    }
  }

  /**
   * Cancel event listener
   * @param eventName
   * @param actionFunc
   * @param _options
   */
  removeEventListener(
    eventName: OPEventNameEnums,
    actionFunc: (context: any) => void,
    _options: IEventListenerOptions = defaultEventListenerOptions
  ) {
    const options = { ...defaultEventListenerOptions, ..._options };
    const eventListeners = this.eventListenerMap[eventName];
    const thisEventListenerSignature = {
      actionFunc: actionFunc.toString(),
      options,
    };
    if (eventListeners) {
      const listenerIndex = eventListeners.findIndex((item) => {
        const itemSignature = {
          actionFunc: item.actionFunc.toString(),
          options: item.options,
        };
        return isEqual(itemSignature, thisEventListenerSignature);
      });
      if (listenerIndex > -1) {
        eventListeners.splice(listenerIndex, 1);
      }
    }
  }

  /**
   * Trigger the event, the op stream will automatically trigger the event, or it can be triggered manually.
   * @param event
   * @param beforeApply
   * @param metaContext
   */
  dispatchEvent(event: IEventInstance<IOPEvent>, beforeApply: boolean, metaContext: AnyObject = {}) {
    const eventListeners = this.eventListenerMap[event.eventName];
    if (eventListeners) {
      eventListeners.forEach(({ actionFunc, options }) => {
        if (options?.realType !== EventRealTypeEnums.ALL && options?.realType !== event.realType) {
          return;
        }
        if (options?.sourceType !== EventSourceTypeEnums.ALL && options?.sourceType !== event.sourceType) {
          return;
        }
        if (Boolean(options.beforeApply) !== beforeApply) {
          return;
        }
        actionFunc(event.context, metaContext);
      });
    }
  }

  handleEvents(events: IEventInstance<IOPEvent>[], beforeApply: boolean, context = {}) {
    events.forEach((event) => {
      this.dispatchEvent(event, beforeApply, context);
    });
  }
}
