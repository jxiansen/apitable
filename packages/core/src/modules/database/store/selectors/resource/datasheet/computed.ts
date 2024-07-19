import { compensator } from '../../../../../../compensator';

import { CellType } from 'modules/shared/store/constants';

import { ILinearRow, IReduxState } from 'exports/store/interfaces';
import { getDatasheetPack } from './base';
import { getViewByIdWithDefault } from './calc';

export const getComputedInfo = (state: IReduxState, dsId?: string) => {
  const datasheetPack = getDatasheetPack(state, dsId);
  return datasheetPack?.computedInfo;
};

export const getComputedStatus = (state: IReduxState, dsId?: string) => {
  const datasheetPack = getDatasheetPack(state, dsId);
  return datasheetPack?.computedStatus;
};

export const getPureVisibleRowsFormComputed = (state: IReduxState, dsId?: string | void) => {
  const datasheetPack = getDatasheetPack(state, dsId);
  const pureVisibleRows = datasheetPack?.computedInfo?.pureVisibleRows;
  if (!pureVisibleRows) {
    return pureVisibleRows;
  }
  if (!compensator.willRemoveRecords.size) {
    return pureVisibleRows;
  }
  return pureVisibleRows.filter((item) => !compensator.checkWillRemoveRecord(item.recordId));
};

export const getVisibleColumnsFormComputed = (state: IReduxState, dsId?: string) => {
  const datasheetPack = getDatasheetPack(state, dsId);
  return datasheetPack?.computedInfo?.visibleColumns;
};

export const getLinearRowsFormComputed = (state: IReduxState, dsId?: string) => {
  const datasheetPack = getDatasheetPack(state, dsId);
  const linearRows = datasheetPack?.computedInfo?.linearRows;
  if (!linearRows) {
    return null;
  }
  if (!compensator.willRemoveRecords.size && !compensator.lastGroupInfo) {
    return linearRows;
  }
  const filterConditions: ((record: ILinearRow) => boolean)[] = [];
  if (compensator.lastGroupInfo) {
    const _dsId = dsId || state.pageParams.datasheetId;
    if (_dsId) {
      const curGroupInfo = getViewByIdWithDefault(state, _dsId)?.groupInfo;
      const maxDepth = curGroupInfo ? curGroupInfo.length : 0;
      filterConditions.push((record) => {
        record.depth = Math.min(record.depth, maxDepth);
        return record.type !== CellType.GroupTab || record.depth < maxDepth;
      });
    }
  }
  if (compensator.willRemoveRecords.size) {
    filterConditions.push((record) => {
      return !compensator.checkWillRemoveRecord(record.recordId);
    });
  }
  return linearRows.filter((item) =>
    filterConditions.reduce((pass, check) => {
      if (!pass) {
        return pass;
      }
      return check(item);
    }, true)
  );
};
