import { CascaderLinkedField } from '../models/cascader.link.field';
import { CascaderChildren } from '../models/cascader.children';
import { ApiProperty } from '@nestjs/swagger';

export class CascaderVo {
  @ApiProperty({
    type: [CascaderLinkedField],
    description: 'Field Information',
  })
  linkedFields!: CascaderLinkedField[];

  @ApiProperty({
    type: [CascaderChildren],
    description: 'Cell Value Tree',
  })
  treeSelects!: CascaderChildren[];
}
