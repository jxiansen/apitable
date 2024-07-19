

import { ApiTipConstant } from '@apitable/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CascaderParam } from './cascader.param';

export class CascaderSnapshotParam extends CascaderParam {
  @ApiProperty({
    type: String,
    example: 'fld***',
    description: 'Field',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error }})
  fieldId!: string;
}

export class GetCascaderSnapshotParam{

  @ApiProperty({
    type: String,
    example: 'dst***',
    description: 'Datasheet ID',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error }})
  dstId!: string;

  @ApiProperty({
    type: String,
    example: 'fld***',
    description: 'Field',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error }})
  fieldId!: string;
}
