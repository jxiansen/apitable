

import { EventRealTypeEnums, IAtomEventType, OPEventNameEnums } from 'event_manager';
import { AnyObject, IOPBaseContext } from 'event_manager/interface';
import { ResourceType } from 'types';

interface IButtonClicked {
  datasheet: {
    id: string;
    name: string;
  };
  record: {
    id: string;
    url: string;
    fields: AnyObject;
  };
}

export class OPEventButtonClicked extends IAtomEventType<IButtonClicked> {
  eventName = OPEventNameEnums.ButtonClicked;
  realType = EventRealTypeEnums.REAL;
  scope = ResourceType.Datasheet;

  // dispatch directly by user
  test(_opContext: IOPBaseContext) {
    return {
      pass: false,
      context: null
    };
  }
}
