

import { shallowEqual } from 'react-redux';
import { Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export const useShowKeepSortBorder = (groupHeadRecordId: string) => {
  const { gridViewDragState, keepSort } = useAppSelector((state) => {
    return {
      gridViewDragState: Selectors.getGridViewDragState(state),
      keepSort: Selectors.getActiveViewSortInfo(state)?.keepSort,
    };
  }, shallowEqual);

  if (keepSort && gridViewDragState.dragTarget && groupHeadRecordId && gridViewDragState.hoverGroupHeadRecordId === groupHeadRecordId) {
    return true;
  }
  return false;
};
