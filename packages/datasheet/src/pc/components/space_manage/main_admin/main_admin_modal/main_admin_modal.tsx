import { Steps } from 'antd';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { Button, Typography } from '@apitable/components';
import { IReduxState, Navigation, Strings, t } from '@apitable/core';
import { CheckCircleFilled } from '@apitable/icons';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { Router } from 'pc/components/route_manager/router';
import { useAppSelector } from 'pc/store/react-redux';
import { SelectAdmin } from '../select_admin';
import { VerifyAdmin } from '../verify_admin';
import styles from './style.module.less';

const { Step } = Steps;

interface IModalProps {
  cancelModal: () => void;
}

export const MainAdminModal: FC<React.PropsWithChildren<IModalProps>> = ({ cancelModal }) => {
  const [current, setCurrent] = useState(0);
  const userInfo = useAppSelector((state: IReduxState) => state.user.info);
  const progressDot = (_dot: any, { status, index }: any) => {
    return (
      <span
        className={classNames({
          [styles.finish]: status === 'finish',
          [styles.process]: status === 'process',
          [styles.wait]: status === 'wait',
        })}
      >
        {index + 1}
      </span>
    );
  };
  useEffect(() => {
    if (!userInfo) {
      return;
    }
    if (!userInfo.isAdmin) {
      Router.push(Navigation.HOME);
    }
  }, [userInfo]);
  const cancelModalAndInit = () => {
    if (current === 2) {
      Router.redirect(Navigation.HOME);
    } else {
      cancelModal();
    }
  };
  const successStep = () => {
    return (
      <div className={styles.successStep}>
        <CheckCircleFilled className={styles.successIcon} />
        <div className={styles.successText}>{t(Strings.change_primary_admin_succeed)}</div>
        <Button style={{ marginTop: '30px' }} htmlType="submit" onClick={cancelModalAndInit} size="large" block color="primary">
          {t(Strings.back_to_workbench)}
        </Button>
        <span className={styles.informationText}>{t(Strings.space_manage_infomation_text)}</span>
      </div>
    );
  };
  const steps = [
    {
      title: t(Strings.space_manage_verify_primary_admin),
      content: <VerifyAdmin setCurrent={setCurrent} />,
    },
    {
      title: t(Strings.space_manage_choose_new_primary_admin),
      content: <SelectAdmin setCurrent={setCurrent} />,
    },
    {
      title: t(Strings.finish),
      content: successStep(),
    },
  ];

  return (
    <Modal
      footer={null}
      visible
      className={styles.superAdminModal}
      centered
      width={'80%'}
      style={{ maxWidth: '1170px', minWidth: '530px' }}
      maskClosable
      onCancel={cancelModalAndInit}
    >
      <Typography variant="h6">{t(Strings.change_primary_admin)}</Typography>
      <div className={styles.stepWrapper}>
        <Steps current={current} labelPlacement="vertical" progressDot={progressDot}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        {steps.map((item, index) => (
          <div style={{ display: current === index ? 'block' : 'none' }} key={item.title}>
            {item.content}
          </div>
        ))}
      </div>
    </Modal>
  );
};
