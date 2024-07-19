import * as React from 'react';
import { Typography } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { MainAdmin } from 'pc/components/space_manage/main_admin';
import { SubAdmin } from 'pc/components/space_manage/sub_admin';
import styles from './style.module.less';

export const Manager: React.FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <div className={styles.managerContainer}>
      <Typography variant={'h1'}>{t(Strings.share_permisson_model_space_admin)}</Typography>
      <Typography className={styles.pageSubscribe} variant={'body2'}>
        {t(Strings.share_permisson_model_space_admin_tip)}
      </Typography>
      <MainAdmin />
      <SubAdmin />
    </div>
  );
};
