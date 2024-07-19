import { IRecordCellValue, IRecordMeta } from '@apitable/core';
import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

/**
 * Workbench-Datasheet Record
 */
@Entity('datasheet_record')
export class DatasheetRecordEntity extends BaseEntity {
  @Column({
    name: 'record_id',
    nullable: true,
    comment: 'record ID',
    length: 50,
  })
  recordId!: string;

  @Column({
    name: 'dst_id',
    nullable: true,
    comment: 'datasheet ID(related#datasheet#dst_id)',
    length: 50,
  })
  dstId!: string;

  @Column('json', {
    name: 'data',
    nullable: true,
    comment: 'data recorded by a line (corresponding to each field)',
  })
  data?: IRecordCellValue;

  @Column({
    name: 'revision_history',
    nullable: true,
    comment: 'revisions of the original operations, sorted by revision, indices are revisions of the record',
    length: 5000,
    default: () => '0',
  })
  revisionHistory?: string;

  @Column({
    name: 'revision',
    nullable: true,
    comment: 'revision',
    unsigned: true,
    default: () => 0,
  })
  revision!: number;

  @Column('json', {
    name: 'field_updated_info',
    nullable: true,
    comment: 'field(cell) update information',
  })
  recordMeta?: IRecordMeta;
}
