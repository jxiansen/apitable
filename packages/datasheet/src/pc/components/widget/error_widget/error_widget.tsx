

import * as React from 'react';
import { LinkButton } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { WarnCircleFilled } from '@apitable/icons';
import styles from './styles.module.less';

interface IErrorWidget {
  title?: string;
  content: string | React.ReactNode;
  actionText?: string;
  action?: () => void;
}

export const ErrorWidget = ({ title = t(Strings.widget_load_error_title), content, actionText, action }: IErrorWidget) => (
  <div className={styles.errorWidgetWrap}>
    <div className={styles.title}>
      <WarnCircleFilled size={16} />
      <span>{title}</span>
    </div>
    <div className={styles.content}>{content}</div>
    {action && (
      <LinkButton className={styles.actionBtn} onClick={() => action()}>
        <span className={styles.linkText}>{actionText}</span>
      </LinkButton>
    )}
  </div>
);
