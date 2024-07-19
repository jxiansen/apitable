

import { Node } from 'slate';
import { ElementType } from '../constant';
import { EditorValue } from '../interface/editor';

export const text = (document: EditorValue) => {
  return document.reduce((res, node) => {
    if (node.isVoid) {
      if (node.type === ElementType.IMAGE) {
        return `${res}[img]`;
      }
      if (node.type === ElementType.MENTION) {
        return `${res}[@${node.data.name}]`;
      }
      if (node.type === ElementType.DIVIDER) {
        return `${res}[---]`;
      }
      return `${res}[embed]`;
    }
    return `${res}${Node.string(node)}`;
  }, '');
};
