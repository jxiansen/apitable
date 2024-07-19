

import { ComputeRefManager, getComputeRefManager, IReduxState, Selectors } from '@apitable/core';

/**
 * Get an array of dependent datasheetId's
 * @param state
 * @param datasheetId
 */
export const getDependenceDstIds = (state: IReduxState, datasheetId: string) => {
  const computeRefManager = getComputeRefManager(state);
  const fieldMap = Selectors.getFieldMap(state, datasheetId);
  if (!fieldMap) {
    return [];
  }
  return computeRefManager.getDependenceDstIds(datasheetId!, fieldMap);
};

/**
 * Check which tables a table depends on datasheetId set
 * @param state
 * @param datasheetId
 */
export const getDependenceByDstIds = (state: IReduxState, datasheetId: string) => {
  const computeRefManager = getComputeRefManager(state);
  const fieldMap = Selectors.getFieldMap(state, datasheetId);
  if (!fieldMap) {
    return [];
  }
  return computeRefManager.getDependenceByDstIds(datasheetId!, fieldMap);
};

/**
 * danger only use in browser
 * @param state
 * @param datasheetId
 */
export const getDependenceByDstIdsByGlobalResource = (state: IReduxState, datasheetId: string, computeRefManager: ComputeRefManager) => {
  const fieldMap = Selectors.getFieldMap(state, datasheetId);
  if (!fieldMap) {
    return [];
  }
  return computeRefManager.getDependenceByDstIds(datasheetId!, fieldMap);
};
