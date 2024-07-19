

import { ApiProperty } from '@nestjs/swagger';
import { ChangesetBaseDto } from 'database/datasheet/dtos/changeset.base.dto';
import { CommentDto } from 'database/datasheet/dtos/comment.dto';
import { CommentReplyDto } from 'database/datasheet/dtos/comment.reply.dto';
import { CommentEmojiDto } from './comment.emoji.dto';
import { UnitInfoDto } from '../../../unit/dtos/unit.info.dto';

export class RecordHistoryDto {
  @ApiProperty({
    type: [ChangesetBaseDto],
    description: 'changeset list',
  })
  changesets!: ChangesetBaseDto[];

  @ApiProperty({
    type: [CommentDto],
    description: 'comment involved units\'s list',
  })
  units!: UnitInfoDto[];

  @ApiProperty({
    type: [CommentEmojiDto],
    description: 'comment\'s emojis',
  })
  emojis!: CommentEmojiDto;

  @ApiProperty({
    type: [CommentReplyDto],
    description: 'comment\'s quote information',
  })
  commentReplyMap!: CommentReplyDto;
}

