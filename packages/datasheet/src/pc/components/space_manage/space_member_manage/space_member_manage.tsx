import { useMount } from 'ahooks';
import { FC, useState } from 'react';
// import { useAppSelector, shallowEqual } from 'react-redux';
import SplitPane from 'react-split-pane';
import {
  // IReduxState,
  IMemberInfoInSpace,
  Player,
  Events,
} from '@apitable/core';
// import { EditMemberModal, ChangeMemberTeam, AddMember } from './modal';
import { Loading } from './loading';
import { TeamInfo } from './team_info';
import { TeamTree } from './team_tree';
import styles from './style.module.less';

const _SplitPane: any = SplitPane;

export const SpaceMemberManage: FC<React.PropsWithChildren<unknown>> = () => {
  const [rightLoading, setRightLoading] = useState(false);
  const [searchMemberRes, setSearchMemberRes] = useState<IMemberInfoInSpace[]>([]);
  useMount(() => {
    Player.doTrigger(Events.space_setting_member_manage_shown);
  });

  return (
    <div className={styles.memberManageWrapper}>
      {
        <_SplitPane minSize={199} maxSize={800} defaultSize={199} className={styles.spaceMemberSplit}>
          <TeamTree setSearchMemberRes={(data) => setSearchMemberRes(data)} setRightLoading={setRightLoading} />
          {rightLoading ? (
            <div className={styles.loading}>
              <Loading />
            </div>
          ) : (
            <TeamInfo searchMemberRes={searchMemberRes} setSearchMemberRes={setSearchMemberRes} />
          )}
        </_SplitPane>
      }
    </div>
  );
};
