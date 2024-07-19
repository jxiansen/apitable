

import { IRobotTrigger } from 'pc/components/robot/interface';

export const getDataParameter = <T>(trigger: IRobotTrigger['input'] | undefined, fieldName: string) => {
  if (!trigger) {
    return undefined;
  }

  const operands = trigger?.value?.operands ?? [];

  if (operands.length === 0) {
    return undefined;
  }
  // @ts-ignore
  const f = operands.findIndex((item) => item === fieldName);
  if (f > -1) {
    return operands[f + 1].value as T;
  }
  return undefined;
};

export const getDataSlot = <T>(trigger: IRobotTrigger['input'] | undefined, fieldName: string) => {
  if (!trigger) {
    return undefined;
  }

  const operands = trigger?.value?.operands ?? [];

  if (operands.length === 0) {
    return undefined;
  }
  // @ts-ignore
  const f = operands.findIndex((item) => item === fieldName);
  if (f > -1) {
    return operands[f + 1] as T;
  }
  return undefined;
};
