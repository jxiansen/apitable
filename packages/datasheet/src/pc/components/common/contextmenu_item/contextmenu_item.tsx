import classnames from 'classnames';
import { FC } from 'react';
import * as React from 'react';
import { NodeIcon } from 'pc/components/catalog/node_context_menu/node_icons';
import RightArrowIcon from 'static/icon/datasheet/datasheet_icon_calender_right.svg';
import styles from './style.module.less';

export interface IContextmenuItemProps {
  className?: string;
  icon?: NodeIcon | React.ReactElement;
  name: string | (() => React.ReactElement);
  shortcutKey?: string;
  arrow?: boolean;
  onClick?: ({ event }: { event: any; triggerEvent: any }) => void;
}

export const ContextmenuItem: FC<React.PropsWithChildren<IContextmenuItemProps>> = ({
  icon,
  name,
  shortcutKey,
  arrow = false,
  onClick,
  className,
  ...rest
}) => {
  return (
    <div
      className={classnames(styles.contextmenuItem, className)}
      onClick={(e) => {
        onClick?.({ event: e, triggerEvent: e });
      }}
      {...rest}
    >
      {icon}
      <div className={styles.name}>{typeof name === 'string' ? name : name()}</div>
      <div className={styles.shortcutKey}>{shortcutKey}</div>
      {arrow && <RightArrowIcon className={styles.arrow} />}
    </div>
  );
};
