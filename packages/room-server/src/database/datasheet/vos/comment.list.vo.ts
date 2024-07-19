import { ApiProperty } from '@nestjs/swagger';
import { CommentDto } from '../dtos/comment.dto';
import { UnitInfoDto } from '../../../unit/dtos/unit.info.dto';

export class CommentListVo {
  @ApiProperty({
    type: [CommentDto],
    description: 'record comment list',
  })
  comments!: CommentDto[];

  @ApiProperty({
    type: [CommentDto],
    description: 'list of units involved in record comments',
  })
  units!: UnitInfoDto[];
}
