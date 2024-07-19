

import { CellFormatEnum, Field, ICellValue, IField } from '@apitable/core';
import { IFieldValidatorInterface } from 'fusion/i.field.validator.interface';
import { ApiException, ApiTipId } from 'shared/exception';
import { IFieldRoTransformOptions, IFieldValue, IFieldVoTransformOptions } from 'shared/interfaces';
import { IFieldTransformInterface } from '../i.field.transform.interface';

export abstract class BaseField implements IFieldTransformInterface, IFieldValidatorInterface {
  validate(fieldValue: IFieldValue, _field: IField, _extra?: { [key: string]: string }) {
    if (fieldValue === null) return;
  }

  // eslint-disable-next-line require-await
  async roTransform(fieldValue: IFieldValue, _field: IField, _options?: IFieldRoTransformOptions): Promise<ICellValue> {
    return fieldValue as ICellValue;
  }

  voTransform(cellValue: ICellValue, field: IField, { cellFormat, store }: IFieldVoTransformOptions): IFieldValue {
    if (cellFormat === CellFormatEnum.STRING) {
      return Field.bindContext(field, store!.getState()).cellValueToApiStringValue(cellValue);
    }
    return Field.bindContext(field, store!.getState()).cellValueToApiStandardValue(cellValue);
  }

  throwException(_field: IField, tipId: ApiTipId, extra?: { [key: string]: string }): never {
    throw ApiException.tipError(tipId, extra);
  }

  getSetFieldAttrChangesets(_datasheetId: string, _field: IField, _store: any, _extras?: { deleteBrotherField?: boolean }) {
    return null;
  }
}
