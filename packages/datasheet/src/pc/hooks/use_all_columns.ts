import { useMemo } from 'react';
import { IReduxState, Role, Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

/**
 *
 * @param dstId
 * @param withNoPermissionField
 */
export const getAllColumnsFp = (state: IReduxState, dstId: string, withNoPermissionField?: boolean) => {
  const snapshot = Selectors.getSnapshot(state, dstId);
  const fieldPermissionMap = Selectors.getFieldPermissionMap(state, dstId);
  const firstView = snapshot?.meta.views[0];
  return firstView?.columns.filter((col) => {
    if (withNoPermissionField) {
      return true;
    }
    if (!col) {
      return false;
    }
    const fieldRole = Selectors.getFieldRoleByFieldId(fieldPermissionMap, col.fieldId);
    return fieldRole !== Role.None;
  });
};

/**
 *
 * @param dstId
 * @param withNoPermissionField
 */
export const useAllColumnsFp1 = (state: IReduxState, dstId: string, withNoPermissionField?: boolean) => {
  const snapshot = Selectors.getSnapshot(state, dstId);
  const fieldPermissionMap = Selectors.getFieldPermissionMap(state, dstId);
  const firstView = snapshot?.meta.views[0];
  return firstView?.columns.filter((col) => {
    if (withNoPermissionField) {
      return true;
    }
    if (!col) {
      return false;
    }
    const fieldRole = Selectors.getFieldRoleByFieldId(fieldPermissionMap, col.fieldId);
    return fieldRole !== Role.None;
  });
};

/**
 *
 * @param dstId
 * @param withNoPermissionField
 */
export const useAllColumns = (dstId: string, withNoPermissionField?: boolean) => {
  const snapshot = useAppSelector((state) => {
    return Selectors.getSnapshot(state, dstId);
  });
  const fieldPermissionMap = useAppSelector((state) => {
    return Selectors.getFieldPermissionMap(state, dstId);
  });
  const firstView = snapshot?.meta.views[0];
  return useMemo(() => {
    return firstView?.columns.filter((col) => {
      if (withNoPermissionField) {
        return true;
      }
      if (!col) {
        return false;
      }
      const fieldRole = Selectors.getFieldRoleByFieldId(fieldPermissionMap, col.fieldId);
      return fieldRole !== Role.None;
    });
  }, [firstView, fieldPermissionMap, withNoPermissionField]);
};

export const useAllColumnsOrEmpty = (dstId?: string, withNoPermissionField?: boolean) => {
  const value = useAllColumns(dstId ?? '', withNoPermissionField);
  if (!dstId) {
    return [];
  }

  return value;
};
