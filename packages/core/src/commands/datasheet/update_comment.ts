

import { ResourceType } from 'types';
import { getRecord } from 'modules/database/store/selectors/resource/datasheet/base';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from 'command_manager';
import { CollaCommandName } from 'commands/enum';
import { IJOTAction } from 'engine';
import { IComments } from '../../exports/store/interfaces';
import { DatasheetActions } from 'commands_actions/datasheet';

export interface IUpdateComment {
  cmd: CollaCommandName.UpdateComment;
  datasheetId: string;
  recordId: string;
  comments: IComments;
  emojiAction?: boolean;
}

export const updateComment: ICollaCommandDef<IUpdateComment> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options: IUpdateComment) {
    const { state: state } = context;
    const { recordId, datasheetId, comments, emojiAction } = options;
    const actions: IJOTAction[] = [];
    const record = getRecord(state, recordId, datasheetId);
    if (!record) {
      return null;
    }

    const updateCommentAction = DatasheetActions.updateComment2Action({
      datasheetId,
      recordId,
      updateComments: [comments],
      emojiAction
    });

    if (!updateCommentAction) { return null; }

    actions.push(...updateCommentAction);
    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
    };
  },
};

