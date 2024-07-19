import { useMount } from 'ahooks';
import classNames from 'classnames';
import { FC } from 'react';
import { IReduxState } from '@apitable/core';
import { Wrapper } from 'pc/components/common';
import { PcHome } from 'pc/components/home/pc_home';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
import { InviteTitle } from '../components';
import { useInvitePageRefreshed } from '../use_invite';
// @ts-ignore
import { LoginToggle } from 'enterprise/home/login_toggle/login_toggle';
import styles from './style.module.less';

const LinkLogin: FC<React.PropsWithChildren<unknown>> = () => {
  const { whenPageRefreshed } = useInvitePageRefreshed({ type: 'linkInvite' });
  const inviteLinkInfo = useAppSelector((state: IReduxState) => state.invite.inviteLinkInfo);
  useMount(() => {
    whenPageRefreshed();
  });

  const { IS_ENTERPRISE } = getEnvVariables();

  if (!inviteLinkInfo) return null;
  return !IS_ENTERPRISE ? (
    <PcHome />
  ) : (
    <Wrapper>
      <div className={classNames(styles.linkLogin, 'invite-children-center')}>
        {<InviteTitle inviter={inviteLinkInfo.data.memberName} spaceName={inviteLinkInfo.data.spaceName} titleMarginBottom="40px" />}
        <div className={styles.loginContent}>{LoginToggle && <LoginToggle />}</div>
      </div>
    </Wrapper>
  );
};

export default LinkLogin;
