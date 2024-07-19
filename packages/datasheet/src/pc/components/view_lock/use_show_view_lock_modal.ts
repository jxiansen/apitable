import { IViewProperty, Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export const useShowViewLockModal = () => {
  const spaceManualSaveViewIsOpen = useAppSelector((state) => {
    return state.labs.includes('view_manual_save') || Boolean(state.share.featureViewManualSave) || Boolean(state.embedInfo?.viewManualSave);
  });
  const activeView: IViewProperty = useAppSelector((state) => Selectors.getCurrentView(state))!;
  const hasMirrorId = useAppSelector((state) => Boolean(state.pageParams.mirrorId));

  if (hasMirrorId) {
    return false;
  }

  if (!spaceManualSaveViewIsOpen || activeView.autoSave) {
    return Boolean(activeView.lockInfo);
  }

  return false;
};
