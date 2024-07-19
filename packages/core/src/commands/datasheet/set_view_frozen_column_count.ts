

import { IJOTAction } from 'engine/ot';
import { DatasheetActions } from 'commands_actions/datasheet';
import { getActiveDatasheetId, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType } from 'types';
import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';

export interface ISetViewFrozenColumnCount {
  cmd: CollaCommandName.SetViewFrozenColumnCount;
  count: number;
  viewId: string;
}

export const setViewFrozenColumnCount: ICollaCommandDef<ISetViewFrozenColumnCount> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { count, viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const datasheet = getDatasheet(state, datasheetId);

    if (!state || !datasheet) {
      return null;
    }

    const actions: IJOTAction[] = [];
    const setViewFrozenColumnCountAction = DatasheetActions.setFrozenColumnCount2Action(datasheet.snapshot, { viewId, count });

    setViewFrozenColumnCountAction && actions.push(setViewFrozenColumnCountAction);
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

