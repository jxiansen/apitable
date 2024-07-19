import { createContext } from 'react';
import { IUnitMap } from '@apitable/core';

interface ICommentEmoji {
  [commentId: string]: {
    [emojiKey: string]: string[];
  };
}

export interface ICommentReplyMap {
  [commentId: string]: any;
}

export interface IActivityContext {
  replyText: any;
  setReplyText(text: any): void;
  emojis: ICommentEmoji;
  setEmojis(emojis: ICommentEmoji): void;
  commentReplyMap: ICommentReplyMap;
  updateCommentReplyMap(commentReply: ICommentReplyMap): void;
  focus: boolean;
  setFocus: (focus: boolean) => void;
  unitMap: IUnitMap | null;
  datasheetId: string;
  replyUnitId?: string;
  setReplyUnitId(replyUnitId?: string): void;
}

export const ActivityContext = createContext({} as IActivityContext);
