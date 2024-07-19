import { ResourceType } from 'types';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from '../../command_manager';
import { DatasheetActions } from '../../commands_actions/datasheet';
import { CollaCommandName } from '..';
import { getResourceWidgetPanels } from 'modules/database/store/selectors/resource';
import { IWidgetInPanel } from '../../exports/store/interfaces';

export interface IMoveWidget {
  cmd: CollaCommandName.MoveWidget;
  layout: IWidgetInPanel[];
  resourceId: string;
  resourceType: ResourceType.Datasheet | ResourceType.Mirror;
  panelId: string;
}

export const moveWidget: ICollaCommandDef<IMoveWidget> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options: IMoveWidget) {
    const { state: state } = context;
    const { layout, panelId, resourceType, resourceId } = options;
    const widgetPanels = getResourceWidgetPanels(state, resourceId, resourceType);

    if (!widgetPanels) {
      return null;
    }

    const activePanelIndex = widgetPanels.findIndex((item) => item.id === panelId);

    if (activePanelIndex < 0) {
      return null;
    }

    const widgets = widgetPanels[activePanelIndex]!.widgets;
    const installedWidgetIds = widgets.map((widget) => widget.id);
    const ids = layout.map((v) => v.id);
    const _ids = [...new Set([...ids, ...installedWidgetIds])];
    if (_ids.length !== ids.length) {
      return null;
    }

    const moveWidgetAction = DatasheetActions.moveWidget2Action(state, {
      widgetPanelIndex: activePanelIndex,
      layout,
      resourceType,
      resourceId,
    });

    if (!moveWidgetAction) {
      return null;
    }

    return {
      result: ExecuteResult.Success,
      resourceId: resourceId,
      resourceType: resourceType,
      actions: moveWidgetAction,
    };
  },
};
