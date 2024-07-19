

import * as React from 'react';
import { IFormulaField, Field, BasicValueType, FormulaBaseError } from '@apitable/core';
import { IBaseEditorProps } from 'pc/components/editors/interface';
import { CellCheckbox } from 'pc/components/multi_grid/cell/cell_checkbox';
import { CellText } from 'pc/components/multi_grid/cell/cell_text';
import { useComputeCellValue } from 'pc/hooks/use_cellvalue';
import styles from '../field_editor/style.module.less';
import expandRecordStyles from '../style.module.less';

export const ExpandFormula: React.FC<React.PropsWithChildren<IBaseEditorProps & { recordId: string }>> = (props) => {
  const { recordId } = props;
  const field = props.field as IFormulaField;
  const cellValue = useComputeCellValue({
    recordId,
    field,
  });

  const isCheckbox = Field.bindModel(field).basicValueType === BasicValueType.Boolean;

  if (isCheckbox && !(cellValue instanceof FormulaBaseError)) {
    return <CellCheckbox className={expandRecordStyles.expandFormulaCheckbox} cellValue={cellValue as boolean} field={field} />;
  }
  return <CellText className={styles.expandCellText} cellValue={cellValue as any} field={field} />;
};
