import { ApiTipConstant, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { isString } from 'class-validator';
import { BaseTextField } from 'fusion/field/base.text.field';
import { IFieldValue } from 'shared/interfaces';
import { FieldManager } from '../field.manager';

@Injectable()
export class PhoneField extends BaseTextField implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    FieldManager.setService(PhoneField.name, this);
  }

  override validate(fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    if (fieldValue === null) return;
    if (!isString(fieldValue)) {
      this.throwException(field, ApiTipConstant.api_param_phone_field_type_error, extra);
    }
  }
}
