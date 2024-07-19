import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { stringToArray } from 'shared/helpers/fusion.helper';

export class RecordDeleteRo {
  @ApiProperty({
    type: [String],
    required: true,
    description: 'The set of recordId to be deleted',
    example: 'recwZ6yV3Srv3',
  })
  @Transform((value) => stringToArray(value), { toClassOnly: true })
  @IsOptional()
  recordIds!: string[];
}

export class DeleteRecordParamRo {
  @ApiProperty({
    type: String,
    required: true,
    example: 'dst0Yj5aNeoHldqvf6',
    description: 'datasheet Id',
  })
  @IsString()
  dstId!: string;
}
