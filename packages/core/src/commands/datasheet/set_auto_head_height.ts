

import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { IJOTAction } from 'engine/ot';
import { Strings, t } from '../../exports/i18n';
import { DatasheetActions } from 'commands_actions/datasheet';
import { getActiveDatasheetId, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType } from 'types';

export interface ISetAutoHeadHeightOptions {
  cmd: CollaCommandName.SetAutoHeadHeight;
  isAuto: boolean;
  viewId: string;
}

export const setAutoHeadHeight: ICollaCommandDef<ISetAutoHeadHeightOptions> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { isAuto, viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const datasheet = getDatasheet(state, datasheetId);

    if (!state || !datasheet) {
      return null;
    }

    // Determine whether the current operating view is the active view
    if (datasheet.activeView !== viewId) {
      throw new Error(t(Strings.error_set_row_height_failed_wrong_target_view));
    }

    const actions: IJOTAction[] = [];
    const setAutoHeadHeightAction = DatasheetActions.setAutoHeadHeight2Action(datasheet.snapshot, { viewId, isAuto });
    setAutoHeadHeightAction && actions.push(setAutoHeadHeightAction);
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
