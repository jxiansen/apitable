

import { DatasheetActions } from 'commands_actions/datasheet';
import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { ITemporaryView } from '../../exports/store/interfaces';
import { IJOTAction } from 'engine';
import { CollaCommandName } from '..';
import { ResourceType } from 'types';
import {
  getActiveDatasheetId,
  getSnapshot,
} from 'modules/database/store/selectors/resource/datasheet/base';
export interface IManualSaveView {
  cmd: CollaCommandName.ManualSaveView;
  viewId: string;
  viewProperty: ITemporaryView
}

export const manualSaveView: ICollaCommandDef<IManualSaveView> = {
  undoable: false,

  execute: (context, options) => {
    const { state: state, fieldMapSnapshot } = context;
    const { viewProperty, viewId } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const snapshot = getSnapshot(state, datasheetId);

    if (!snapshot) {
      return null;
    }

    const manualSaveViewActions = DatasheetActions.manualSaveView2Action(snapshot, { viewId, viewProperty });

    if (!manualSaveViewActions) {
      return null;
    }

    const actions: IJOTAction[] = [...manualSaveViewActions];

    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
      fieldMapSnapshot
    };
  },
};
