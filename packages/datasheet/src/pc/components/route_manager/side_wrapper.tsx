import { values } from 'lodash';
import * as React from 'react';
import { useEffect } from 'react';
import { IReduxState, StoreActions } from '@apitable/core';
import { ShortcutActionManager, ShortcutActionName } from 'modules/shared/shortcut_key';
import { ComponentDisplay, ScreenSize } from 'pc/components/common/component_display';
import { MobileSideBar } from 'pc/components/mobile_side_bar';
import { Navigation } from 'pc/components/navigation';
import styles from 'pc/components/route_manager/style.module.less';
import { ShortcutsPanel } from 'pc/components/shortcuts_panel';
import { useQuery } from 'pc/hooks';
import { useAppDispatch } from 'pc/hooks/use_app_dispatch';
import { useAppSelector } from 'pc/store/react-redux';
import { useWxTitleMap } from '../konva_grid';
// @ts-ignore
import { isDingtalkSkuPage } from 'enterprise/home/social_platform/utils';
// @ts-ignore
import { WatermarkWrapper } from 'enterprise/watermark/watermark_wrapper';
// @ts-ignore
import { WecomContactWrapper } from 'enterprise/wecom/wecom_contact_wrapper/wecom_contact_wrapper';

export const SideWrapper = (props: { children: any }) => {
  const spaceId = useAppSelector((state: IReduxState) => state.space.activeId);
  const dispatch = useAppDispatch();
  const shortcutKeyPanelVisible = useAppSelector((state: IReduxState) => state.space.shortcutKeyPanelVisible);
  const query = useQuery();
  const purchaseToken = query.get('purchaseToken') || '';
  const isSkuPage = isDingtalkSkuPage?.(purchaseToken);
  const user = useAppSelector((state: IReduxState) => state.user.info);
  const { unitTitleMap } = useWxTitleMap({
    userNames: user
      ? [
          {
            name: user.memberName,
            unitId: user.unitId,
          },
        ]
      : undefined,
  });
  const unitTitle = values(unitTitleMap)[0];

  useEffect(() => {
    if (!spaceId) return;
    dispatch(StoreActions.getSpaceInfo(spaceId));
  }, [dispatch, spaceId]);

  useEffect(() => {
    const eventBundle = new Map([
      [
        ShortcutActionName.Help,
        () => {
          dispatch(StoreActions.setShortcutKeyPanelVisible(!shortcutKeyPanelVisible));
        },
      ],
    ]);
    eventBundle.forEach((cb, key) => {
      ShortcutActionManager.bind(key as any, cb);
    });

    return () => {
      eventBundle.forEach((_cb, key) => {
        ShortcutActionManager.unbind(key);
      });
    };
  });

  const scrollFix = (e: React.UIEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const isWorkbench = window.location.pathname.startsWith('/workbench');

  const childComponent = (
    <div className={'layout-row f-g-1 ' + styles.spaceContainer} onScroll={scrollFix}>
      {!isSkuPage && (
        <>
          <ComponentDisplay minWidthCompatible={ScreenSize.md}>{!isWorkbench && <Navigation />}</ComponentDisplay>

          <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
            <MobileSideBar />
          </ComponentDisplay>
        </>
      )}

      {props.children}

      {!isSkuPage && shortcutKeyPanelVisible && <ShortcutsPanel />}
    </div>
  );

  const wrapperChildComponent = (
    <>{WatermarkWrapper ? <WatermarkWrapper unitTitle={unitTitle}>{childComponent}</WatermarkWrapper> : childComponent}</>
  );

  return <>{WecomContactWrapper ? <WecomContactWrapper>{wrapperChildComponent}</WecomContactWrapper> : wrapperChildComponent}</>;
};
