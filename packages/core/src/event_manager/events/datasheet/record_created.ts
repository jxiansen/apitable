import { IOperation } from 'engine/ot/interface';
import { testPath } from 'event_manager';
import { IReduxState } from '../../../exports/store/interfaces';
import { getDatasheet, getFieldMap } from 'modules/database/store/selectors/resource/datasheet';
import { ResourceType } from 'types';
import { transformOpFields } from '../../helper';
import { IAtomEventType } from '../interface';
import { EventRealTypeEnums, OPEventNameEnums } from './../../enum';
import { AnyObject, IEventInstance, IOPBaseContext, IOPEvent } from './../../interface/event.interface';

interface IRecordCreated {
  datasheetId: string;
  recordId: string;
  op: IOperation;
  fields: AnyObject;
  diffFields: string[];
}

export class OPEventRecordCreated extends IAtomEventType<IRecordCreated> {
  eventName = OPEventNameEnums.RecordCreated;
  realType = EventRealTypeEnums.REAL;
  scope = ResourceType.Datasheet;

  test({ action, resourceId, op }: IOPBaseContext) {
    const { pass, recordId } = testPath(action.p, ['recordMap', ':recordId'], 'oi' in action);

    let success = pass;
    if (op.cmd === 'UnarchiveRecords') {
      success = false;
    }

    if (!success) {
      return {
        pass: success,
        context: null,
      };
    }
    // fill phase will overwrite diffFields
    const diffFields = Object.keys(action['oi'].data);
    return {
      pass,
      context: {
        action,
        datasheetId: resourceId,
        recordId,
        op,
        fields: action['oi'].data,
        diffFields,
      },
    };
  }
  /**
   * Complete event context
   */
  fill(events: IEventInstance<IOPEvent>[], state: IReduxState) {
    return events.map((event) => {
      if (event.eventName === OPEventNameEnums.RecordCreated) {
        const { datasheetId, recordId } = event.context as IRecordCreated;
        const fieldMap = getFieldMap(state, datasheetId)!;
        const fieldKeys = Object.keys(fieldMap);
        event.context.datasheetName = getDatasheet(state, datasheetId)?.name;
        event.context.state = state;
        const { fields, eventFields } = transformOpFields({
          recordData: event.context.fields,
          state: state,
          datasheetId,
          recordId,
        });
        event.context.eventFields = eventFields;
        event.context.fields = fields;
        // When a new record is added, all fields are changed from scratch. This diffFields should contain all fields.
        event.context.diffFields = fieldKeys;
      }
      return event;
    });
  }
}
