import { EntityRepository, In, Repository } from 'typeorm';
import { UnitTeamMemberRefEntity } from 'unit/entities/unit.team.member.ref.entity';

@EntityRepository(UnitTeamMemberRefEntity)
export class UnitTeamMemberRefRepository extends Repository<UnitTeamMemberRefEntity> {
  /**
   * select unit team member ref by teamIds
   *
   * @param teamIds
   * @returns
   */
  public async selectByTeamIds(teamIds: string[]): Promise<UnitTeamMemberRefEntity[]> {
    return await this.find({
      where: {
        teamId: In(teamIds),
      },
    });
  }
}
