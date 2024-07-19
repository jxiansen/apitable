

import { AutomationActionTypeEntity } from '../entities/automation.action.type.entity';
import { EntityRepository, In, Repository } from 'typeorm';
import { ActionTypeBaseInfoDto } from '../dtos/action.type.dto';

@EntityRepository(AutomationActionTypeEntity)
export class AutomationActionTypeRepository extends Repository<AutomationActionTypeEntity> {

  public async selectByActionTypeIds(actionTypeIds: string[]): Promise<ActionTypeBaseInfoDto[]> {
    return await this.find({
      select: ['actionTypeId', 'inputJSONSchema', 'outputJSONSchema', 'endpoint', 'serviceId'],
      where: {
        isDeleted: 0,
        actionTypeId: In(actionTypeIds),
      }
    }) as ActionTypeBaseInfoDto[];
  }

}
