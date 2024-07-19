

import { ApiProperty } from '@nestjs/swagger';

export class CascaderLinkedField {
  @ApiProperty({
    type: String,
    description: 'Field ID',
    example: 'fld***',
  })
  id!: string;

  @ApiProperty({
    type: String,
    description: 'Field Name',
    example: 'Title',
  })
  name!: string;

  @ApiProperty({
    type: Number,
    description: 'Field Type',
    example: '1',
  })
  type!: number;
}
