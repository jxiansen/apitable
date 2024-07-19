

import { AutomationTriggerTypeEntity } from '../entities/automation.trigger.type.entity';
import { EntityRepository, In, Repository } from 'typeorm';
import { ITriggerTypeServiceRelDto, TriggerInputJsonSchemaDto, TriggerTypeDetailDto } from '../dtos/trigger.type.dto';

@EntityRepository(AutomationTriggerTypeEntity)
export class AutomationTriggerTypeRepository extends Repository<AutomationTriggerTypeEntity> {

  getTriggerTypeServiceRelByEndPoints(endpoints: string[]): Promise<ITriggerTypeServiceRelDto[]>{
    return this.find({
      select: [
        'serviceId', 'triggerTypeId', 'endpoint'
      ],
      where: {
        endpoint: In(endpoints),
        isDeleted: 0,
      }
    });
  }

  getTriggerTypeServiceRelByEndPoint(endpoint: string): Promise<ITriggerTypeServiceRelDto[]>{
    return this.find({
      select: [
        'serviceId', 'triggerTypeId'
      ],
      where: {
        endpoint: endpoint,
        isDeleted: 0,
      }
    });
  }

  public async selectAllTriggerType(): Promise<TriggerTypeDetailDto[]> {
    return await this.find({
      select: [
        'triggerTypeId',
        'name',
        'description',
        'endpoint',
        'i18n',
        'inputJSONSchema',
        'outputJSONSchema',
        'serviceId',
      ],
      where: {
        isDeleted: false,
      }
    });
  }

  public async selectInputJsonSchemaById(triggerTypeId: string): Promise<TriggerInputJsonSchemaDto | undefined> {
    return await this.findOne({
      select: ['triggerTypeId', 'inputJSONSchema'],
      where: {
        isDeleted: 0,
        triggerTypeId,
      },
    });
  }
}
