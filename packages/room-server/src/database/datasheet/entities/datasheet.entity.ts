

import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

/**
 * Workbench-Datasheet
 */
@Entity('datasheet')
export class DatasheetEntity extends BaseEntity {
  @Column({
    name: 'dst_id',
    nullable: true,
    unique: true,
    comment: 'datasheet ID',
    length: 50,
  })
  dstId?: string;

  @Column({
    name: 'node_id',
    nullable: true,
    comment: 'node ID (association#node#node_id)',
    length: 50,
  })
  nodeId?: string;

  @Column({
    name: 'dst_name',
    nullable: true,
    comment: 'datasheet name',
    length: 255,
  })
  dstName!: string;

  @Column({
    name: 'space_id',
    nullable: true,
    comment: 'space ID(related#space#space_id)',
    length: 50,
  })
  spaceId?: string;

  @Column({
    name: 'creator',
    nullable: true,
    comment: 'creator ID',
  })
  creator?: string;

  @Column({
    name: 'revision',
    nullable: true,
    comment: 'revision',
    unsigned: true,
    default: () => 0,
    type: 'bigint',
    width: 20,
  })
  revision!: number;
}
