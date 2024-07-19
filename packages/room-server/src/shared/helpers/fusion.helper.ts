import { ConfigConstant, IDPrefix } from '@apitable/core';
import { isJSON } from 'class-validator';
import { NodeTypeEnum } from 'shared/enums/node.enum';

/**
 * get datasheetId from url
 * @param url
 */
export const parseDstIdFromUrl = (url: string) => {
  let datasheetId;
  url.split('/').forEach((item) => {
    if (item.startsWith(IDPrefix.Table)) {
      datasheetId = item;
    }
  });
  return datasheetId;
};

/**
 * get spaceId from url
 * @param url
 */
export const parseSpaceIdFromUrl = (url: string) => {
  let spaceId;
  url.split('/').forEach((item) => {
    if (item.startsWith(IDPrefix.SPACE)) {
      spaceId = item;
    }
  });
  return spaceId;
};

export const getApiVersionFromUrl = (url: string) => {
  const urlArr = url.split('/');
  let version = 'v1';
  urlArr.map((value, index) => {
    if (value === 'fusion') {
      version = urlArr[index + 1]!;
    }
    if (value === 'nest') {
      version = urlArr[index + 1]!;
    }
  });
  return version;
};

export const isNull = (value: string) => {
  return value === 'null' || value === 'undefined' || value === '' || value === '{}';
};

export const stringToArray = (value: string) => {
  if (isNull(value)) return null;
  const valueArray = Array.isArray(value) ? value : value.split(',');
  return valueArray.filter((v) => !isNull(v));
};

export const integerStringToArray = (value: string) => {
  if (isNull(value)) return null;
  const valueArray = Array.isArray(value) ? value : value.split(',');
  return valueArray.filter((v) => !isNull(v)).map((v) => parseInt(v));
};

export const formulaToString = (value: string | string[]) => {
  return Array.isArray(value) ? value.join(',') : value;
};

export const objStringToArray = (value: string) => {
  if (isNull(value)) return null;
  const valueArray = Array.isArray(value) ? (value as any[]) : value.replace(/},/g, '}|').split('|');
  try {
    return valueArray.reduce<any[]>((pre, cur) => {
      if (isNull(cur)) return pre;
      if (isJSON(cur)) {
        pre.push(JSON.parse(cur));
      } else {
        pre.push(cur);
      }
      return pre;
    }, []);
  } catch (e) {
    return null;
  }
};

export const getAPINodeType = (nodeType: ConfigConstant.NodeType) => {
  const NODE_TYPE_MAP = {
    [ConfigConstant.NodeType.FOLDER]: NodeTypeEnum.Folder,
    [ConfigConstant.NodeType.DATASHEET]: NodeTypeEnum.Datasheet,
    [ConfigConstant.NodeType.FORM]: NodeTypeEnum.Form,
    [ConfigConstant.NodeType.DASHBOARD]: NodeTypeEnum.Dashboard,
    [ConfigConstant.NodeType.MIRROR]: NodeTypeEnum.Mirror,
    [ConfigConstant.NodeType.AUTOMATION]: NodeTypeEnum.Automation,
  };
  return NODE_TYPE_MAP[nodeType] || 'ERROR NODE TYPE';
};

export const getApiNodePermission = (role: string) => {
  const NODE_PERMISSION_MAP = {
    manager: 0,
    owner: 0,
    editor: 1,
    updater: 2,
    reader: 3,
  };
  return NODE_PERMISSION_MAP[role] != undefined ? NODE_PERMISSION_MAP[role] : -1;
};

export const getAPINodeTypeId = (nodeType: NodeTypeEnum): number => {
  const NODE_TYPE_MAP = {
    [NodeTypeEnum.Folder]: ConfigConstant.NodeType.FOLDER,
    [NodeTypeEnum.Datasheet]: ConfigConstant.NodeType.DATASHEET,
    [NodeTypeEnum.Form]: ConfigConstant.NodeType.FORM,
    [NodeTypeEnum.Dashboard]: ConfigConstant.NodeType.DASHBOARD,
    [NodeTypeEnum.Mirror]: ConfigConstant.NodeType.MIRROR,
    [NodeTypeEnum.Automation]: ConfigConstant.NodeType.AUTOMATION,
  };
  return NODE_TYPE_MAP[nodeType];
};

const EFFECTIVE_OPTION_ID_LENGTH = 13;
export const isOptionId = (optionId: string) => {
  return optionId && optionId.startsWith('opt') && optionId.length === EFFECTIVE_OPTION_ID_LENGTH;
};
