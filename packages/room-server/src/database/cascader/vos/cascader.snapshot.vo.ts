

import { ApiProperty } from '@nestjs/swagger';
import { CascaderChildren } from '../models/cascader.children';

export class CascaderSnapshotVo {
  @ApiProperty({
    type: [CascaderChildren],
    description: 'Cascader Snapshot',
  })
  treeSelectNodes!: CascaderChildren[];
}
