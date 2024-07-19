

import { useMount } from 'ahooks';
import { FC } from 'react';
import { Events, Player, Strings, t } from '@apitable/core';
import { ScrollBar } from 'pc/components/scroll_bar';
import { PermissionDesc } from './permission_desc';
import styles from './style.module.less';

export const Workbench: FC<React.PropsWithChildren<unknown>> = () => {
  useMount(() => {
    Player.doTrigger(Events.space_setting_workbench_shown);
  });

  return (
    <div className={styles.workbenchInSpace}>
      <ScrollBar>
        <div className={styles.scrollWrapper}>
          <h1 className={styles.pageTitle}>{t(Strings.workbench_setting)}</h1>
          <h2 className={styles.pageDesc}>{t(Strings.workbench_instruction_of_all_member_setting_and_node_permission)}</h2>
          <div className={styles.perDescWrap}>
            <PermissionDesc />
          </div>
        </div>
      </ScrollBar>
    </div>
  );
};
