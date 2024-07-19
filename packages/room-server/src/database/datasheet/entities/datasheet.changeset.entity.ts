import { IOperation } from '@apitable/core';
import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

/**
 * Workbench-Digital table operation change collection table
 */
@Entity('datasheet_changeset')
export class DatasheetChangesetEntity extends BaseEntity {
  @Column({
    name: 'message_id',
    nullable: true,
    comment: 'Unique identifier of a changeset request',
    length: 255,
  })
  messageId?: string;

  @Column({
    name: 'dst_id',
    nullable: true,
    comment: 'datasheet ID',
    length: 50,
  })
  dstId?: string;

  @Column({
    name: 'member_id',
    nullable: true,
    comment: 'Operating member ID (associated#organization_member#ID)',
  })
  memberId?: string;

  @Column('json', {
    name: 'operations',
    nullable: true,
    comment: 'Operation Action collection',
  })
  operations?: IOperation[];

  @Column({
    name: 'revision',
    nullable: true,
    comment: 'revision',
    unsigned: true,
    default: () => 0,
  })
  revision!: number;
}
