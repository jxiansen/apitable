

import { Modal } from 'antd';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { t, Strings } from '@apitable/core';
import { WarnCircleFilled } from '@apitable/icons';
import { useAppSelector } from 'pc/store/react-redux';
import styles from './styles.module.less';

export const Reconnecting: React.FC<React.PropsWithChildren<unknown>> = () => {
  const colors = useThemeColors();
  const reconnecting = useAppSelector((state) => {
    return state.space.reconnecting;
  });
  return (
    <Modal
      wrapClassName={styles.modalWrapper}
      destroyOnClose
      visible={reconnecting}
      width={300}
      mask={false}
      closable={false}
      maskClosable={false}
      style={{
        pointerEvents: 'none',
      }}
      footer={null}
      title={
        <>
          <WarnCircleFilled color={colors.warningColor} /> {t(Strings.disconnect_from_the_server)}
        </>
      }
    >
      {t(Strings.try_my_best_effort_to_reconnect)}
    </Modal>
  );
};
