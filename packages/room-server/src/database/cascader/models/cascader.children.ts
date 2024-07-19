import { ApiProperty } from '@nestjs/swagger';

export class CascaderChildren {
  @ApiProperty({
    type: String,
    description: 'Cell Value',
    example: 'text',
  })
  text!: string;

  @ApiProperty({
    type: String,
    description: 'Field ID',
    example: 'fld***',
  })
  linkedFieldId!: string;

  @ApiProperty({
    type: String,
    description: 'Record ID',
    example: 'rec***',
  })
  linkedRecordId!: string;

  @ApiProperty({
    type: () => [CascaderChildren],
    description: 'Children',
    example:
      '[' +
      '{"text":"level2-1", "linkedFieldId":"fld***", "linkedRecordId":"rec***", "children":[' +
      '{"text":"level3-1", "linkedFieldId":"fld***", "linkedRecordId":"rec***", "children":[' +
      '{"text":"level4-1", "linkedFieldId":"fld***", "linkedRecordId":"rec***", "children":[]' +
      ']}]}]',
  })
  children!: CascaderChildren[];
}
