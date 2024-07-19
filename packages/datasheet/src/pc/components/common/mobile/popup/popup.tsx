import { Drawer } from 'antd';
import { DrawerProps } from 'antd/lib/drawer';
import classNames from 'classnames';
import * as React from 'react';
import { useMemo } from 'react';
import { useThemeColors } from '@apitable/components';
import { CloseOutlined } from '@apitable/icons';
import style from './style.module.less';

export const Popup: React.FC<React.PropsWithChildren<DrawerProps>> = (props) => {
  const { headerStyle, className, ...rest } = props;
  const colors = useThemeColors();
  const _headerStyle: React.CSSProperties = useMemo(() => {
    const titleStyle = props.title ? {} : { padding: 0 };
    return headerStyle ? { ...headerStyle, ...titleStyle } : titleStyle;
  }, [headerStyle, props.title]);

  return (
    <Drawer
      closeIcon={
        <div className={style.closeIconWrapper}>
          <CloseOutlined color={colors.secondLevelText} size={16} />
        </div>
      }
      push={{ distance: 0 }}
      placement="bottom"
      {...rest}
      className={classNames(style.drawerPopup, className)}
      headerStyle={_headerStyle}
    >
      {props.children}
    </Drawer>
  );
};
