

import { ApiTipConstant, FieldKeyEnum } from '@apitable/core';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ArrayNotEmpty, IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { FieldUpdateRo } from './record.field.update.ro';

export class RecordUpdateRo {
  @ApiProperty({
    type: [FieldUpdateRo],
    required: true,
    description: 'Need to modify the data corresponding column and data',
    example: [
      {
        recordId: 'recrHnjVuH6Fd',
        fields: {
          Currency: 5.53,
          Select: 'Select 1',
        },
      },
      {
        recordId: 'recwZ6yV3Srv3',
        fields: {
          Currency: 5.53,
          Select: 'Select 2',
        },
      },
    ],
  })
  @Type(() => FieldUpdateRo)
  @ArrayNotEmpty({ message: ApiTipConstant.api_params_empty_error })
  @ValidateNested()
  records!: FieldUpdateRo[];

  @ApiPropertyOptional({
    enum: FieldKeyEnum,
    description: '[Optional], what the fields map is made of key. id or name, default is name',
    default: FieldKeyEnum.NAME,
  })
  @IsOptional()
  @IsEnum(FieldKeyEnum, { message: ApiTipConstant.api_params_invalid_value })
  fieldKey: FieldKeyEnum = FieldKeyEnum.NAME;

  @Expose()
  getRecordIds() {
    return this.records.map(record => record.recordId);
  }
}
