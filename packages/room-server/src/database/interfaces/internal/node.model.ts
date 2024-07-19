

import { INodeMeta, IPermissions, Role } from '@apitable/core';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FieldPermissionMap } from './datasheet.model';

export class NodeInfo implements INodeMeta {
  id!: string;
  name!: string;
  description!: string;
  parentId!: string;
  icon!: string;
  nodeShared!: boolean;
  nodePermitSet!: boolean;
  revision!: number;
  spaceId!: string;
  role!: Role;
  permissions!: IPermissions;
  nodeFavorite!: boolean;
  extra?: any;
  isGhostNode?: boolean;
  nodePrivate!: boolean;
}

export class NodeBaseInfo {
  @ApiProperty()
    id!: string;
  @ApiProperty()
    nodeName!: string;
  @ApiProperty()
    icon!: string;
  @ApiPropertyOptional()
    revision?: number;
  @ApiProperty()
    parentId!: string;
}

export class NodeDetailInfo extends FieldPermissionMap {
  node!: NodeInfo;
}
