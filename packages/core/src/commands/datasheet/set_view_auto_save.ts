

import { DatasheetActions } from 'commands_actions/datasheet';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { IJOTAction } from 'engine';
import { IViewProperty } from '../../exports/store/interfaces';
import {
  getActiveDatasheetId,
  getSnapshot,
} from 'modules/database/store/selectors/resource/datasheet/base';
import { CollaCommandName } from '..';
import { ResourceType } from 'types';
import { manualSaveView } from 'commands/datasheet/manual_save_view';

export interface ISetViewAutoSave {
  cmd: CollaCommandName.SetViewAutoSave;
  viewId: string;
  autoSave: boolean;
  viewProperty?: IViewProperty
}

export const setViewAutoSave: ICollaCommandDef<ISetViewAutoSave> = {
  undoable: false,

  execute: (context, options) => {
    const { state: state, fieldMapSnapshot } = context;
    const { autoSave, viewId, viewProperty } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const snapshot = getSnapshot(state, datasheetId);

    if (!snapshot) {
      return null;
    }

    const setViewAutoSaveAction = DatasheetActions.setViewAutoSave2Action(snapshot, { viewId, autoSave });

    if (!setViewAutoSaveAction) {
      return null;
    }

    const actions: IJOTAction[] = [setViewAutoSaveAction];

    if (viewProperty) {
      const manualSaveViewActions = manualSaveView.execute(context, { cmd: CollaCommandName.ManualSaveView, viewId, viewProperty });

      if (manualSaveViewActions) {
        if (manualSaveViewActions.result === ExecuteResult.Fail) {
          return manualSaveViewActions;
        }
        actions.push(...manualSaveViewActions.actions);
      }
    }

    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
      fieldMapSnapshot
    };
  },
};
