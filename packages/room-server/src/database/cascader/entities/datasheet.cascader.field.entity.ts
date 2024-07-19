import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'shared/entities/base.entity';
import { ILinkRecordData } from '../models/link.record.data';

@Entity('datasheet_cascader_field')
export class DatasheetCascaderFieldEntity extends BaseEntity {
  @Column({
    name: 'space_id',
    nullable: true,
    comment: 'Space ID',
    length: 50,
  })
  spaceId!: string;

  @Column({
    name: 'datasheet_id',
    nullable: true,
    comment: 'datasheet ID',
    length: 50,
  })
  datasheetId!: string;

  @Column({
    name: 'field_id',
    nullable: true,
    comment: 'Field ID',
    length: 50,
  })
  fieldId!: string;

  @Column('json', {
    name: 'linked_record_data',
    nullable: true,
    comment: 'the cascader source data',
  })
  linkedRecordData!: ILinkRecordData;

  @Column({
    name: 'linked_record_id',
    nullable: true,
    comment: 'the record where data from',
    length: 50,
  })
  linkedRecordId!: string;
}
