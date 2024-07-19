import { Api } from '@apitable/core';
import { Message } from 'pc/components/common';

export const useCapacityRequest = () => {
  const getCapacityRewardListReq = (isExpire: boolean, pageNo: number) => {
    return Api.getCapacityRewardList(isExpire, pageNo).then((res) => {
      const { success, data, message } = res.data;
      if (success) {
        return data;
      }
      Message.error({ content: message });
    });
  };
  const getCapacityNodeListReq = (spaceId: string, pageNo: number) => {
    return Api.getCapacityNodeList(spaceId, pageNo).then((res) => {
      const { success, data, message } = res.data;
      if (success) {
        return data;
      }
      Message.error({ content: message });
    });
  };
  return { getCapacityRewardListReq, getCapacityNodeListReq };
};
