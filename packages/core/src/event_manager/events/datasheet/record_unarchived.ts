

import { IOperation } from 'engine/ot/interface';
import { testPath } from 'event_manager';
import { ResourceType } from 'types';
import { IAtomEventType } from '../interface';
import { EventRealTypeEnums, OPEventNameEnums } from './../../enum';
import { AnyObject, IOPBaseContext } from './../../interface/event.interface';

interface IRecordUnarchived {
  datasheetId: string;
  recordId: string;
  op: IOperation;
  fields: AnyObject;
  diffFields: string[];
}

export class OPEventRecordUnarchived extends IAtomEventType<IRecordUnarchived> {
  eventName = OPEventNameEnums.RecordUnarchived;
  realType = EventRealTypeEnums.REAL;
  scope = ResourceType.Datasheet;

  test({ action, resourceId, op }: IOPBaseContext) {
    const { pass, recordId } = testPath(action.p, ['recordMap', ':recordId'], ('oi' in action));

    let success = pass;
    if (op.cmd !== 'UnarchiveRecords') {
      success = false;
    }

    if (!success) {
      return {
        pass: success,
        context: null
      };
    }
    // fill phase will overwrite diffFields
    const diffFields = Object.keys(action['oi'].data);
    return {
      pass,
      context: {
        datasheetId: resourceId,
        recordId,
        op,
        fields: action['oi'].data,
        diffFields
      }
    };
  }
}