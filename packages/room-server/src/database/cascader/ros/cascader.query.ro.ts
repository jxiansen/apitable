
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ApiTipConstant } from '@apitable/core';
import { stringToArray } from 'shared/helpers/fusion.helper';
import { Transform } from 'class-transformer';

export class CascaderQueryRo {
  @ApiProperty({
    type: String,
    description: 'View ID',
    example: 'viw****',
  })
  @IsNotEmpty({ message: ApiTipConstant.api_params_empty_error })
  linkedViewId!: string;

  @ApiPropertyOptional({
    type: [String],
    example: 'fld***, fld***',
    description: 'Field IDs',
  })
  @Transform(value => stringToArray(value), { toClassOnly: true })
  linkedFieldIds!: string[];
}
