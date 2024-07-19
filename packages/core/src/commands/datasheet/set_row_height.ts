import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { IJOTAction } from 'engine/ot';
import { Strings, t } from '../../exports/i18n';
import { DatasheetActions } from 'commands_actions/datasheet';
import { RowHeightLevel } from 'modules/shared/store/constants';
import { getActiveDatasheetId, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType } from 'types';

export interface ISetRowHeightOptions {
  cmd: CollaCommandName.SetRowHeight;
  level: RowHeightLevel;
  viewId: string;
}

export const setRowHeight: ICollaCommandDef<ISetRowHeightOptions> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { level, viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const datasheet = getDatasheet(state, datasheetId);

    if (!state || !datasheet) {
      return null;
    }

    // Determine whether the currently operating view is the active view
    if (datasheet.activeView !== viewId) {
      throw new Error(t(Strings.error_set_row_height_failed_wrong_target_view));
    }

    const actions: IJOTAction[] = [];
    const setRowHeightAction = DatasheetActions.setRowHeightLevel2Action(datasheet.snapshot, { viewId, level });
    // action && collected.push(action);
    setRowHeightAction && actions.push(setRowHeightAction);
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
/*

 declare module 'command_manager/command_manager' {
 interface CollaCommandManager {
 execute(options: ISetRecordsOptions & { cmd: 'SetRecords' });
 }
 }

 */
