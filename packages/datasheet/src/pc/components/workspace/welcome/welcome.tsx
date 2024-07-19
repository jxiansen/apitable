

import { FC } from 'react';
import { shallowEqual } from 'react-redux';
import { IReduxState } from '@apitable/core';
import { ComponentDisplay, ScreenSize } from 'pc/components/common/component_display';
import { MobileBar } from 'pc/components/mobile_bar';
import { CreateDatasheet } from 'pc/components/workspace/welcome/components/create_datasheet/create_datasheet';
import { Guide } from 'pc/components/workspace/welcome/components/guide/guide';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
// @ts-ignore
import { ChatWelcome } from 'enterprise/chat_welcome/chat_welcome';

export const Welcome: FC<React.PropsWithChildren<unknown>> = () => {
  const { treeNodesMap, rootId } = useAppSelector(
    (state: IReduxState) => ({
      treeNodesMap: state.catalogTree.treeNodesMap,
      rootId: state.catalogTree.rootId,
      user: state.user.info,
    }),
    shallowEqual,
  );
  const spaceId = useAppSelector((state) => state.space.activeId);

  if (!treeNodesMap[rootId] || !spaceId) {
    return <></>;
  }

  const hasChildren = treeNodesMap[rootId].hasChildren;
  return (
    <>
      {
        <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
          <MobileBar />
        </ComponentDisplay>
      }
      {hasChildren ? (getEnvVariables().IS_AITABLE ? <ChatWelcome /> : <Guide/>) : <CreateDatasheet />}
    </>
  );
};
