

import { useDebounceFn } from 'ahooks';
import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { useThemeColors } from '@apitable/components';
import { Selectors } from '@apitable/core';
import { IEditor } from 'pc/components/editors/interface';
import { RatingEditor } from 'pc/components/editors/rating_editor';
import { ViewFilterContext } from 'pc/components/tool_bar/view_filter/view_filter_context';
import { useAppSelector } from 'pc/store/react-redux';
import { IFilterNumberProps } from '../interface';
import styles from './style.module.less';

export const FilterRating: React.FC<React.PropsWithChildren<Omit<IFilterNumberProps, 'execute'>>> = (props) => {
  const { condition, onChange, disabled = false, field } = props;
  const colors = useThemeColors();
  const datasheetId = useAppSelector((state) => Selectors.getActiveDatasheetId(state))!;
  const numberRef = useRef<IEditor>(null);
  const { isViewLock: isViewLockOriginal } = useContext(ViewFilterContext);
  const isViewLock = isViewLockOriginal || disabled;

  useEffect(() => {
    numberRef.current!.onStartEdit(condition.value ? Number(condition.value[0]) : null);
    // eslint-disable-next-line
  }, []);

  const { run: commandNumberFn } = useDebounceFn(
    (value: number | null) => {
      onChange(value ? [value.toString()] : '');
    },
    { wait: 500 },
  );

  return (
    <div className={styles.ratingContainer}>
      <RatingEditor
        style={{
          height: '100%',
          boxShadow: 'none',
          background: colors.lowestBg,
          opacity: isViewLock ? 0.5 : 1,
          cursor: isViewLock ? 'not-allowed' : 'pointer',
        }}
        ref={numberRef}
        editable={!isViewLock}
        editing
        width={160}
        datasheetId={datasheetId}
        height={35}
        field={field}
        commandFn={commandNumberFn}
        filtering
      />
    </div>
  );
};
