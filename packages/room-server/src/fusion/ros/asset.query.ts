

import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class AssetUploadQueryRo {
  @ApiPropertyOptional({
    type: Number,
    maximum: 20,
    default: 1,
    example: '1',
    description: 'Number of pre-signed URLs created (default is 1, maximum is 20)',
  })
  @IsInt()
  @Min(1)
  @Max(20)
  @IsOptional()
  @Type(() => Number)
  count?: number;
}
