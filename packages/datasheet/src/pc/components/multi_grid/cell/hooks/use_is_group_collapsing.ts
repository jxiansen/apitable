import { CellType, ILinearRow, Selectors } from '@apitable/core';

import { useAppSelector } from 'pc/store/react-redux';

export const useIsGroupCollapsing = (row: ILinearRow) => {
  const groupingCollapseIds = useAppSelector(Selectors.getGroupingCollapseIds);
  const groupingCollapseIdSet = new Set(groupingCollapseIds);
  return row.type === CellType.GroupTab && Boolean(groupingCollapseIdSet.has(`${row.recordId}_${row.depth}`));
};
