
import { ApiTipConstant } from '@apitable/core';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CascaderSnapshotPutRo {
  @ApiProperty({
    type: String,
    example: 'dst***',
    description: 'Datasheet ID',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error }})
  linkedDatasheetId!: string;

  @ApiProperty({
    type: String,
    example: 'viw***',
    description: 'View ID',
  })
  @IsNotEmpty({ context: { tipId: ApiTipConstant.api_params_empty_error }})
  linkedViewId!: string;
}
