import { ApiTipConstant, ICellValue, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { FieldManager } from 'fusion/field.manager';
import { BaseField } from 'fusion/field/base.field';
import { IFieldValue } from 'shared/interfaces';

@Injectable()
export class CheckboxField extends BaseField implements OnApplicationBootstrap {
  override validate(fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    if (fieldValue === null) return;
    if (typeof fieldValue !== 'boolean') {
      this.throwException(field, ApiTipConstant.api_param_checkbox_field_type_error, extra);
    }
  }

  // eslint-disable-next-line require-await
  override async roTransform(fieldValue: IFieldValue, _field: IField): Promise<ICellValue> {
    if (fieldValue === false) return null;
    return true;
  }

  onApplicationBootstrap() {
    FieldManager.setService(CheckboxField.name, this);
  }
}
