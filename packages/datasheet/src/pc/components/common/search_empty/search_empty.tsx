import Image from 'next/image';
import { FC } from 'react';
import { ThemeName } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import NotDataImgDark from 'static/icon/datasheet/empty_state_dark.png';
import NotDataImgLight from 'static/icon/datasheet/empty_state_light.png';
import styles from './style.module.less';

export const SearchEmpty: FC<React.PropsWithChildren<unknown>> = () => {
  const themeName = useAppSelector((state) => state.theme);
  const SearchImage = themeName === ThemeName.Light ? NotDataImgLight : NotDataImgDark;
  return (
    <div className={styles.searchEmpty}>
      <span className={styles.img}>
        <Image src={SearchImage} alt={t(Strings.no_search_result)} width={150} height={113} />
      </span>
      <span>{t(Strings.no_search_result)}</span>
    </div>
  );
};
