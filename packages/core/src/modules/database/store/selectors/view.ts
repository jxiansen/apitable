import { createSelector } from 'reselect';
import { getCurrentView } from 'modules/database/store/selectors/resource/datasheet/calc';

export const getColumnCount = createSelector([getCurrentView], (view: any) => {
  if (!view) return;
  return view.columns.length;
});
