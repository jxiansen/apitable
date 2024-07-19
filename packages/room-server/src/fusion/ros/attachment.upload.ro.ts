import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AttachmentUploadRo {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

export class AttachmentParamRo {
  @ApiProperty({
    type: String,
    required: true,
    example: 'dst0Yj5aNeoHldqvf6',
    description: 'datasheet Id',
  })
  @IsString()
  dstId!: string;
}
