import { useAtomValue } from 'jotai';
import { nanoid } from 'nanoid';
import qs from 'qs';
import { useCallback, useContext, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { automationStateAtom } from '../../../automation/controller/atoms';
import { ShareContext } from '../../../share';
import { checkObject, getRobotApiHistoryList } from '../../api';
import { RobotRunStatusEnums } from '../../interface';

export const PAGE_SIZE = 20;

export interface IRunHistoryDatum {
  robotId: string;
  taskId: string;
  createdAt: string;
  status: RobotRunStatusEnums;
  executedActions: ExecutedAction[];
}

export interface ExecutedAction {
  actionId: string;
  actionTypeId: string;
  success: boolean;
}

export const useGetTaskHistory = () => {
  const { shareInfo } = useContext(ShareContext);
  const automationState = useAtomValue(automationStateAtom);

  const options = {
    shareId: shareInfo?.shareId,
  };
  const query = checkObject(options) ? qs.stringify(options) : '';

  const [key, setKey] = useState(() => nanoid());
  const { data, isLoading, isValidating, error, size, setSize, mutate } = useSWRInfinite(
    (index) =>
      `/automation/${automationState?.resourceId}/roots/${automationState?.currentRobotId}/run-history?pageNum=${
        index + 1
      }&pageSize=${PAGE_SIZE}&key=${key}&${query}`,
    getRobotApiHistoryList,
  );

  const reset = useCallback(() => {
    setKey(nanoid());
    mutate();
  }, [mutate]);

  const items = data ? data.flat() : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  // const isRefreshing = isValidating && data && data.length === size;
  const canLoadMore = !isReachingEnd && !isLoadingMore;
  return {
    canLoadMore,
    items,
    isEmpty,
    size,
    error,
    isLoadingData: isLoading,
    isLoading: isValidating,
    isLoadingMore,
    isLoadingInitialData,
    isReachingEnd,
    reset,
    setSize,
  };
};
