

import classNames from 'classnames';
import { Fragment, useState, ReactNode, useEffect } from 'react';
import { useResponsive } from 'pc/hooks';
import { ScreenSize } from '../component_display';
import { Tooltip } from '../tooltip';
import styles from './style.module.less';

export interface IRateProps {
  value: number | null;
  disabled?: boolean;
  character: ReactNode;
  max: number;
  onChange?: (value: number | null) => void;
}

export function Rate(props: IRateProps) {
  const { value: _value, max, character, onChange, disabled } = props;
  const value = Number.isFinite(_value) ? _value! : 0;

  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);

  const getTransValue = () => {
    const hasValue = Boolean(value);
    if (hasValue) {
      const v = Math.round(value);
      if (v >= max) return max;
      return v;
    }
    return 0;
  };
  // Scoring figures converted from other cells, possibly as floating point numbers
  const transValue = getTransValue();
  const [pendingValue, setPendingValue] = useState(transValue);
  const handleClick = (newValue: number) => {
    if (isMobile) return;
    if (!disabled && onChange) {
      // Double click on the original rating to clear the rating
      if (value === newValue) {
        onChange(null);
      } else {
        onChange(newValue);
      }
    }
  };
  const handleMouseOver = (v: number) => {
    if (isMobile) return;
    !disabled && v > value && setPendingValue(v);
  };
  useEffect(() => {
    setPendingValue(transValue);
  }, [transValue]);

  const transMax = disabled ? transValue + 1 : max + 1;
  return (
    <div className={styles.rate} onMouseOut={() => setPendingValue(value)}>
      {[...Array(transMax).keys()].splice(1).map((item) => {
        let willChecked = false;
        const checked = item <= transValue;
        const unChecked = item <= max && item > transValue;
        if (pendingValue > transValue) willChecked = item > transValue && item <= pendingValue;
        if (pendingValue < transValue) willChecked = item <= transValue && item > pendingValue;
        const classname = classNames(
          {
            [styles.checked]: checked,
            [styles.unChecked]: unChecked,
            [styles.willChecked]: willChecked,
          },
          styles.character,
        );
        const Wrapper = disabled ? Fragment : Tooltip;
        const wrapperProps: any = disabled ? {} : { title: item, placement: 'top' };
        return (
          <Wrapper key={item} {...wrapperProps}>
            <span onMouseDown={() => handleClick(item)} onMouseOver={() => handleMouseOver(item)} className={classname}>
              {character}
            </span>
          </Wrapper>
        );
      })}
    </div>
  );
}
