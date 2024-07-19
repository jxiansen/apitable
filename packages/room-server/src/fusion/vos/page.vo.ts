

import { ApiProperty } from '@nestjs/swagger';
import { ApiRecordDto } from '../dtos/api.record.dto';
import { ApiPage } from './api.page';

export class PageVo extends ApiPage<ApiRecordDto[]> {
  @ApiProperty({ type: [ApiRecordDto] })
  override records!: ApiRecordDto[];

  @ApiProperty({
    type: Number,
    example: 500,
    description: 'Total number of records',
  })
  override total!: number;

  @ApiProperty({
    type: Number,
    example: 100,
    description: 'Total number of records returned per page',
  })
  override pageSize!: number;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'Page numbering for pagination',
  })
  override pageNum!: number;
}
