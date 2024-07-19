

import debounce from 'lodash/debounce';
import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { IDateTimeField, Selectors } from '@apitable/core';
import { CheckboxEditor } from 'pc/components/editors/checkbox_editor';
import { IEditor } from 'pc/components/editors/interface';
import { ViewFilterContext } from 'pc/components/tool_bar/view_filter/view_filter_context';
import { useAppSelector } from 'pc/store/react-redux';
import { IFilterCheckboxProps } from '../interface';
import styles from './style.module.less';

export const FilterCheckbox: React.FC<React.PropsWithChildren<Omit<IFilterCheckboxProps, 'execute'>>> = (props) => {
  const { condition, onChange, field, disabled } = props;
  const datasheetId = useAppSelector((state) => Selectors.getActiveDatasheetId(state))!;
  const checkboxRef = useRef<IEditor>(null);
  const { isViewLock } = useContext(ViewFilterContext);
  const checkBoxDisabled = isViewLock || disabled;

  useEffect(() => {
    checkboxRef.current!.onStartEdit(condition.value != null ? condition.value : null);
    // eslint-disable-next-line
  }, []);

  const debounceCommandNumberFn = debounce((value: boolean) => {
    onChange(value);
  }, 500);

  function commandNumberFn(value: boolean) {
    debounceCommandNumberFn(value);
  }

  return (
    <div className={styles.checkboxContainer}>
      <CheckboxEditor
        style={{ boxShadow: 'none', opacity: isViewLock ? 0.5 : 1, cursor: isViewLock ? 'not-allowed' : 'pointer' }}
        ref={checkboxRef}
        editable={!checkBoxDisabled}
        editing
        width={160}
        datasheetId={datasheetId}
        height={35}
        field={field as IDateTimeField}
        commandFn={commandNumberFn}
      />
    </div>
  );
};
