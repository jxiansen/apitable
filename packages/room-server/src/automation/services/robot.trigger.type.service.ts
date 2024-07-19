import { Injectable } from '@nestjs/common';
import { AutomationTriggerTypeRepository } from '../repositories/automation.trigger.type.repository';
import { IServiceSlugTriggerTypeVo } from '../vos/service.slug.trigger.type.vo';
import { AutomationServiceRepository } from '../repositories/automation.service.repository';
import { getTypeByItem } from '../utils';

@Injectable()
export class RobotTriggerTypeService {
  constructor(
    private readonly automationTriggerTypeRepository: AutomationTriggerTypeRepository,
    private readonly automationServiceRepository: AutomationServiceRepository,
  ) {}

  public async getServiceSlugToTriggerTypeId(endpoints: string[], serviceSlug: string): Promise<IServiceSlugTriggerTypeVo> {
    const triggerTypeServiceRelDtos = await this.automationTriggerTypeRepository.getTriggerTypeServiceRelByEndPoints(endpoints);
    const triggerTypes: {
      triggerTypeId: string;
      endpoint: string;
      serviceSlug: string;
    }[] = [];
    for (const triggerTypeServiceRelDto of triggerTypeServiceRelDtos) {
      const number = await this.automationServiceRepository.countServiceByServiceIdAndSlug(triggerTypeServiceRelDto.serviceId, serviceSlug);
      if (number > 0) {
        triggerTypes.push({
          triggerTypeId: triggerTypeServiceRelDto.triggerTypeId,
          endpoint: triggerTypeServiceRelDto.endpoint!,
          serviceSlug: serviceSlug,
        });
      }
    }
    return triggerTypes.reduce((serviceSlugToTriggerTypeId, item) => {
      const triggerSlug = `${item.endpoint}@${item.serviceSlug}`;
      serviceSlugToTriggerTypeId[triggerSlug] = item.triggerTypeId;
      return serviceSlugToTriggerTypeId;
    }, {} as IServiceSlugTriggerTypeVo);
  }

  /**
   * Get all the trigger types info.
   *
   * There is an optimizing place: cache the result in memory.
   * @param lang  the triggers' language version
   */
  public async getTriggerType(lang = 'zh') {
    const triggerTypes = await this.automationTriggerTypeRepository.selectAllTriggerType();

    const serviceIds = new Set<string>();
    triggerTypes.forEach((triggerType) => serviceIds.add(triggerType.serviceId));
    const services = await this.automationServiceRepository.selectServiceByServiceIds([...serviceIds]);
    const serviceIdToServiceMap = services.reduce((acc, item) => {
      acc[item.serviceId] = item;
      return acc;
    }, {});

    const triggerTypeDetails = triggerTypes.map((triggerType) => {
      const service = serviceIdToServiceMap[triggerType.serviceId];
      return {
        ...triggerType,
        inputJsonSchema: triggerType.inputJSONSchema,
        outputJsonSchema: triggerType.outputJSONSchema,
        serviceName: service.name,
        serviceLogo: service.logo,
        serviceSlug: service.slug,
        serviceI18n: service.i18n,
      };
    });

    return triggerTypeDetails.map((triggerType) => {
      return getTypeByItem(triggerType, lang, 'trigger');
    });
  }
}
