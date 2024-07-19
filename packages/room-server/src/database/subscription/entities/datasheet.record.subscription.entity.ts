

import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * Workbench-Datasheet Record Subscription
 */
@Entity('datasheet_record_subscription')
export class DatasheetRecordSubscriptionEntity extends BaseEntity {
  @PrimaryColumn('bigint')
  override id!: string;

  @Column({
    name: 'dst_id',
    nullable: false,
    comment: 'datasheet ID(related#datasheet#dst_id)',
    length: 50,
  })
  dstId!: string;

  @Column({
    name: 'mirror_id',
    nullable: true,
    comment: 'mirror ID',
    length: 50,
  })
  mirrorId?: string;

  @Column({
    name: 'record_id',
    nullable: false,
    comment: 'record ID(related#datasheet_record#record_id)',
    length: 50,
  })
  recordId!: string;

  @Column('bigint', {
    name: 'created_by',
    nullable: true,
    comment: 'creator ID(subscriber)',
  })
  override createdBy!: string;

  @Column('timestamp', {
    name: 'created_at',
    comment: 'created time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  override createdAt!: Date;
}
