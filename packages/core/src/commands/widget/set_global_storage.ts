

import { ExecuteResult, ICollaCommandDef, ICommandOptionBase } from 'command_manager';
import { Strings, t } from '../../exports/i18n';
import { WidgetActions } from 'commands_actions/widget';
import { ResourceType } from 'types';
import { getResourcePack } from 'modules/database/store/selectors/resource';

export interface ISetGlobalStorage extends ICommandOptionBase {
  key: string;
  value: any;
}

const MAX_GLOBAL_STORAGE_KEY = 100;

export const setGlobalStorage: ICollaCommandDef<ISetGlobalStorage> = {
  undoable: false,

  execute(context, options) {
    const state = context.state;
    const { resourceId, key, value } = options;
    const widgetPack = getResourcePack(state, resourceId, ResourceType.Widget);

    if (!widgetPack) {
      return null;
    }

    const widgetSnapshot = widgetPack.widget.snapshot;

    if (Object.keys(widgetSnapshot).length > MAX_GLOBAL_STORAGE_KEY) {
      throw new Error(t(Strings.global_storage_size_large));
    }

    const setGlobalStorageAction = WidgetActions.setGlobalStorage2Action(widgetSnapshot, { key, value });

    if (!setGlobalStorageAction) {
      return null;
    }

    return {
      resourceId: options.resourceId,
      resourceType: options.resourceType,
      result: ExecuteResult.Success,
      actions: setGlobalStorageAction,
    };
  },
};
