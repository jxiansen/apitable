import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

/**
 * Workbench-Datasheet Record archive
 */
@Entity('datasheet_record_archive')
export class DatasheetRecordArchiveEntity extends BaseEntity {
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

  @Column({
    name: 'is_archived',
    comment: 'whether it is archived(0: no, 1: yes)',
    unsigned: true,
    default: () => false,
  })
  isArchived!: boolean;

  @Column('bigint', {
    name: 'archived_by',
    comment: 'ID of use who last archived id',
  })
  archivedBy!: string;

  @Column('timestamp', {
    name: 'archived_at',
    comment: 'archived time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  archivedAt!: Date;
}
