import { FC } from 'react';
import { Alert } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { getEnvVariables } from 'pc/utils/env';
import styles from './style.module.less';

export const InviteAlert: FC<React.PropsWithChildren<unknown>> = () => {
  if (getEnvVariables().IS_SELFHOST || getEnvVariables().IS_APITABLE) {
    return null;
  }
  return <Alert type="default" className={styles.inviteAlert} content={t(Strings.invite_give_capacity_intro)} />;
};
