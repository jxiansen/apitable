

import { Modal } from 'antd';
import * as React from 'react';
import { Typography, useThemeColors } from '@apitable/components';
import { Selectors, Strings, t } from '@apitable/core';
import { CloseOutlined } from '@apitable/icons';
import { DisabledViewLock } from 'pc/components/view_lock/disabled_view_lock';
import { EnabledViewLock } from 'pc/components/view_lock/enabled_view_lock';
import { useAppSelector } from 'pc/store/react-redux';
import { IViewLockProps } from './interface';
import styles from './style.module.less';

export const ViewLock: React.FC<React.PropsWithChildren<IViewLockProps>> = (props) => {
  const colors = useThemeColors();
  const { viewId, onModalClose, unlockHandle } = props;
  const view = useAppSelector((state) => {
    const datasheetId = state.pageParams.datasheetId;
    const snapshot = Selectors.getSnapshot(state, datasheetId)!;
    return Selectors.getViewById(snapshot, viewId);
  })!;
  const isViewLocked = Boolean(view?.lockInfo);

  const Title = () => {
    return (
      <div className={styles.modalTitle}>
        <div>
          <Typography variant={'h6'}>{isViewLocked ? t(Strings.un_lock_view) : t(Strings.lock_view)}</Typography>
        </div>
        <div>
          <CloseOutlined color={colors.fourthLevelText} onClick={onModalClose} size={24} />
        </div>
      </div>
    );
  };

  return (
    <Modal
      visible
      closeIcon={null}
      wrapClassName={styles.viewLockModal}
      onCancel={onModalClose}
      destroyOnClose
      footer={null}
      centered
      width={400}
      title={<Title />}
      maskClosable
    >
      {isViewLocked ? (
        <EnabledViewLock view={view} onModalClose={onModalClose} unlockHandle={unlockHandle} />
      ) : (
        <DisabledViewLock viewId={view.id} onModalClose={onModalClose} />
      )}
    </Modal>
  );
};
