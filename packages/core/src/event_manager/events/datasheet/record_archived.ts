import { EventRealTypeEnums, OPEventNameEnums } from 'event_manager/enum';
import { testPath } from 'event_manager/helper';
import { ResourceType } from 'types/resource_types';
import { IAtomEventType } from '../interface';
import { IOPBaseContext } from './../../interface/event.interface';

interface IRecordArchive {
  datasheetId: string;
  recordId: string;
}
export class OPEventRecordArchived extends IAtomEventType<IRecordArchive> {
  eventName = OPEventNameEnums.RecordArchived;
  realType = EventRealTypeEnums.REAL;
  scope = ResourceType.Datasheet;
  test(args: IOPBaseContext) {
    const { op, action, resourceId } = args;
    const { pass, recordId } = testPath(action.p, ['recordMap', ':recordId'], action.n === 'OD');

    let success = pass;
    if (op.cmd !== 'ArchiveRecords') {
      success = false;
    }

    return {
      pass: success,
      context: {
        datasheetId: resourceId,
        recordId,
      },
    };
  }
}
