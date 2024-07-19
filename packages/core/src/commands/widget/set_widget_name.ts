import { ExecuteResult, ICollaCommandDef, ICommandOptionBase } from 'command_manager';
import { WidgetActions } from 'commands_actions/widget';
import { ResourceType } from 'types';
import { getResourcePack } from 'modules/database/store/selectors/resource';

export interface ISetWidgetName extends ICommandOptionBase {
  newWidgetName: string;
}

export const setWidgetName: ICollaCommandDef<ISetWidgetName> = {
  undoable: false,

  execute(context, options) {
    const state = context.state;
    const { resourceId, newWidgetName } = options;
    const widgetPack = getResourcePack(state, resourceId, ResourceType.Widget);

    if (!widgetPack) {
      return null;
    }

    const widgetSnapshot = widgetPack.widget.snapshot;

    const setWidgetNameAction = WidgetActions.setWidgetName2Action(widgetSnapshot, { newWidgetName });

    if (!setWidgetNameAction) {
      return null;
    }

    return {
      resourceId: resourceId,
      resourceType: options.resourceType,
      result: ExecuteResult.Success,
      actions: setWidgetNameAction,
    };
  },
};
