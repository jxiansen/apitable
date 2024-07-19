import { ICollaCommandDef, ICollaCommandExecuteContext, ExecuteResult } from 'command_manager';
import { getResourceWidgetPanels } from 'modules/database/store/selectors/resource';
import { DatasheetActions } from 'commands_actions/datasheet';
import { ResourceType } from 'types';
import { CollaCommandName } from 'commands/enum';

export interface IChangeWidgetInPanelHeight {
  cmd: CollaCommandName.ChangeWidgetInPanelHeight;
  panelId: string;
  widgetId: string;
  widgetHeight: number;
  resourceId: string;
  resourceType: ResourceType;
}

export const changeWidgetInPanelHeight: ICollaCommandDef<IChangeWidgetInPanelHeight> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options) {
    const { state: state } = context;
    const { widgetId, resourceId, resourceType, panelId, widgetHeight } = options;
    const widgetPanels = getResourceWidgetPanels(state, resourceId, resourceType);

    if (!widgetPanels) {
      return null;
    }

    const widgetPanelIndex = widgetPanels.findIndex((item) => item.id === panelId);

    if (widgetPanelIndex < 0) {
      return null;
    }

    const widgets = widgetPanels[widgetPanelIndex]!.widgets;
    const widgetIndex = widgets.findIndex((item) => item.id === widgetId);

    if (widgetIndex < 0) {
      return null;
    }

    const changeWidgetHeightAction = DatasheetActions.changeWidgetHeight2Action(state, {
      widgetIndex,
      widgetPanelIndex,
      widgetHeight,
      resourceId,
      resourceType,
    });

    if (!changeWidgetHeightAction) {
      return null;
    }

    return {
      result: ExecuteResult.Success,
      resourceId,
      resourceType,
      actions: changeWidgetHeightAction,
    };
  },
};
