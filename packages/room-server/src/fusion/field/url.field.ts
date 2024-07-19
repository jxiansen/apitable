

import { ApiTipConstant, ICellValue, IField, IHyperlinkSegment, SegmentType } from '@apitable/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { isObject } from 'class-validator';
import { FieldManager } from 'fusion/field.manager';
import { BaseTextField } from 'fusion/field/base.text.field';
import { isString } from 'lodash';
import { ApiException } from 'shared/exception';
import { IFieldValue } from 'shared/interfaces';

@Injectable()
export class UrlField extends BaseTextField implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    FieldManager.setService(UrlField.name, this);
  }

  // eslint-disable-next-line require-await
  override async roTransform(fieldValue: IFieldValue, _field: IField): Promise<ICellValue> {
    if (fieldValue == null) {
      return null;
    }
    if (isString(fieldValue)) {
      return [
        {
          text: fieldValue!.toString(),
          type: SegmentType.Text,
        },
      ];
    }
    const cellValue: IHyperlinkSegment = {
      link: fieldValue['text'],
      text: fieldValue['text'],
      title: fieldValue['title'],
      type: SegmentType.Url,
      favicon: fieldValue['favicon']
    };
    return [cellValue];
  }

  override validate(fieldValue: IFieldValue, field: IField) {
    if (fieldValue === null) return;
    if (isObject(fieldValue)) {
      if (!fieldValue['text']) {
        throw ApiException.tipError(ApiTipConstant.api_params_instance_error, { property: field.name, value: 'text' });
      }
      return;
    }
    if (!isString(fieldValue)) {
      throw ApiException.tipError(ApiTipConstant.api_param_url_field_type_error, { field: field.name });
    }
  }
}
