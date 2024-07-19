

import { AutomationServiceEntity } from '../entities/automation.service.entity';
import { EntityRepository, In, Repository } from 'typeorm';
import { OFFICIAL_SERVICE_SLUG } from 'automation/events/helpers/trigger.event.helper';
import { ServiceBaseUrlDto, ServiceInfoDto } from '../dtos/service.dto';

@EntityRepository(AutomationServiceEntity)
export class AutomationServiceRepository extends Repository<AutomationServiceEntity> {

  public async countOfficialServiceByServiceId(serviceId: string): Promise<number> {
    return await this.count({
      where: {
        serviceId: serviceId,
        slug: OFFICIAL_SERVICE_SLUG,
      }
    });
  }

  public async countServiceByServiceIdAndSlug(serviceId: string, slug: string): Promise<number> {
    return await this.count({
      where: {
        serviceId: serviceId,
        slug: slug,
      }
    });
  }

  public async selectBaseUrlsByServiceIds(serviceIds: string[]): Promise<ServiceBaseUrlDto[]> {
    return await this.find({
      select: ['serviceId', 'baseUrl'],
      where: {
        serviceId: In(serviceIds),
      }
    });
  }

  public async selectServiceByServiceIds(serviceIds: string[]): Promise<ServiceInfoDto[]> {
    return await this.find({
      select: ['serviceId', 'name', 'logo', 'slug', 'i18n'],
      where: {
        serviceId: In(serviceIds),
        isDeleted: false,
      }
    });
  }

}
