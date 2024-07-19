import { EventRealTypeEnums, EventSourceTypeEnums, OPEventNameEnums } from './enum';
import { datasheetEvent } from './events/datasheet';
import type { IEventListenerOptions } from './interface/event_manager.interface';

/**
 * When listening for events, you can pass in option parameters.
 * By default, all events are subscribed, and the event is triggered after the event op apply to the store.
 */
export const defaultEventListenerOptions: IEventListenerOptions = {
  realType: EventRealTypeEnums.ALL,
  sourceType: EventSourceTypeEnums.ALL,
  beforeApply: false,
};

export const REMOTE_NEW_CHANGES = 'REMOTE_NEW_CHANGES';
export const EMPTY_ARRAY = [];
export const DEFAULT_EVENT_MANAGER_OPTIONS = {
  enableVirtualEvent: false,
  enableCombEvent: false,
  enableEventComplete: false,
};

// Mapping relationship between event name and event definition class
export const EventNameClsMap = {
  // cell
  [OPEventNameEnums.CellUpdated]: datasheetEvent.OPEventCellUpdated,
  // field
  [OPEventNameEnums.FieldUpdated]: datasheetEvent.OPEventFieldUpdated,
  // record
  [OPEventNameEnums.RecordCommentUpdated]: datasheetEvent.OPEventRecordCommentUpdated,
  [OPEventNameEnums.RecordMetaUpdated]: datasheetEvent.OPEventRecordMetaUpdated,
  [OPEventNameEnums.RecordCreated]: datasheetEvent.OPEventRecordCreated,
  [OPEventNameEnums.RecordDeleted]: datasheetEvent.OPEventRecordDeleted,
  [OPEventNameEnums.RecordUpdated]: datasheetEvent.OPEventRecordUpdated,
  [OPEventNameEnums.RecordArchived]: datasheetEvent.OPEventRecordArchived,
  [OPEventNameEnums.RecordUnarchived]: datasheetEvent.OPEventRecordUnarchived,
};
