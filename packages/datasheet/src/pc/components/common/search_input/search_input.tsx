

import { InputProps } from 'antd/lib/input';
import classnames from 'classnames';
import * as React from 'react';
import { FC, useRef } from 'react';
import { TextInput } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { CloseCircleFilled, SearchOutlined } from '@apitable/icons';
import { KeyCode } from 'pc/utils';
import styles from './style.module.less';

interface ISearchInput extends InputProps {
  keyword: string;
  change: React.Dispatch<React.SetStateAction<string>>;
  onClose?: () => void;
}

export const SearchInput: FC<React.PropsWithChildren<ISearchInput>> = (props) => {
  const inputRef = useRef<any>(null);
  const { change, onClose, className, ...rest } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    change(val);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === KeyCode.Esc) {
      onClose && onClose();
    }
  };

  const clearKeyword = (e: React.MouseEvent) => {
    myStopPropagation(e);
    if (props.keyword === '') {
      onClose && onClose();
    } else {
      change('');
      inputRef.current && inputRef.current.focus();
    }
  };

  const myStopPropagation = (e: React.MouseEvent<any>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <TextInput
      block
      prefix={<SearchOutlined />}
      ref={inputRef}
      className={classnames(className, styles.searchInput)}
      value={props.keyword}
      placeholder={t(Strings.search_field)}
      onClick={myStopPropagation}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      suffix={
        props.keyword && (
          <span onClick={clearKeyword}>
            <CloseCircleFilled className={styles.closeBtn} />
          </span>
        )
      }
      {...(rest as any)}
    />
  );
};
