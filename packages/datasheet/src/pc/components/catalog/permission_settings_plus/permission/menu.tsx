import classNames from 'classnames';
import { ReactNode } from 'react';
import { Typography, useThemeColors } from '@apitable/components';
import styles from './style.module.less';

interface IMenuItem {
  className?: string;
  item: {
    label: React.ReactNode;
    subLabel?: string;
    value: any;
  };
  active?: boolean;
  option?: {
    labelColor?: string;
  };
  onClick?: (value: any) => void;
}
export const MenuItem: React.FC<React.PropsWithChildren<IMenuItem>> = (props) => {
  const { item, option, onClick, active, className } = props;
  const { label, value, subLabel } = item;
  const colors = useThemeColors();
  return (
    <div
      className={classNames(className, styles.permissionSettingMenuItem, active && styles.permissionSettingMenuItemActive)}
      onClick={() => onClick?.(value)}
    >
      <Typography color={option?.labelColor || colors.textCommonPrimary} variant="body2">
        {label}
      </Typography>
      <Typography variant="body4" color={colors.textCommonTertiary}>
        {subLabel}
      </Typography>
    </div>
  );
};

export const Menu = (props: { children: ReactNode[]; onClick?: () => void }) => {
  return (
    <div className={styles.permissionSettingMenu} onClick={props.onClick}>
      {props.children}
    </div>
  );
};
