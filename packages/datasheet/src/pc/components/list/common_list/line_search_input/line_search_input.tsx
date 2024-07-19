

import classNames from 'classnames';
import * as React from 'react';
import { stopPropagation, useThemeColors } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { CloseCircleFilled, SearchOutlined } from '@apitable/icons';
import styles from './style.module.less';

interface ILineSearchInputProps {
  value?: string;
  size?: 'large' | 'small' | 'default';
  placeholder?: string;
  className?: string;
  showCloseIcon?: boolean;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>): void;
  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
  style?: React.CSSProperties;
  allowClear?: boolean;
  onClear?(): void;
}

export const LineSearchInputBase: React.ForwardRefRenderFunction<{}, ILineSearchInputProps> = (props, ref) => {
  const colors = useThemeColors();
  const { onChange, value, onKeyDown, className, onFocus, size = 'default', placeholder, style, onClear, allowClear } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current!.focus();
      },
    };
  });

  const handleClear = () => {
    if (!allowClear) {
      return;
    }
    if (onClear && typeof onClear === 'function') {
      onClear();
      inputRef.current?.focus();
    }
  };
  return (
    <div
      className={classNames(
        'lineSearchInput',
        styles.lineSearchInput,
        {
          [styles[size]]: true,
        },
        className,
      )}
      style={style}
    >
      <span className={styles.prefixIcon}>
        <SearchOutlined color={colors.fourthLevelText} size={16} />
      </span>
      <input
        type="text"
        ref={inputRef}
        onFocus={onFocus}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={placeholder || t(Strings.search)}
        size={1}
      />
      <span
        className={styles.suffixIcon}
        onClick={(e) => {
          stopPropagation(e);
          handleClear();
        }}
      >
        {Boolean(value) && allowClear && <CloseCircleFilled color={colors.fourthLevelText} />}
      </span>
    </div>
  );
};

export const LineSearchInput = React.forwardRef(LineSearchInputBase);
