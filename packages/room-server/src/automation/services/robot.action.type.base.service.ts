

import { AutomationActionTypeRepository } from '../repositories/automation.action.type.repository';
import { customActionTypeMetas } from '../actions/decorators/automation.action.decorator';
import { getTypeByItem } from '../utils';
import { AutomationServiceRepository } from '../repositories/automation.service.repository';
import { IActionTypeDetailVo } from '../vos/action.type.detail.vo';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class RobotActionTypeBaseService {

  getActionType(_lang = 'zh'): Promise<IActionTypeDetailVo[]> {
    return Promise.resolve([]);
  }
}

@Injectable()
export class RobotActionTypeService extends RobotActionTypeBaseService {

  constructor(
    private automationActionTypeRepository: AutomationActionTypeRepository,
    private automationServiceRepository: AutomationServiceRepository) {
    super();
  }

  override async getActionType(lang = 'zh'): Promise<IActionTypeDetailVo[]> {
    const result = [];
    const actionTypes = await this.automationActionTypeRepository.find({ where: { isDeleted: 0 }});
    for (const actionTypesKey in actionTypes) {
      const actionType = actionTypes[actionTypesKey];
      const service = await this.automationServiceRepository.findOne({
        where: { serviceId: actionType?.serviceId }
      });
      const actionTypeDetailVo = getTypeByItem({
        actionTypeId: actionType?.actionTypeId,
        name: actionType?.name,
        description: actionType?.description,
        endpoint: actionType?.endpoint,
        i18n: actionType?.i18n,
        inputJsonSchema: actionType?.inputJSONSchema,
        outputJsonSchema: actionType?.outputJSONSchema,
        serviceId: service?.serviceId,
        serviceName: service?.name,
        serviceLogo: service?.logo,
        serviceSlug: service?.slug,
        serviceI18n: service?.i18n,
      }, lang) as IActionTypeDetailVo;
      result.push(actionTypeDetailVo);
    }
    result.push(...customActionTypeMetas.values());
    return result;
  }
}