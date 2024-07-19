

import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { CollaCommandName } from 'commands/enum';
import { IRecordMap, IReduxState } from '../../exports/store/interfaces';
import {
  getActiveDatasheetId,
  getSnapshot,
} from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType } from 'types';
import { Store } from 'redux';
import { IJOTAction, OTActionName } from 'engine';

export interface IResetRecordsOptions {
  cmd: CollaCommandName.ResetRecords;
  datasheetId?: string;
  data: IRecordMap;
  store: Store<IReduxState>;
}

export const resetRecords: ICollaCommandDef<IResetRecordsOptions> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state, fieldMapSnapshot } = context;
    const { data: _data } = options;
    const datasheetId = options.datasheetId || getActiveDatasheetId(state)!;
    const snapshot = getSnapshot(state, datasheetId);

    if (!snapshot) {
      return null;
    }

    const actions: IJOTAction[] = [{
      n: OTActionName.ObjectReplace,
      p: ['recordMap'],
      od: snapshot.recordMap,
      oi: _data,
    }];

    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
      fieldMapSnapshot
    };
  },
};