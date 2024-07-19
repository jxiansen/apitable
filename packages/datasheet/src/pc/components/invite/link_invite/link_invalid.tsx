import { useMount } from 'ahooks';
import { FC } from 'react';
import { IReduxState } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { UrlInvalid } from '../components/url_invalid';
import { useInvitePageRefreshed } from '../use_invite';
import { getInvalidReason } from '../utils';

const LinkInvalid: FC<React.PropsWithChildren<unknown>> = () => {
  const { whenPageRefreshed } = useInvitePageRefreshed({ type: 'linkInvite' });
  const inviteLinkInfo = useAppSelector((state: IReduxState) => state.invite.inviteLinkInfo);

  useMount(() => {
    whenPageRefreshed();
  });

  if (!inviteLinkInfo) return null;
  const { code, message } = inviteLinkInfo;
  return <UrlInvalid reason={getInvalidReason(code, message)} />;
};

export default LinkInvalid;
