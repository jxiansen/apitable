import classnames from 'classnames';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { ISelectFieldOption, Selectors, ThemeName } from '@apitable/core';
// eslint-disable-next-line no-restricted-imports
import { Tooltip } from 'pc/components/common';
import { setColor } from 'pc/components/multi_grid/format';
import { useAppSelector } from 'pc/store/react-redux';
import { COLOR_INDEX_THRESHOLD } from 'pc/utils';
import styles from './style.module.less';

interface IOptionTagProps {
  option: ISelectFieldOption;
  style?: React.CSSProperties;
  className?: string;
  ellipsis?: boolean;
}

export const OptionTag: React.FC<React.PropsWithChildren<IOptionTagProps>> = (props) => {
  const colors = useThemeColors();
  const cacheTheme = useAppSelector(Selectors.getTheme);
  const { option, style = {}, className, ellipsis = true } = props;
  // Dark colors with a transparency of 0.8 or 1 should be replaced with white fonts
  const optionNameColor = cacheTheme === ThemeName.Dark ? colors.staticWhite0 : option.color >= COLOR_INDEX_THRESHOLD ? colors.defaultBg : 'inherit';

  return (
    <div className={classnames(styles.itemContainer, className)} style={{ background: setColor(option.color, cacheTheme), ...style }}>
      <Tooltip title={option.name} textEllipsis>
        <span className={classnames(styles.itemName, ellipsis && styles.itemNameEllipsis)} style={{ color: optionNameColor }}>
          {option.name}
        </span>
      </Tooltip>
    </div>
  );
};
