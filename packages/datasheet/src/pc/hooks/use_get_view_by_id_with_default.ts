import { useMemo } from 'react';
import { Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export const useGetViewByIdWithDefault = (datasheetId: string, viewId?: string) => {
  const snapshot = useAppSelector((state) => {
    return Selectors.getSnapshot(state, datasheetId);
  });
  const mirror = useAppSelector((state) => Selectors.getMirror(state));

  const fieldPermissionMap = useAppSelector((state) => {
    return Selectors.getFieldPermissionMap(state, datasheetId);
  });

  return useMemo(() => {
    if (!snapshot) {
      return;
    }

    const firstViewId = snapshot.meta.views[0].id;

    let defaultView = Selectors.getCurrentViewBase(snapshot, firstViewId, datasheetId, fieldPermissionMap, mirror);
    if (viewId) {
      defaultView = Selectors.getCurrentViewBase(snapshot, viewId, datasheetId, fieldPermissionMap, mirror) || defaultView;
    }

    return defaultView;
  }, [fieldPermissionMap, snapshot, viewId, datasheetId, mirror]);
};
