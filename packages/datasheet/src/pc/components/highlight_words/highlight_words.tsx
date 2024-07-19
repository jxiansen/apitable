

import * as React from 'react';
import Highlighter from 'react-highlight-words';
import { Typography } from '@apitable/components';
import styles from './style.module.less';

export interface IHighlightWords {
  keyword?: string;
  words: string;
  showTip?: boolean;
}

export const HighlightWords: React.FC<React.PropsWithChildren<IHighlightWords>> = (props) => {
  const { keyword, words, showTip } = props;
  if (!keyword) {
    if (showTip) {
      return (
        <Typography variant="body3" ellipsis component="div">
          {words}
        </Typography>
      );
    }
    return <>{words}</>;
  }
  return (
    <Typography variant="body3" ellipsis={{ rows: 1, tooltip: words }} component="div">
      <Highlighter highlightClassName={styles.hightLight} searchWords={[keyword]} autoEscape textToHighlight={words} />;
    </Typography>
  );
};
