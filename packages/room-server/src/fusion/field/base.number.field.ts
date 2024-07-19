import { ApiTipConstant, IField } from '@apitable/core';
import { BaseField } from 'fusion/field/base.field';
import { isNumber } from 'lodash';
import { IFieldValue } from 'shared/interfaces';

export abstract class BaseNumberField extends BaseField {
  override validate(fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    if (fieldValue === null) return;
    if (!isNumber(fieldValue) || Number.isNaN(fieldValue)) {
      this.throwException(field, ApiTipConstant.api_param_number_field_type_error, extra);
    }
  }
}
