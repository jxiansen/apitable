

import { IResourceMeta, ResourceType } from '@apitable/core';
import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

/**
 * The metadata table corresponding to the resource, such as Form/Dashboard
 */
@Entity('resource_meta')
export class ResourceMetaEntity extends BaseEntity {
  @Column({
    name: 'resource_id',
    nullable: false,
    comment: 'resource ID(related#node#node_id)',
    length: 50,
  })
  resourceId!: string;

  @Column({
    name: 'resource_type',
    nullable: false,
    comment: 'resource type(0: datasheet, 1: form, 2: dashboard, 3: widget)',
    unsigned: true,
    default: () => 0,
  })
  resourceType!: ResourceType;

  @Column('json', {
    name: 'meta_data',
    nullable: true,
    comment: 'meta data',
  })
  metaData?: IResourceMeta;

  @Column('bigint', {
    name: 'revision',
    comment: 'revision',
    nullable: false,
    unsigned: true,
    default: () => 0,
  })
  revision!: number;
}
