import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ApiTipConstant } from '@apitable/core';

export class CascaderParam {
  @ApiProperty({
    type: String,
    example: 'spc***',
    description: 'Space ID',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error } })
  spaceId!: string;

  @ApiProperty({
    type: String,
    example: 'dst***',
    description: 'Datasheet ID',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error } })
  dstId!: string;
}
