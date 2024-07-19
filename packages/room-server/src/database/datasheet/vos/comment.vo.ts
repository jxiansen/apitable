import { ApiProperty } from '@nestjs/swagger';
import { ApiResponse } from 'fusion/vos/api.response';
import { CommentDto } from '../dtos/comment.dto';
import { CommentListVo } from 'database/datasheet/vos/comment.list.vo';

export class CommentVo extends ApiResponse<CommentListVo> {
  @ApiProperty({
    type: [CommentDto],
    description: 'record comment list',
  })
  override data!: CommentListVo;
}
