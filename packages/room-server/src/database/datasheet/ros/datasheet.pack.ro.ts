import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { stringToArray } from 'shared/helpers/fusion.helper';

export class DatasheetPackRo {
  @ApiPropertyOptional({
    type: [String],
    required: false,
    example: 'rec4zxfWB5uyM',
    description: 'If this parameter is included, the specified single record is returned.',
  })
  @IsOptional()
  @Transform((value) => stringToArray(value), { toClassOnly: true })
  recordIds?: string[];
}
