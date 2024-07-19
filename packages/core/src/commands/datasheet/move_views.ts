import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { CollaCommandName } from 'commands/enum';
import { IJOTAction } from 'engine/ot';
import { find, isEmpty } from 'lodash';
import { DatasheetActions } from 'commands_actions/datasheet';
import { ResourceType } from 'types';
import { Strings, t } from '../../exports/i18n';
import { getActiveDatasheetId, getSnapshot } from 'modules/database/store/selectors/resource/datasheet/base';
// import { IGridViewProperty } from 'store/interface';

export interface IMoveView {
  newIndex: number;
  viewId: string;
}

export interface IMoveViewsOptions {
  cmd: CollaCommandName.MoveViews;
  data: IMoveView[];
}

export type IMoveSelfView = Omit<IMoveView, 'viewId'>;

export const moveViews: ICollaCommandDef<IMoveViewsOptions> = {
  undoable: true,

  execute: (context, options) => {
    const { state: state } = context;
    const { data } = options;
    const datasheetId = getActiveDatasheetId(state)!;
    const snapshot = getSnapshot(state, datasheetId);
    if (!snapshot) {
      return null;
    }

    const views = snapshot.meta.views;

    if (isEmpty(data)) {
      return null;
    }

    const actions = data.reduce<IJOTAction[]>((collected, recordOption) => {
      const { newIndex, viewId } = recordOption;

      // Check if viewId exists

      if (!find(views, { id: viewId })) {
        throw new Error(t(Strings.error_move_view_failed_not_found_target));
      }
      const action = DatasheetActions.moveView2Action(snapshot, { viewId, target: newIndex });
      action && collected.push(action);
      return collected;
    }, []);

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

/*

declare module 'command_manager/command_manager' {
  interface CollaCommandManager {
    execute(options: IMoveViewOptions & { cmd: 'MoveViews' });
  }
}

*/
