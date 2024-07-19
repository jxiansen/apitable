import { ResourceType } from 'types';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from '../../command_manager';
import { DashboardAction } from '../../commands_actions/dashboard';
import { IDashboardLayout } from '../../exports/store/interfaces';
import { getInstalledWidgetInDashboard, getDashboardSnapshot } from 'modules/database/store/selectors/resource/dashboard';

import { CollaCommandName } from '..';

export interface IChangeDashboardLayout {
  cmd: CollaCommandName.ChangeDashboardLayout;
  dashboardId: string;
  layout: IDashboardLayout[];
}

export const changeDashboardLayout: ICollaCommandDef<IChangeDashboardLayout> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options) {
    const { state: state } = context;
    const { dashboardId, layout } = options;
    const installedWidgetIds = getInstalledWidgetInDashboard(state);
    if (!installedWidgetIds) {
      return null;
    }

    const ids = layout.map((item) => {
      return item.id;
    });

    const _ids = [...new Set([...ids, ...installedWidgetIds])];

    if (_ids.length !== ids.length) {
      return null;
    }

    const dashboardSnapshot = getDashboardSnapshot(state);

    if (!dashboardSnapshot) {
      return null;
    }

    const changeDashBoardLayoutAction = DashboardAction.changeWidgetLayout2Action(dashboardSnapshot, { layout: layout });

    if (!changeDashBoardLayoutAction) {
      return null;
    }

    return {
      result: ExecuteResult.Success,
      resourceId: dashboardId,
      resourceType: ResourceType.Dashboard,
      actions: changeDashBoardLayoutAction,
    };
  },
};
