import { ApiTipConstant, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { FieldManager } from 'fusion/field.manager';
import { IFieldValue } from 'shared/interfaces';
import { BaseField } from './base.field';

@Injectable()
export class WorkDocField extends BaseField implements OnApplicationBootstrap {
  constructor() {
    super();
  }

  onApplicationBootstrap(): any {
    FieldManager.setService(WorkDocField.name, this);
  }

  override validate(fieldValues: IFieldValue, field: IField) {
    if (fieldValues === null) return;
    this.throwException(field, ApiTipConstant.api_params_workdoc_can_not_operate);
  }
}
