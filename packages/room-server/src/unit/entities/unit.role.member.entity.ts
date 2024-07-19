import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('unit_role_member')
export class UnitRoleMemberEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({
    name: 'role_id',
    nullable: true,
    comment: 'team ID(related#role#id)',
    width: 20,
    type: 'bigint',
  })
  roleId?: number;

  @Column({
    name: 'unit_type',
    nullable: false,
    comment: 'unit type(1: department, 2: tag, 3:member)',
    width: 2,
    type: 'tinyint',
  })
  unitType!: number;

  @Column({
    name: 'unit_ref_id',
    nullable: false,
    comment: 'organization unit association ID',
    width: 20,
    type: 'bigint',
  })
  unitRefId!: number;
}
