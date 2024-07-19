import { IMeta } from '@apitable/core';
import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

/**
 * Workbench-Datasheet Meta
 */
@Entity('datasheet_meta')
export class DatasheetMetaEntity extends BaseEntity {
  @Column({
    name: 'dst_id',
    nullable: true,
    comment: 'datasheet ID(related#datasheet#dst_id)',
    length: 50,
  })
  dstId?: string;

  @Column('json', {
    name: 'meta_data',
    nullable: true,
    comment: 'meta data',
  })
  metaData?: IMeta;

  @Column('bigint', {
    name: 'revision',
    comment: 'revision',
    unsigned: true,
    default: () => 0,
  })
  revision!: number;
}
