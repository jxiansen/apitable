

import { ApiTipConstant, IField } from '@apitable/core';
import { BaseField } from 'fusion/field/base.field';
import { IFieldValue } from 'shared/interfaces';

/**
 * Field base classes that do not support modification and writing
 */
export abstract class BaseUnEditableField extends BaseField {
  override validate(_fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    this.throwException(field, ApiTipConstant.api_params_can_not_operate, extra);
  }
}
