import { isNull } from 'lodash';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StoreActions } from '@apitable/core';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { getStorage, setStorage, StorageMethod, StorageName } from 'pc/utils/storage/storage';

export const useSideBarVisible = () => {
  const sideBarVisible = useAppSelector((state) => state.space.sideBarVisible);
  const { screenIsAtMost } = useResponsive();
  const dispatch = useDispatch();
  const setSideBarVisible = useCallback(
    (sideBarVisible: boolean) => {
      // It is necessary to ensure that the useEffect tampers with the sideBarVisible before the loc is dispatched
      setStorage(StorageName.IsPanelClosed, sideBarVisible, StorageMethod.Set);
      dispatch(StoreActions.setSideBarVisible(sideBarVisible));
    },
    [dispatch],
  );

  useEffect(() => {
    if (screenIsAtMost(ScreenSize.md)) return;
    // big screen device
    const localPanelClose = getStorage(StorageName.IsPanelClosed);
    if (isNull(localPanelClose)) {
      setSideBarVisible(true);
      return;
    }
    setSideBarVisible(localPanelClose);
  }, [setSideBarVisible, screenIsAtMost]);

  return {
    sideBarVisible,
    setSideBarVisible,
  };
};
