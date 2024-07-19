import debounce from 'lodash/debounce';
import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { useThemeColors } from '@apitable/components';
import { FieldType, IField, Selectors } from '@apitable/core';
import { ScreenSize } from 'pc/components/common/component_display';
import { IEditor } from 'pc/components/editors/interface';
import { NumberEditor } from 'pc/components/editors/number_editor';
import { ViewFilterContext } from 'pc/components/tool_bar/view_filter/view_filter_context';
import { useResponsive } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { IFilterNumberProps } from '../interface';
import styles from './style.module.less';

export const FilterNumber: React.FC<React.PropsWithChildren<Omit<IFilterNumberProps, 'execute'>>> = (props) => {
  const { condition, onChange, field, disabled } = props;
  const datasheetId = useAppSelector((state) => Selectors.getActiveDatasheetId(state))!;
  const numberRef = useRef<IEditor>(null);
  const defaultValue = condition.value;
  const { isViewLock } = useContext(ViewFilterContext);
  const color = useThemeColors();

  useEffect(() => {
    numberRef.current && numberRef.current.onStartEdit(defaultValue ? defaultValue[0] : null);
    // eslint-disable-next-line
  }, []);

  const debounceCommandNumberFn = debounce((value: string) => {
    onChange(value ? [value] : null);
  }, 500);

  function commandNumberFn(value: string) {
    debounceCommandNumberFn(value);
  }

  function getFieldTypeByProperty(field: IField) {
    const { formatType } = field.property;

    if (formatType === FieldType.Currency) {
      return FieldType.Currency;
    } else if (formatType === FieldType.Percent) {
      return FieldType.Percent;
    }
    return field.type;
  }

  const fieldType = getFieldTypeByProperty(field);
  const numberTypes = new Set([FieldType.Number, FieldType.Currency, FieldType.Percent, FieldType.AutoNumber]);

  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);
  const editorHeight = isMobile ? 48 : 40;

  return (
    <div className={styles.numberContainer}>
      {numberTypes.has(fieldType) && (
        <NumberEditor
          style={{
            color: color.thirdLevelText,
            cursor: isViewLock ? 'not-allowed' : 'pointer',
          }}
          ref={numberRef}
          editing
          isLeftTextAlign
          width={160}
          datasheetId={datasheetId}
          height={editorHeight}
          field={field}
          commandFn={commandNumberFn}
          disabled={isViewLock || disabled}
        />
      )}
    </div>
  );
};
