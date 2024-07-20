import classNames from 'classnames';
import { FC } from 'react';
import { t, Strings } from '@apitable/core';
import { IModalProps } from 'pc/components/common/modal/modal/modal.interface';
import { Modal } from '../modal/modal';
import styles from './style.module.less';
const config = {
  centered: true,
  maskClosable: false,
  visible: true,
};

export interface IBaseModalProps {
  showButton?: boolean;
}

export const BaseModal: FC<React.PropsWithChildren<IModalProps & IBaseModalProps>> = (props) => {
  const {
    className,
    cancelButtonProps,
    okButtonProps,
    cancelText = t(Strings.cancel),
    okText = t(Strings.submit),
    showButton = true,
    ...rest
  } = props;
  const buttonConfig: any = showButton
    ? {
      cancelButtonProps: { size: 'small', ...cancelButtonProps, className: 'subText' },
      okButtonProps: { size: 'small', ...okButtonProps },
    }
    : { footer: null };

  return (
    <Modal
      cancelText={cancelText}
      okText={okText}
      className={classNames(styles.baseModal, className)}
      {...config}
      {...buttonConfig}
      {...rest}
      maskClosable
    />
  );
};
