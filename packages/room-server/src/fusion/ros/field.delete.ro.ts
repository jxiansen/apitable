

import { ApiTipConstant, Conversion } from '@apitable/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

export class FieldDeleteRo {

  @ApiProperty({
    type: String,
    required: false,
    description: '',
    example: ''
  })
  @IsOptional()
  @IsEnum(Conversion, { message: ApiTipConstant.api_params_invalid_value })
  conversion?: Conversion;

}