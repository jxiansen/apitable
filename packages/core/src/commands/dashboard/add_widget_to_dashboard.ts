

import { getCustomConfig } from 'config';
import { ResourceType } from 'types';
import { CollaCommandName } from '..';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from '../../command_manager';
import { Strings, t } from '../../exports/i18n';
import { IDashboardLayout } from '../../exports/store/interfaces';
import { getDashboardSnapshot } from 'modules/database/store/selectors/resource/dashboard';
import { DashboardAction } from '../../commands_actions/dashboard';

export interface IAddWidgetToDashboard {
  cmd: CollaCommandName.AddWidgetToDashboard;
  dashboardId: string;
  widgetIds: string[];
  cols?: number;
}

const WIDTH = 3;

export const addWidgetToDashboard: ICollaCommandDef<IAddWidgetToDashboard> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options: IAddWidgetToDashboard) {
    const { state: state } = context;
    const { dashboardId, widgetIds, cols } = options;
    const dashboardSnapshot = getDashboardSnapshot(state, dashboardId);

    if (!dashboardSnapshot) {
      return null;
    }

    const layout = dashboardSnapshot.widgetInstallations.layout || [];

    if (layout.length + widgetIds.length > Number(getCustomConfig().DASHBOARD_WIDGET_MAX_NUM)) {
      throw new Error(t(Strings.reach_dashboard_installed_limit, { count: getCustomConfig().DASHBOARD_WIDGET_MAX_NUM }));
    }

    const newLayouts: IDashboardLayout[] = widgetIds.map((widgetId, index) => {
      return {
        id: widgetId,
        widthInColumns: WIDTH,
        heightInRoes: 6,
        // calculation formula
        // https://github.com/STRML/react-grid-layout/blob/master/test/examples/6-dynamic-add-remove.jsx
        row: Number.MAX_SAFE_INTEGER,
        column: ((layout.length + index) * WIDTH) % (cols || 12),
      };
    });

    const addWidgetActions = DashboardAction.addWidget2Action(dashboardSnapshot, { layout: newLayouts });

    if (!addWidgetActions) {
      return null;
    }

    return {
      result: ExecuteResult.Success,
      resourceId: dashboardId,
      resourceType: ResourceType.Dashboard,
      actions: addWidgetActions,
    };
  },
} as ICollaCommandDef<IAddWidgetToDashboard>;
