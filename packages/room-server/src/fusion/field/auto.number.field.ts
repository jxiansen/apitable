

import { ApiTipConstant, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { BaseUnEditableField } from 'fusion/field/base.un.editable.field';
import { IFieldValue } from 'shared/interfaces';
import { FieldManager } from '../field.manager';

@Injectable()
export class AutoNumberField extends BaseUnEditableField implements OnApplicationBootstrap {
  onApplicationBootstrap(): any {
    FieldManager.setService(AutoNumberField.name, this);
  }

  override validate(_fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    this.throwException(field, ApiTipConstant.api_params_automumber_can_not_operate, extra);
  }
}
