

import { Selectors, StoreActions, ToolBarMenuCardOpenState } from '@apitable/core';
import { useAppDispatch } from 'pc/hooks/use_app_dispatch';
import { useAppSelector } from 'pc/store/react-redux';
import { ToolHandleType } from './interface';

export const ToolbarMap = {
  [ToolBarMenuCardOpenState.RowHeight]: ToolHandleType.ChangeRowHeight,
  [ToolBarMenuCardOpenState.FieldHidden]: ToolHandleType.HideField,
  [ToolBarMenuCardOpenState.ExclusiveFieldHidden]: ToolHandleType.HideExclusiveField,
  [ToolBarMenuCardOpenState.Filter]: ToolHandleType.ViewFilter,
  [ToolBarMenuCardOpenState.Group]: ToolHandleType.ViewGroup,
  [ToolBarMenuCardOpenState.Sort]: ToolHandleType.ViewSort,
  [ToolBarMenuCardOpenState.GallerySetting]: ToolHandleType.GallerySetting,
  [ToolHandleType.OrgChartSetting]: ToolBarMenuCardOpenState.OrgChartSetting,
  [ToolBarMenuCardOpenState.ViewSwitcher]: ToolHandleType.ViewSwitcher,
  [ToolBarMenuCardOpenState.KanbanFieldHidden]: ToolHandleType.HiddenKanbanGroup,
  [ToolBarMenuCardOpenState.Share]: ToolHandleType.Share,
  [ToolBarMenuCardOpenState.None]: null,
};

export const ToolbarReMap = {
  [ToolHandleType.ChangeRowHeight]: ToolBarMenuCardOpenState.RowHeight,
  [ToolHandleType.HideField]: ToolBarMenuCardOpenState.FieldHidden,
  [ToolHandleType.HideExclusiveField]: ToolBarMenuCardOpenState.ExclusiveFieldHidden,
  [ToolHandleType.ViewFilter]: ToolBarMenuCardOpenState.Filter,
  [ToolHandleType.ViewGroup]: ToolBarMenuCardOpenState.Group,
  [ToolHandleType.ViewSort]: ToolBarMenuCardOpenState.Sort,
  [ToolHandleType.GallerySetting]: ToolBarMenuCardOpenState.GallerySetting,
  [ToolHandleType.OrgChartSetting]: ToolBarMenuCardOpenState.OrgChartSetting,
  [ToolHandleType.ViewSwitcher]: ToolBarMenuCardOpenState.ViewSwitcher,
  [ToolHandleType.HiddenKanbanGroup]: ToolBarMenuCardOpenState.KanbanFieldHidden,
  [ToolHandleType.Share]: ToolBarMenuCardOpenState.Share,
};

export function useToolbarMenuCardOpen(type: ToolHandleType) {
  const dispatch = useAppDispatch();
  const toolbarMenuCardState = useAppSelector((state) => Selectors.getToolbarMenuCardState(state));
  const toolHandleType = ToolbarMap[toolbarMenuCardState];

  const setToolbarMenuCardOpen = (open: boolean) => {
    const ToolbarMenuType = ToolbarReMap[type];
    if (open) {
      dispatch(StoreActions.setToolbarMenuCardOpen(ToolbarMenuType));
    } else {
      dispatch(StoreActions.setToolbarMenuCardOpen(ToolBarMenuCardOpenState.None));
    }
  };

  const open = type === toolHandleType;
  return {
    open,
    setToolbarMenuCardOpen,
  };
}

export const useDisabledOperateWithMirror = () => {
  return useAppSelector((state) => {
    const mirrorId = state.pageParams.mirrorId;
    const spaceManualSaveViewIsOpen =
      state.labs.includes('view_manual_save') || Boolean(state.share.featureViewManualSave) || Boolean(state.embedInfo?.viewManualSave);
    if (!mirrorId) {
      return false;
    }
    return !spaceManualSaveViewIsOpen;
  });
};
