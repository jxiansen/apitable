import { IJOTAction } from 'engine/ot';
import { DatasheetActions } from 'commands_actions/datasheet';
import { getActiveDatasheetId, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { IFilterInfo, ResourceType } from 'types';
import { Strings, t } from '../../exports/i18n';
import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';

export interface ISetViewFilterOptions {
  cmd: CollaCommandName.SetViewFilter;
  data?: IFilterInfo;
  viewId: string;
}

export const setViewFilter: ICollaCommandDef<ISetViewFilterOptions> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { data, viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const datasheet = getDatasheet(state, datasheetId);

    if (!state || !datasheet) {
      return null;
    }

    // Determine whether the currently operating view is the active view
    if (datasheet.activeView !== viewId) {
      throw new Error(t(Strings.error_filter_failed_wrong_target_view));
    }

    const actions: IJOTAction[] = [];
    const setFilterInfoAction = DatasheetActions.setFilterInfo2Action(datasheet.snapshot, { viewId, filterInfo: data });

    // action && collected.push(action);
    setFilterInfoAction && actions.push(setFilterInfoAction);
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
