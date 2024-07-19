

import { useContext } from 'react';
import { EditorContext } from '../../context';
import { hotkeyMap } from '../../hotkeys/map';
import Icons from '../icons';

import styles from './style.module.less';

export const useListWithIcons = (list: Array<string>) => {
  const { i18nText } = useContext(EditorContext);
  return list.map((item) => {
    const key = item;
    const label = i18nText[key] ?? key;
    const Icon = Icons[key];
    return {
      value: key,
      label,
      option: (
        <span className={styles.iconAndLabel}>
          <span className={styles.iconWrap}>
            <Icon />
          </span>
          {label}
        </span>
      ),
    };
  });
};

export const useListWithIconAndHotkey = (list: Array<string>) => {
  const { i18nText } = useContext(EditorContext);
  return list.map((item) => {
    const key = item;
    const label = i18nText[key] ?? key;
    const Icon = Icons[key];
    return {
      value: key,
      label,
      option: (
        <span className={styles.iconAndHotkeyWrap}>
          <span className={styles.iconAndLabel}>
            <span className={styles.iconWrap}>
              <Icon />
            </span>
            {label}
          </span>
          <span className={styles.hotkey}>{hotkeyMap[key] && hotkeyMap[key].platform}</span>
        </span>
      ),
    };
  });
};
