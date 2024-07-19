

import { OPEventNameEnums, EventRealTypeEnums, EventAtomTypeEnums,EventSourceTypeEnums } from 'event_manager/enum';
import { IOPBaseContext, IEventTestResult, IEventInstance, IAtomEvent, IOPEvent } from 'event_manager/interface/event.interface';
import { ResourceType } from 'types';

export abstract class IAtomEventType<T> {
  abstract eventName: OPEventNameEnums;
  abstract realType: EventRealTypeEnums;
  abstract scope: ResourceType;
  atomType = EventAtomTypeEnums.ATOM;
  // Test if op matches the event characteristics
  abstract test(opContext: IOPBaseContext, sourceType?: EventSourceTypeEnums.ALL): IEventTestResult<T>;
}

export abstract class ICombEventType {
  abstract eventName: OPEventNameEnums;
  abstract realType: EventRealTypeEnums;
  abstract scope: ResourceType;
  // This composite event accepts the following atomic events for aggregation.
  abstract acceptEventNames: OPEventNameEnums[];
  atomType = EventAtomTypeEnums.COMB;
  abstract comb(events: IEventInstance<IAtomEvent>[]): IEventInstance<IOPEvent>[];
}

export type IEventType = IAtomEventType<any> | ICombEventType;

export interface ICellUpdatedContext {
  recordId: string;
  fieldId: string;
  datasheetId: string;
  action: any;
  change: {
    from: any;
    to: any;
  }
  linkDatasheetId?: string;
}