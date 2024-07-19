import { Tabs } from 'antd';
import { FC } from 'react';
import * as React from 'react';
import { t, Strings } from '@apitable/core';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { useAppSelector } from 'pc/store/react-redux';
import { BubbleBox } from './bubble-box/bubble-box';
import { MyInviteCode } from './my-invite-code';
import { SubmitInviteCode } from './submit-invite-code';
import styles from './style.module.less';

const { TabPane } = Tabs;

interface IInviteCodeModal {
  setShowInviteCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InviteCodeModal: FC<React.PropsWithChildren<IInviteCodeModal>> = ({ setShowInviteCode }) => {
  const userInfo = useAppSelector((state) => state.user.info);
  const inviteCode = userInfo?.inviteCode!;
  const usedInviteReward = userInfo?.usedInviteReward;

  return (
    <div>
      <Modal
        className={styles.modal}
        title={t(Strings.invite_code)}
        visible
        width={560}
        footer={null}
        centered
        onCancel={() => {
          setShowInviteCode(false);
        }}
      >
        {usedInviteReward ? (
          <MyInviteCode inviteCode={inviteCode} />
        ) : (
          <Tabs>
            <TabPane tab={t(Strings.invite_code_tab_mine)} key="1">
              <MyInviteCode inviteCode={inviteCode} />
            </TabPane>
            <TabPane
              tab={
                <div className={styles.tab}>
                  {t(Strings.invite_code_tab_submit)}
                  <BubbleBox />
                </div>
              }
              key="2"
            >
              <SubmitInviteCode submitAndSuccess={() => setShowInviteCode(false)} myInviteCode={inviteCode} />
            </TabPane>
          </Tabs>
        )}
      </Modal>
    </div>
  );
};
