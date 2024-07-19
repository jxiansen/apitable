

import { Drawer } from 'antd';
import classnames from 'classnames';
import { FC, useEffect } from 'react';
import { useThemeColors } from '@apitable/components';
import { t, Strings, Player, Events } from '@apitable/core';
import { CloseOutlined } from '@apitable/icons';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks';
import { SpaceList } from './space_list/space_list';
import styles from './style.module.less';

export interface ISpaceListDrawerProps {
  visible: boolean;
  onClose: (value: boolean) => void;
}

export const SpaceListDrawer: FC<React.PropsWithChildren<ISpaceListDrawerProps>> = ({ visible, onClose }) => {
  const colors = useThemeColors();
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  useEffect(() => {
    if (!visible) {
      return;
    }
    Player.doTrigger(Events.workbench_space_list_shown);
  }, [visible]);

  return (
    <Drawer
      className={classnames(styles.spaceListDrawer, isMobile && styles.mobile)}
      title={
        <div>
          <div className={styles.title}>{t(Strings.space_list)}</div>
          {isMobile && <div className={styles.tip}>{t(Strings.mobile_space_list_tip)}</div>}
        </div>
      }
      width={isMobile ? '100%' : 336}
      placement={isMobile ? 'bottom' : 'left'}
      height={isMobile ? '90%' : '100%'}
      open={visible}
      destroyOnClose
      closeIcon={<CloseOutlined size={16} color={colors.thirdLevelText} />}
      maskStyle={{ background: colors.lightMaskColor }}
      onClose={() => onClose(false)}
    >
      <SpaceList />
    </Drawer>
  );
};
