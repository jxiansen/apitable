

import { useMemo } from 'react';
import { decimalCeil } from '@apitable/core';
import { IHooksParams, IHooksResult } from '../interface';
import { getPercent } from '../utils';

export const useMember = ({ subscription, spaceInfo }: IHooksParams): IHooksResult => {
  const { seatUsage, total } = useMemo(() => {
    return {
      seatUsage: spaceInfo?.seatUsage || { total: 0, chatBotCount: 0, memberCount: 0 },
      total: subscription?.maxSeats || 0,
    };
  }, [subscription, spaceInfo]);

  return useMemo(() => {
    const remain = Math.max(0, total - seatUsage.total);
    const usedText = seatUsage.total.toLocaleString();
    const totalText = total.toLocaleString();
    const usedPercent = decimalCeil(getPercent(seatUsage.total / total) * 100);
    const remainText = remain.toLocaleString();
    const remainPercent = Math.max(0, 100 - usedPercent);

    return {
      used: seatUsage.total,
      usedText,
      total,
      totalText,
      remain,
      usedPercent,
      remainPercent,
      remainText,
    };
  }, [seatUsage, total]);
};
