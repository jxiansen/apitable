import { ApiProperty } from '@nestjs/swagger';
import { ApiResponse } from './api.response';
import { ListVo } from './list.vo';

export class RecordListVo extends ApiResponse<ListVo> {
  @ApiProperty({ type: ListVo })
  override data!: ListVo;
}

export class RecordIdListVo extends ApiResponse<string[]> {
  @ApiProperty({ type: [String] })
  override data!: string[];
}
