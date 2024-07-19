

import { IActionType, IJsonSchema } from '@apitable/core';
import { Md5 } from 'ts-md5';
import { IBaseAction, IUiSchema } from '../interface/base.action';

export const customActionMap = new Map<string, IBaseAction>();
export const customActionTypeMetas = new Map<string, IActionTypeMeta>();
export const customActionTypeMap = new Map<string, IActionType>();

interface IAutomationActionOption {
  themeLogo?: { light: string, dark?: string };
  description?: string;
}

interface IActionTypeMeta {
  actionTypeId: string,
  name: string,
  description: string,
  endpoint: string,
  inputJsonSchema: { schema: IJsonSchema, uiSchema: IUiSchema },
  outputJsonSchema: IJsonSchema,
  service: {
    serviceId: string,
    name: string,
    themeLogo: { light: string, dark?: string },
    slug: string
  }
}

// caat = custom automation action type
export const customActionNamePrefix = 'caat';

export function AutomationAction(name: string, option?: IAutomationActionOption): ClassDecorator {
  return (target) => {
    const nameHash = Md5.hashStr(name);
    const connectorActionTypeId = `${customActionNamePrefix}${nameHash}`;
    if (!customActionMap.has(nameHash)) {
      customActionTypeMap.set(connectorActionTypeId, {
        id: connectorActionTypeId,
        inputJSONSchema: { schema: target.prototype.getInputSchema(), uiSchema: target.prototype.getUISchema() },
        outputJSONSchema: target.prototype.getOutputSchema(),
        endpoint: 'endpoint',
        baseUrl: `action://${nameHash}`
      });
      customActionTypeMetas.set(connectorActionTypeId, {
        actionTypeId: connectorActionTypeId,
        name: name,
        description: option?.description ? option.description : '',
        endpoint: 'endpoint',
        inputJsonSchema: { schema: target.prototype.getInputSchema(), uiSchema: target.prototype.getUISchema() },
        outputJsonSchema: target.prototype.getOutputSchema(),
        service: {
          serviceId: `asv${nameHash}`,
          name: name,
          themeLogo: option?.themeLogo ? option.themeLogo : { light: 'space/2023/03/29/6e70cb7968cc482793459041c5eb56ca' },
          slug: nameHash
        }
      });
      const instance = new target.prototype.constructor();
      customActionMap.set(nameHash, instance);
    }
    return target;
  };
}