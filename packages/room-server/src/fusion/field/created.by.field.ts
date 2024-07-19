import { ApiTipConstant, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { BaseUnEditableField } from 'fusion/field/base.un.editable.field';
import { IFieldValue } from 'shared/interfaces';
import { FieldManager } from '../field.manager';

@Injectable()
export class CreatedByField extends BaseUnEditableField implements OnApplicationBootstrap {
  onApplicationBootstrap(): any {
    FieldManager.setService(CreatedByField.name, this);
  }

  override validate(_fieldValue: IFieldValue, field: IField) {
    this.throwException(field, ApiTipConstant.api_params_createdby_can_not_operate);
  }
}
