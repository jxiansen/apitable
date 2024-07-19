import { IJOTAction } from 'engine/ot';
import { DatasheetActions } from 'commands_actions/datasheet';
import { getActiveDatasheetId, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType } from 'types';
import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { IViewLockInfo } from '../../exports/store/interfaces';

export interface ISetViewLockInfo {
  cmd: CollaCommandName.SetViewLockInfo;
  data: null | IViewLockInfo;
  viewId: string;
}

export const setViewLockInfo: ICollaCommandDef<ISetViewLockInfo> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { data, viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const datasheet = getDatasheet(state, datasheetId);

    if (!state || !datasheet) {
      return null;
    }

    const actions: IJOTAction[] = [];
    const setViewLockAction = DatasheetActions.setViewLockInfo2Action(datasheet.snapshot, { viewId, viewLockInfo: data });

    setViewLockAction && actions.push(setViewLockAction);
    if (actions.length === 0) {
      return null;
    }

    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
    };
  },
};
