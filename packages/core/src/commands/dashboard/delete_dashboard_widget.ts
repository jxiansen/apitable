

import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from 'command_manager';
import { getInstalledWidgetInDashboard,getDashboardSnapshot } from 'modules/database/store/selectors/resource/dashboard';

import { ResourceType } from 'types';
import { DashboardAction } from '../../commands_actions/dashboard';

export interface IDeleteDashboardWidget {
  cmd: CollaCommandName.DeleteDashboardWidget;
  dashboardId: string;
  widgetId: string;
}

export const deleteDashboardWidget: ICollaCommandDef<IDeleteDashboardWidget> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options: IDeleteDashboardWidget) {
    const { state: state } = context;
    const { dashboardId, widgetId } = options;
    const snapshot = getDashboardSnapshot(state);

    if (!snapshot) {
      return null;
    }

    const installedIds = getInstalledWidgetInDashboard(state);

    if (!installedIds) {
      return null;
    }

    if (!installedIds.includes(widgetId)) {
      return null;
    }

    const deleteDashboardWidgetAction = DashboardAction.deleteWidget2Action(snapshot, widgetId);

    if (!deleteDashboardWidgetAction) {
      return null;
    }

    return {
      result: ExecuteResult.Success,
      resourceId: dashboardId,
      resourceType: ResourceType.Dashboard,
      actions: deleteDashboardWidgetAction,
    };
  },
};
