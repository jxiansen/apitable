import { useMemo } from 'react';
import { decimalCeil } from '@apitable/core';
import { IHooksParams, IHooksResult } from '../interface';
import { getPercent } from '../utils';

export const useApi = ({ subscription, spaceInfo }: IHooksParams): IHooksResult => {
  const { used, total } = useMemo(() => {
    return {
      used: spaceInfo?.apiRequestCountUsage || 0,
      total: subscription?.maxApiCall || 0,
    };
  }, [subscription, spaceInfo]);
  return useMemo(() => {
    const remain = Math.max(0, total - used);
    const usedText = used.toLocaleString();
    const totalText = total.toLocaleString();
    const usedPercent = decimalCeil(getPercent(used / total) * 100);
    const remainText = remain.toLocaleString();
    const remainPercent = Math.max(0, 100 - usedPercent);
    return {
      used,
      usedText,
      total,
      totalText,
      remain,
      usedPercent,
      remainPercent,
      remainText,
    };
  }, [used, total]);
};
