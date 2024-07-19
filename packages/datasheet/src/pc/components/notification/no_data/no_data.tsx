

import Image from 'next/image';
import { FC } from 'react';
import { ThemeName } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import EmptyPngDark from 'static/icon/datasheet/empty_state_dark.png';
import EmptyPngLight from 'static/icon/datasheet/empty_state_light.png';
import styles from './style.module.less';

export const NoData: FC<React.PropsWithChildren<unknown>> = () => {
  const themeName = useAppSelector((state) => state.theme);
  const EmptyPng = themeName === ThemeName.Light ? EmptyPngLight : EmptyPngDark;
  return (
    <div className={styles.invalidMsg}>
      <div className={styles.img}>
        <Image src={EmptyPng} alt="empty" />
      </div>
      <div className={styles.text}>{t(Strings.no_notification)}</div>
    </div>
  );
};
