import { Modal, Tooltip } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { Strings, t } from '@apitable/core';
import { NarrowOutlined } from '@apitable/icons';
import styles from './style.module.less';

interface IModalOutsideOperateProps {
  onModalClose(): void;
  showOutsideOperate?: boolean;
  pageTurn?: JSX.Element;
  modalWidth?: string | number;
  modalClassName?: string;
  style?: React.CSSProperties;
  getContainer?: HTMLElement | false;
}

export const ModalOutsideOperate: React.FC<React.PropsWithChildren<IModalOutsideOperateProps>> = (props) => {
  const { pageTurn, onModalClose, children, modalClassName, modalWidth, showOutsideOperate = true, getContainer } = props;
  return (
    <Modal
      visible
      closeIcon={null}
      wrapClassName={classNames(styles.modalWrapper, modalClassName)}
      onCancel={() => onModalClose()}
      destroyOnClose
      getContainer={getContainer}
      footer={null}
      width={modalWidth}
      centered
    >
      <div className={styles.modalBody}>
        {showOutsideOperate && (
          <div className={styles.operateArea}>
            {pageTurn}
            <Tooltip title={t(Strings.close)}>
              <span
                className={styles.closeButton}
                onClick={() => {
                  onModalClose();
                }}
              >
                <NarrowOutlined size={16} />
              </span>
            </Tooltip>
          </div>
        )}
        {children}
      </div>
    </Modal>
  );
};
