import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('unit_team_member_rel')
export class UnitTeamMemberRefEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({
    name: 'team_id',
    nullable: true,
    comment: 'team ID(related#team#id)',
    width: 20,
    type: 'bigint',
  })
  teamId?: number;

  @Column({
    name: 'member_id',
    nullable: false,
    comment: 'member ID(related#member#id)',
    width: 20,
    type: 'bigint',
  })
  memberId!: number;
}
