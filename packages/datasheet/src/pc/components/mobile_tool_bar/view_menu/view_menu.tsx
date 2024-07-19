import * as React from 'react';
import { t, Strings } from '@apitable/core';
import { Popup } from 'pc/components/common/mobile/popup';
import { ViewSwitcher } from 'pc/components/tool_bar/mobile/view_switcher';
import styles from './style.module.less';

interface IViewMenu {
  visible: boolean;
  onClose: () => void;
}

export const ViewMenu: React.FC<React.PropsWithChildren<IViewMenu>> = (props) => {
  const { visible, onClose } = props;

  return (
    <Popup
      className={styles.viewMenuDrawer}
      title={t(Strings.view_list)}
      open={visible}
      onClose={onClose}
      height="auto"
      destroyOnClose
      bodyStyle={{ padding: '0 0 24px 24px' }}
    >
      <ViewSwitcher onClose={onClose} />
    </Popup>
  );
};
