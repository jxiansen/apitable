import { ApiTipConstant, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { BaseField } from 'fusion/field/base.field';
import { IFieldValue } from 'shared/interfaces';
import { FieldManager } from '../field.manager';
import { IFieldValidatorInterface } from '../i.field.validator.interface';

@Injectable()
export class NotSupportField extends BaseField implements OnApplicationBootstrap, IFieldValidatorInterface {
  override validate(_fieldValue: IFieldValue, field: IField): void {
    this.throwException(field, ApiTipConstant.api_param_default_error);
  }

  onApplicationBootstrap() {
    FieldManager.setService(NotSupportField.name, this);
  }
}
