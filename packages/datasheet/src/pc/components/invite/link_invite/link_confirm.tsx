import { useMount } from 'ahooks';
import Image from 'next/image';
import { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@apitable/components';
import { ConfigConstant, Api, IReduxState, Navigation, StatusCode, StoreActions, Strings, t, ThemeName } from '@apitable/core';
import { Message, Wrapper } from 'pc/components/common';
import { HomeWrapper } from 'pc/components/home/home_wrapper';
import { Router } from 'pc/components/route_manager/router';
import { useQuery, useRequest } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { execNoTraceVerification, initNoTraceVerification } from 'pc/utils';
import { getEnvVariables } from 'pc/utils/env';
import inviteImageDark from 'static/icon/common/invitation_link_page_dark.png';
import inviteImageLight from 'static/icon/common/invitation_link_page_light.png';
import { InviteTitle } from '../components/invite_title';
import { useInvitePageRefreshed } from '../use_invite';

const LinkConfirm: FC<React.PropsWithChildren<unknown>> = () => {
  const dispatch = useDispatch();
  const [noTraceVerification, setNoTraceVerification] = useState<string | null>(null);
  const { whenPageRefreshed } = useInvitePageRefreshed({ type: 'linkInvite' });
  const query = useQuery();
  const inviteLinkInfo = useAppSelector((state: IReduxState) => state.invite.inviteLinkInfo);
  const inviteLinkToken = query.get('inviteLinkToken');
  const inviteCode = query.get('inviteCode') || undefined;
  const nodeId = query.get('nodeId');
  const shareId = query.get('shareId') || '';
  const { LOGIN_ON_AUTHORIZATION_REDIRECT_TO_URL, INVITE_USER_BY_AUTH0, IS_ENTERPRISE } = getEnvVariables();
  const themeName = useAppSelector((state) => state.theme);

  const InviteImage = themeName === ThemeName.Light ? inviteImageLight : inviteImageDark;

  const { loading, run: join } = useRequest(
    function (linkToken, nodeId, data = '') {
      return Api.joinViaSpace(linkToken, nodeId, data);
    },
    {
      onSuccess: function (res: any, params: any[]) {
        const { success, code } = res.data;
        if (success) {
          Router.push(Navigation.WORKBENCH, { params: { spaceId: inviteLinkInfo!.data.spaceId, nodeId: shareId }, clearQuery: true });
          dispatch(StoreActions.updateInviteLinkInfo(null));
          dispatch(StoreActions.updateErrCode(null));
        } else if (code === StatusCode.UN_AUTHORIZED) {
          if (LOGIN_ON_AUTHORIZATION_REDIRECT_TO_URL) {
            const redirectUri = `${location.pathname}?inviteLinkToken=${inviteLinkToken}&inviteCode=${inviteCode}&nodeId=${nodeId}&inviteLinkData=${params[2]}`;
            location.href = `${LOGIN_ON_AUTHORIZATION_REDIRECT_TO_URL}${redirectUri}`;
            return;
          }
          if (INVITE_USER_BY_AUTH0) {
            const urlParams = new URLSearchParams(window.location.search);
            const info = {
              inviteLinkInfo,
              linkToken: inviteLinkToken,
              inviteLinkData: params[2],
              inviteCode: urlParams.get('inviteCode'),
            };
            localStorage.setItem('invite_link_data', JSON.stringify(info));
            Router.push(Navigation.WORKBENCH);
            return;
          }
          Router.push(Navigation.INVITE, {
            params: { invitePath: 'link/login' },
            query: { inviteLinkToken: inviteLinkToken!, inviteCode, nodeId, inviteLinkData: params[2] },
          });
        } else {
          window.location.reload();
        }
        return;
      },
      onError: function () {
        Message.error({ content: t(Strings.error) });
      },
      manual: true,
    },
  );

  useMount(() => {
    whenPageRefreshed();
    initNoTraceVerification(setNoTraceVerification, ConfigConstant.CaptchaIds.LOGIN);
  });

  const confirmBtn = () => {
    execNoTraceVerification((data) => {
      join(inviteLinkToken, nodeId, data);
    });
  };
  if (!inviteLinkInfo) {
    return null;
  }

  return IS_ENTERPRISE ? (
    <Wrapper>
      <div className="invite-children-center">
        <span style={{ marginBottom: '24px' }}>
          <Image src={InviteImage} alt={t(Strings.link_failure)} width={240} height={180} />
        </span>
        <InviteTitle inviter={inviteLinkInfo.data.memberName} spaceName={inviteLinkInfo.data.spaceName} titleMarginBottom="40px" />
        <Button onClick={confirmBtn} color="primary" size="large" style={{ width: '220px' }} loading={loading} disabled={loading}>
          {t(Strings.confirm_join)}
        </Button>
      </div>
    </Wrapper>
  ) : (
    <HomeWrapper>
      <div className="invite-children-center">
        <span style={{ marginBottom: '24px' }}>
          <Image src={InviteImage} alt={t(Strings.link_failure)} width={240} height={180} />
        </span>
        <InviteTitle inviter={inviteLinkInfo.data.memberName} spaceName={inviteLinkInfo.data.spaceName} titleMarginBottom="40px" />
        <Button onClick={confirmBtn} color="primary" size="large" style={{ width: '220px' }} loading={loading} disabled={loading}>
          {t(Strings.confirm_join)}
        </Button>
      </div>
    </HomeWrapper>
  );
};

export default LinkConfirm;
