

import { ApiTipConstant, ICellValue, IField, SegmentType } from '@apitable/core';
import { isString } from 'class-validator';
import { BaseField } from 'fusion/field/base.field';
import { IFieldValue } from 'shared/interfaces';

export abstract class BaseTextField extends BaseField {
  override validate(fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    if (fieldValue === null) return;
    if (!isString(fieldValue)) {
      this.throwException(field, ApiTipConstant.api_param_singletext_field_type_error, extra);
    }
  }

  // eslint-disable-next-line require-await
  override async roTransform(fieldValue: IFieldValue, _field: IField): Promise<ICellValue> {
    return [
      {
        text: fieldValue!.toString(),
        type: SegmentType.Text,
      },
    ];
  }
}
