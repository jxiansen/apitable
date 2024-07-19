import { UnitTeamEntity } from '../entities/unit.team.entity';
import { EntityRepository, In, Repository } from 'typeorm';
import { UnitTeamBaseInfoDto } from '../dtos/unit.team.base.info.dto';

/**
 * Operations on table `unit_team`
 *
 * @author Zoe zheng
 * @date 2020/7/30 4:09 PM
 */
@EntityRepository(UnitTeamEntity)
export class UnitTeamRepository extends Repository<UnitTeamEntity> {
  public async selectTeamsByIdsIncludeDeleted(teamIds: number[]): Promise<UnitTeamBaseInfoDto[]> {
    return (await this.find({
      select: ['id', 'teamName', 'isDeleted'],
      where: {
        id: In(teamIds),
      },
    })) as UnitTeamBaseInfoDto[];
  }

  public async selectIdBySpaceIdAndName(spaceId: string, teamName: string): Promise<{ id: string } | undefined> {
    return await this.findOne({ select: ['id'], where: { teamName, spaceId, isDeleted: false } });
  }

  selectCountBySpaceIdAndId(id: string, spaceId: string): Promise<number> {
    return this.count({ where: { id, spaceId, isDeleted: false } });
  }

  /**
   * get team(id, parentId) by spaceId
   */
  public async selectTeamsBySpaceId(spaceId: string): Promise<UnitTeamEntity[]> {
    return (await this.find({ select: ['id', 'groupId'], where: { spaceId, isDeleted: false } })) as UnitTeamEntity[];
  }
}
