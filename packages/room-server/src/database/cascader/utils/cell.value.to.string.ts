

import { Field, ICellValue, IRecord } from '@apitable/core';

export interface IFieldMethods {
  [_: string]: Field;
}

export const getText = (record: IRecord, fieldId: string, fieldMethods: IFieldMethods): string => {
  const cellValue = record.data[fieldId];
  return fieldMethods[fieldId]!.cellValueToString(cellValue!)!;
};

export const getTextByCellValue = (cellValue: ICellValue, fieldId: string, fieldMethods: IFieldMethods): string => {
  return fieldMethods[fieldId]!.cellValueToString(cellValue!)!;
};
