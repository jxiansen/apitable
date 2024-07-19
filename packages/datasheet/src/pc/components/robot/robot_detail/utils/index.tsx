import React from 'react';
import { IRobotAction, IRobotTrigger } from '../../interface';

export const getActionList = (actions?: IRobotAction[]): IRobotAction[] => {
  if (!actions || actions.length === 0) {
    return [];
  }

  const preActionIdMap: Record<string, IRobotAction> = actions
    .map((action: IRobotAction) => ({
      [action.prevActionId]: action,
    }))
    .reduce((acc: any, item: any) => ({ ...acc, ...item }), {});

  const headOpt: IRobotAction | undefined = actions.find((item: IRobotAction) => item.prevActionId == null || item.prevActionId == '');
  if (!headOpt) {
    return [];
  }
  const head: IRobotAction = headOpt!;
  const findNextAction = (count: number, current: string, resultList: IRobotAction[]): IRobotAction[] => {
    if (count === 0) {
      return resultList;
    }
    const action = preActionIdMap[current];

    if (action) {
      return findNextAction(count - 1, action.id ?? action.actionId, resultList.concat(action!));
    }
    return resultList;
  };

  return findNextAction(actions.length - 1, head.id ?? head.actionId, [head]);
};

export const getTriggerList = (actions?: IRobotTrigger[]): IRobotTrigger[] => {
  return actions ?? [];
};
