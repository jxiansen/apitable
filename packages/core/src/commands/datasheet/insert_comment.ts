

import { getNewIds, IDPrefix } from 'utils';
import { ResourceType } from 'types';
import { CollaCommandName } from 'commands/enum';
import { IComments } from '../../exports/store/interfaces';
import {
  getSnapshot,
} from 'modules/database/store/selectors/resource/datasheet/base';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from 'command_manager';
import { IJOTAction } from 'engine';
import { DatasheetActions } from 'commands_actions/datasheet';
export interface IInsertComment {
  cmd: CollaCommandName.InsertComment;
  datasheetId: string;
  recordId: string;
  comments: (Omit<IComments, 'commentId'| 'revision'> & { commentId?: string })[];
}

export const insertComment: ICollaCommandDef<IInsertComment> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options: IInsertComment) {
    const { state: state } = context;
    const { datasheetId, recordId, comments } = options;

    const snapshot = getSnapshot(state, datasheetId);

    if (!snapshot) {
      return null;
    }
    const recordMap = snapshot.recordMap;

    if (!recordMap[recordId]) {
      return null;
    }

    const actions: IJOTAction[] = [];

    const recordComments = recordMap[recordId]!.comments;
    const commentIds = recordComments ? recordComments.map(item => item.commentId) : [];
    const action = comments.reduce<IJOTAction[]>((collection, comment) => {
      const commentId = getNewIds(IDPrefix.Comment, 1, commentIds)[0]!;
      commentIds.push(commentId);
      const insertAction = DatasheetActions.insertComment2Action(
        state,
        {
          datasheetId,
          recordId,
          insertComments: [{
            ...comment,
            commentId: commentId!,
          }],
        }
      );
      if (!insertAction) {
        return collection;
      }
      collection.push(...insertAction);
      return collection;
    }, []);

    if (!action) {
      return null;
    }
    actions.push(...action);
    if (!actions.length) { return null; }
    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
      datasheetId,
    };
  },
};