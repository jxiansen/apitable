

import { IAddOpenFieldProperty } from '@apitable/core';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DatasheetFieldCreateRo {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Field Name',
    example: 'field name',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Field type',
    example: '',
  })
  @IsString()
  type!: string;

  @ApiPropertyOptional({
    type: Object,
    required: false,
    example: '',
    description: 'Field property',
  })
  @IsOptional()
  property?: IAddOpenFieldProperty | null;
}
