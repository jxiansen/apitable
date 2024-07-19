import { useMount } from 'ahooks';
import cls from 'classnames';
import { usePostHog } from 'posthog-js/react';
import { FC } from 'react';
import { Events, IReduxState, Player, TrackEvents } from '@apitable/core';
import { SideWrapper } from 'pc/components/route_manager/side_wrapper';
import { usePageParams, useQuery, useRequest, useUserRequest } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { ComponentDisplay, ScreenSize } from '../common/component_display';
import { MobileSideBar } from '../mobile_side_bar';
// @ts-ignore
import { isDingtalkSkuPage } from 'enterprise/home/social_platform/utils';
//  @ts-ignore
import { WecomContactWrapper } from 'enterprise/wecom/wecom_contact_wrapper/wecom_contact_wrapper.tsx';
import styles from './style.module.less';

const TemplateCentre: FC<React.PropsWithChildren<unknown>> = (props) => {
  const { getLoginStatusReq } = useUserRequest();
  const spaceId = useAppSelector((state: IReduxState) => state.space.activeId);
  const { run: getLoginStatus, loading } = useRequest(getLoginStatusReq, { manual: true });
  const query = useQuery();
  const purchaseToken = query.get('purchaseToken') || '';
  const isSkuPage = isDingtalkSkuPage?.(purchaseToken);
  const posthog = usePostHog();
  usePageParams();

  useMount(() => {
    if (!spaceId) {
      getLoginStatus();
    }
    Player.doTrigger(Events.template_center_shown);
    posthog?.capture(TrackEvents.TemplatePageView);
  });

  if (loading) {
    return null;
  }

  const childComponent = spaceId ? (
    <SideWrapper>
      <div className={styles.bg} data-height="20px" />
      <div className={cls(styles.templateCentre, styles.wrapper)}>{props.children}</div>
    </SideWrapper>
  ) : (
    <>
      {!isSkuPage && (
        <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
          <MobileSideBar />
        </ComponentDisplay>
      )}
      <div className={styles.templateCentre}>{props.children}</div>
    </>
  );

  return <>{WecomContactWrapper ? <WecomContactWrapper>{childComponent}</WecomContactWrapper> : childComponent}</>;
};

export default TemplateCentre;
