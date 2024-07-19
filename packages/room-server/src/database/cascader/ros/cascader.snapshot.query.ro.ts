
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { stringToArray } from 'shared/helpers/fusion.helper';

export class CascaderSnapshotQueryRo {

  @ApiProperty({
    type: [String],
    description: 'linked field id',
  })
  @Transform(value => stringToArray(value), { toClassOnly: true })
  @IsOptional()
  linkedFieldIds!: string[];
}
