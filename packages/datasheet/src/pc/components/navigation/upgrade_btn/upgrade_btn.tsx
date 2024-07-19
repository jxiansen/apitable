

import classNames from 'classnames';
import { FC } from 'react';
import { getLanguage, Strings, t } from '@apitable/core';
import { Star2Filled } from '@apitable/icons';
import styles from './style.module.less';

interface IUpgradeBtnProps {
  onClick: () => void;
}

export const UpgradeBtn: FC<React.PropsWithChildren<IUpgradeBtnProps>> = ({ onClick }) => {
  const isZhCN = getLanguage() === 'zh-CN';
  return (
    <div className={styles.stickyUpgrade} style={{ height: isZhCN ? undefined : 120 }}>
      <div className={styles.stickyUpgradeContent} onClick={onClick}>
        <Star2Filled />
        <span className={classNames(styles.stickyUpgradeText, { rotate: !isZhCN })}>{t(Strings.upgrade_pure)}</span>
      </div>
    </div>
  );
};
