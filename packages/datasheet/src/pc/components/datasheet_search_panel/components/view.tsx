import classNames from 'classnames';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { ViewType } from '@apitable/core';
import { ViewIcon } from 'pc/components/tool_bar/view_switcher/view_icon';
import styles from './style.module.less';

export const View: React.FC<
  React.PropsWithChildren<{
    id: string;
    active?: boolean;
    viewType: ViewType;
    onClick?(id: string): void;
  }>
> = (props) => {
  const { children, id, active, viewType, onClick } = props;
  const colors = useThemeColors();
  return (
    <div className={styles.nodeContainerWrapper}>
      <div
        className={classNames(styles.nodeContainer, styles.viewNodeContainer, {
          [styles.active]: active,
        })}
        onClick={() => onClick && onClick(id)}
      >
        <ViewIcon viewType={viewType} color={active ? colors.primaryColor : colors.fourthLevelText} />
        <span className={classNames(styles.text, styles.rightText)}>{children}</span>
      </div>
    </div>
  );
};
