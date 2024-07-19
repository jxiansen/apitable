

import { IJsonSchema } from '@apitable/core';
import { IUiSchema } from '../actions/interface/base.action';

export interface IActionTypeDetailVo {
  actionTypeId: string,
  name: string,
  description: string,
  endpoint: string,
  inputJsonSchema: { schema: IJsonSchema, uiSchema: IUiSchema },
  outputJsonSchema: IJsonSchema,
  service: {
    serviceId: string,
    name: string,
    logo?: string,
    themeLogo: { light: string, dark?: string },
    slug: string
  }
}