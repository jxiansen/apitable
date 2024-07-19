import axios from 'axios';
import qs from 'qs';
import { ICronSchema } from '@apitable/components';
import { automationApiClient } from 'pc/common/api-client';
import { IAutomationDatum, IRobotHistoryTask, IRobotTrigger } from './interface';
import { IAutomationRobotDetailItem } from './robot_context';
import { IRunHistoryDatum } from './robot_detail/robot_run_history';

export const nestReq = axios.create({
  baseURL: '/nest/v1/',
});

export const getRobotApiHistoryList = async (url: string): Promise<IRunHistoryDatum[]> => {
  const res = await axios.get(url);
  if (res.data.success) {
    return res.data.data;
  }
  return [];
};

export const deleteRobotAction = async (resourceId: string, actionId: string, robotId: string) => {
  const res = await axios.delete(`/automation/${resourceId}/actions/${actionId}?robotId=${robotId}`);
  return res.data.success;
};

export const deleteTrigger = async (resourceId: string, id: string, robotId: string) => {
  const res = await axios.delete(`/automation/${resourceId}/triggers/${id}?robotId=${robotId}`);
  return res.data.success;
};

export const updateRobotName = async (resourceId: string, robotId: string, name: string) => {
  return await updateAutomationRobot(resourceId, robotId, {
    name,
  });
};

export const updateRobotDescription = async (resourceId: string, robotId: string, description: string) => {
  return await updateAutomationRobot(resourceId, robotId, {
    description,
  });
};

export const updateAutomationRobot = async (resourceId: string, robotId: string, robot: Partial<IAutomationDatum>) => {
  const res = await axios.patch(`/automation/${resourceId}/robots/${robotId}`, robot);
  return res.data.success;
};

export const getResourceAutomations = async (
  resourceId: string,
  options?: {
    shareId: string;
  },
): Promise<IAutomationDatum[]> => {
  const resp = await automationApiClient.getResourceRobots({
    resourceId: resourceId,
    // @ts-ignore
    shareId: options?.shareId ?? '',
  });
  return (resp?.data ?? []) as unknown as IAutomationDatum[];
};

// export const createAutomationRobot = (robot: { resourceId: string; name: string }): Promise<IAutomationDatum> => {
//   return axios.post(`/automation/${robot.resourceId}/robots`, robot).then((res) => {
//     if (res.data.success) {
//       return res.data.data;
//     }
//     return [];
//   });
// };

export const createAutomationRobot = (robot: { resourceId: string; name: string }): Promise<IAutomationDatum> => {
  return nestReq.post('/automation/robots', robot).then((res) => {
    if (res.data.success) {
      return res.data.data;
    }
    return [];
  });
};

export const checkObject = (val: object) => Object.values(val).some((value) => value != null);
export const getResourceAutomationDetail = (
  resourceId: string,
  robotId: string,
  options: {
    shareId?: string;
  },
): Promise<IAutomationRobotDetailItem> => {
  const query = options != null && checkObject(options) ? qs.stringify(options) : '';
  return axios.get(`/automation/${resourceId}/robots/${robotId}?${query}`).then((res) => {
    if (res.data.success) {
      return res.data.data;
    }
    return [];
  });
};

export const activeRobot = (robotId: string): Promise<boolean> => {
  const url = `/automation/robots/${robotId}/active`;
  return nestReq.post(url).then((res) => {
    if (res.data.success) {
      if (res.data.data.ok) {
        return true;
      }
      return false;
    }
    return false;
  });
};

export const deActiveRobot = (robotId: string): Promise<any> => {
  const url = `/automation/robots/${robotId}/deactive`;
  return nestReq.post(url).then((res) => {
    if (res.data.success) {
      return true;
    }
    return false;
  });
};
export const deleteRobot = (resourceId: string, robotId: string) => {
  return axios.delete(`/automation/${resourceId}/robots/${robotId}`).then((res) => {
    return !!res.data.success;
  });
};

interface ICreateTrigger {
  robotId?: string;
  input: unknown;
  relatedResourceId?: string;
  prevTriggerId?: string;
  triggerTypeId: string;
}

export type ICronSchemaTimeZone = ICronSchema & {
  timeZone: string;
};
export const createTrigger = (resourceId: string, data: ICreateTrigger) => {
  return axios.post(`/automation/${resourceId}/triggers`, data);
};

export const changeTriggerTypeId = (resourceId: string, triggerId: string, triggerTypeId: string, robotId: string) => {
  return axios.patch(`/automation/${resourceId}/triggers/${triggerId}`, {
    robotId,
    triggerTypeId,
    relatedResourceId: '',
    input: {},
  });
};

export const updateTriggerInput = (
  resourceId: string,
  triggerId: string,
  input: any,
  robotId: string,
  data: {
    relatedResourceId: string;
    scheduleConfig?: ICronSchemaTimeZone;
  },
) => {
  return axios.patch(`/automation/${resourceId}/triggers/${triggerId}`, {
    input,
    robotId,
    ...data,
  });
};
export const createAction = (resourceId: string, data: { robotId: string; actionTypeId: string; prevActionId?: string; input?: any }) => {
  return axios.post(`/automation/${resourceId}/actions`, data);
};

export const changeActionTypeId = (resourceId: string, actionId: string, actionTypeId: string, robotId: string) => {
  return axios.patch(`/automation/${resourceId}/actions/${actionId}`, {
    actionTypeId,
    robotId,
    input: {},
  });
};

export const updateActionInput = (resourceId: string, actionId: string, input: any, robotId: string) => {
  return axios.patch(`/automation/${resourceId}/actions/${actionId}`, {
    input,
    robotId,
  });
};

export const getRobotTrigger = (url: string): Promise<IRobotTrigger | undefined> => {
  return nestReq.get(url).then((res) => {
    return res?.data.data;
  });
};

export const getAutomationRunHistoryDetail = (taskId: string): Promise<IRobotHistoryTask | undefined> => {
  return axios.get(`/automation/run-history/${taskId}`).then((res) => {
    const taskDetail: undefined | IRobotHistoryTask = res?.data?.data;
    return taskDetail;
  });
};

export const reqDatasheetButtonTrigger = (data: { dstId: string; recordId: string; fieldId: string }) => {
  return nestReq.post(`/datasheets/${data.dstId}/triggers`, data);
};
