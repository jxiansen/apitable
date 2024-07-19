

import {
  Field,
  FieldType,
  getFieldClass,
  getFieldTypeByString,
  getNewId,
  IAddFieldOptions,
  IAddOpenFieldProperty,
  IDPrefix,
  IField,
  IReduxState,
} from '@apitable/core';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FieldCreateRo {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Field name',
    example: 'field name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Field type',
    example: '',
  })
  @IsString()
  type: string;

  /**
   * In Lookup field, `filterInfo.conditions[*].fieldType` is not required.
   */
  @ApiPropertyOptional({
    type: Object,
    required: false,
    example: '',
    description: 'Field property',
  })
  @IsOptional()
  property?: IAddOpenFieldProperty | null;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  transferToCommandData(): IAddFieldOptions {
    const fieldType = getFieldTypeByString(this.type as any)!;
    const fieldInfo = {
      id: getNewId(IDPrefix.Field),
      name: this.name,
      type: fieldType,
      property: getFieldClass(fieldType).defaultProperty(),
    } as IField;
    const fieldContext = Field.bindContext(fieldInfo, {} as IReduxState);
    const property = fieldContext.addOpenFieldPropertyTransformProperty(this.property!) || null;
    return {
      data: {
        name: this.name,
        type: fieldType,
        property,
      },
      index: undefined as any,
    };
  }

  foreignDatasheetId(): string | null {
    const fieldType = getFieldTypeByString(this.type as any)!;
    if ((fieldType === FieldType.Link || fieldType === FieldType.OneWayLink) && this.property) {
      return this.property['foreignDatasheetId'];
    }
    return null;
  }
}
