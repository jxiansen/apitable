import { useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { CheckboxFilled, UncheckedOutlined } from '@apitable/icons';

import styles from './checkbox.module.less';

interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  size?: number;
}

export const Checkbox = React.memo((props: ICheckboxProps) => {
  const colors = useThemeColors();
  const { checked: propsChecked, disabled, onChange, size = 16 } = props;
  const [checked, setChecked] = useState(propsChecked);
  const [hover, setHover] = useState(false);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const next = !checked;
      if (onChangeRef.current) {
        onChangeRef.current(next);
      } else {
        setChecked(!checked);
      }
    },
    [checked, disabled],
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled) {
      return;
    }
    setHover(true);
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    if (disabled) {
      return;
    }
    setHover(false);
  }, [disabled]);

  useEffect(() => {
    setChecked(propsChecked);
  }, [propsChecked]);

  return (
    <span
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.wrap}
      data-disabled={!!disabled}
    >
      {checked ? (
        <CheckboxFilled size={size} color={disabled ? colors.fourthLevelText : colors.textBrandDefault} />
      ) : (
        <UncheckedOutlined size={size} color={disabled ? colors.fourthLevelText : hover ? colors.primaryColor : colors.black[400]} />
      )}
    </span>
  );
});
