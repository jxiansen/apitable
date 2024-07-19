

import { useMount } from 'ahooks';
import { FC } from 'react';
import { Events, IReduxState, Player } from '@apitable/core';
import { Loading } from 'pc/components/common';
import { useAppSelector } from 'pc/store/react-redux';
import { RecoverSpace } from './components/recover_space/recover_space';
import { SpaceInfo } from './space_info';

const SpaceCockpit: FC<React.PropsWithChildren<unknown>> = () => {
  const spaceInfo = useAppSelector((state: IReduxState) => state.space.curSpaceInfo);

  useMount(() => {
    Player.doTrigger(Events.space_setting_overview_shown);
  });

  if (!spaceInfo) {
    return <Loading />;
  }

  return spaceInfo.delTime ? <RecoverSpace /> : <SpaceInfo />;
};

export default SpaceCockpit;
