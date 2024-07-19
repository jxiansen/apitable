import { FormulaBaseError, IFormulaField, ILookUpField, Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export interface IComputeCVProps {
  recordId: string;
  field: IFormulaField | ILookUpField;
}

export const useComputeCellValue = (props: IComputeCVProps) => {
  const { recordId, field } = props;
  const datasheetId = field.property.datasheetId;
  const cv = useAppSelector((state) => {
    const snapshot = Selectors.getSnapshot(state, datasheetId)!;
    try {
      return Selectors.getCellValue(state, snapshot, recordId, field.id, true);
    } catch (e) {
      const message = e instanceof FormulaBaseError ? e : new FormulaBaseError('');
      return message;
    }
  });
  return cv;
};
