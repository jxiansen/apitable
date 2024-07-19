import { useMount } from 'ahooks';
import { FC } from 'react';
import { IReduxState } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { UrlInvalid } from '../components/url_invalid';
import { useInvitePageRefreshed } from '../use_invite';
import { getInvalidReason } from '../utils';

const MailInvalid: FC<React.PropsWithChildren<unknown>> = () => {
  const { whenPageRefreshed } = useInvitePageRefreshed({ type: 'mailInvite' });
  const inviteEmailInfo = useAppSelector((state: IReduxState) => state.invite.inviteEmailInfo);

  useMount(() => {
    whenPageRefreshed();
  });

  if (!inviteEmailInfo) return null;
  const { code, message } = inviteEmailInfo;
  return <UrlInvalid reason={getInvalidReason(code, message)} />;
};

export default MailInvalid;
