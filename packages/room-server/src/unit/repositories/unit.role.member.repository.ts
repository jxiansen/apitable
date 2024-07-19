

import { EntityRepository, In, Repository } from 'typeorm';
import { UnitRoleMemberEntity } from 'unit/entities/unit.role.member.entity';

@EntityRepository(UnitRoleMemberEntity)
export class UnitRoleMemberRepository extends Repository<UnitRoleMemberEntity> {

  /**
   * select unit role members by role Ids
   * @param roleIds unit ref ids
   *  */
  public async selectByRoleIds(roleIds: number[]): Promise<UnitRoleMemberEntity[]> {
    return await this.find({
      where: {
        roleId: In(roleIds),
      },
    });
  }

}
