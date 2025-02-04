import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { IJOTAction } from 'engine';
import { t, Strings } from '../../exports/i18n';
import { ISetOrgChartStyle } from '../../exports/store/interfaces';
import { getActiveDatasheetId, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType } from 'types';
import { ViewAction } from 'commands_actions/view';

export type ISetOrgChartStyleOptions = ISetOrgChartStyle & {
  cmd: CollaCommandName.SetOrgChartStyle;
};

export const setOrgChartStyle: ICollaCommandDef<ISetOrgChartStyleOptions> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const datasheet = getDatasheet(state, datasheetId);
    if (!state || !datasheet) {
      return null;
    }

    // Determine whether the currently operating view is the active view
    if (datasheet.activeView !== viewId) {
      throw new Error(t(Strings.error_modify_column_failed_wrong_target_view));
    }

    const actions: IJOTAction[] = [];
    const setOrgChartStyleAction = ViewAction.setOrgChartStyle2Action(datasheet.snapshot, options);
    // action && collected.push(action);
    setOrgChartStyleAction && actions.push(setOrgChartStyleAction);
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
