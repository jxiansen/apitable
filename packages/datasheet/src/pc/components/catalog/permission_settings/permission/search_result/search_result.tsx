import Image from 'next/image';
import { FC } from 'react';
import { ThemeName } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import NotDataImgDark from 'static/icon/datasheet/empty_state_dark.png';
import NotDataImgLight from 'static/icon/datasheet/empty_state_light.png';
import styles from './style.module.less';

export interface ISearchResultProps {
  isEmpty?: boolean;
}

export const SearchResult: FC<React.PropsWithChildren<ISearchResultProps>> = ({ isEmpty, children }) => {
  const themeName = useAppSelector((state) => state.theme);
  const NotDataImg = themeName === ThemeName.Light ? NotDataImgLight : NotDataImgDark;
  if (isEmpty) {
    return (
      <div className={styles.notData}>
        <span style={{ marginTop: 40 }}>
          <Image src={NotDataImg} alt={t(Strings.no_search_result)} width={160} height={120} />
        </span>
        <div className={styles.tip}>{t(Strings.no_search_result)}</div>
      </div>
    );
  }

  return <div className={styles.searchResult}>{children}</div>;
};
