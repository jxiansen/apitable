import { ApiTipConstant, DEFAULT_TIME_ZONE, ICellValue, IField } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { isISO8601 } from 'class-validator';
import { BaseField } from 'fusion/field/base.field';
import { isNumber } from 'lodash';
import { DateTime } from 'luxon';
import { IFieldValue } from 'shared/interfaces';
import { FieldManager } from '../field.manager';

@Injectable()
export class DateTimeField extends BaseField implements OnApplicationBootstrap {
  override validate(fieldValue: IFieldValue, field: IField, extra?: { [key: string]: string }) {
    if (fieldValue === null) return;
    // Time String
    if (DateTime.fromSQL(fieldValue.toString()).isValid) {
      return;
    }
    // Verify the number
    if (isNumber(fieldValue) && !Number.isNaN(fieldValue) && DateTime.fromMillis(fieldValue).isValid) {
      return;
    }
    this.throwException(field, ApiTipConstant.api_param_datetime_field_type_error, extra);
  }

  // eslint-disable-next-line require-await
  override async roTransform(fieldValue: IFieldValue, _field: IField): Promise<ICellValue> {
    if (isISO8601(fieldValue, { strict: true, strictSeparator: true })) {
      return new Date(fieldValue as string).getTime();
    }
    const date = DateTime.fromISO(fieldValue!.toString(), {
      zone: DEFAULT_TIME_ZONE,
    });
    if (date.isValid) {
      return date.toMillis();
    }
    return new Date(fieldValue as number).valueOf();
  }

  onApplicationBootstrap() {
    FieldManager.setService(DateTimeField.name, this);
  }
}
