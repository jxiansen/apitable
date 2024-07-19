

import {
  setDatasheetConnected,receiveDataPack,loadFieldPermissionMap,
} from 'modules/database/store/actions/resource';
import { IBaseDatasheetPack, IReduxState } from 'exports/store/interfaces';
import * as Reducers from 'exports/store/reducers';
import { applyMiddleware, createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunkMiddleware from 'redux-thunk';
import { setPageParams } from 'modules/database/store/actions/page_params';
export function fulfillStore(datasheetPack: IBaseDatasheetPack, foreignDatasheetMap?: { [dstId: string]: IBaseDatasheetPack }): any {
  const store = createStore<IReduxState, any, unknown, unknown>(enableBatching(Reducers.rootReducers), applyMiddleware(thunkMiddleware));
  store.dispatch(
    setPageParams({
      datasheetId: datasheetPack.datasheet.id,
      spaceId: datasheetPack.datasheet.spaceId,
    }),
  );

  if (foreignDatasheetMap) {
    Object.keys(foreignDatasheetMap).forEach(dstId => {
      // Don't check linked datasheet, linked datasheet should be set to connected, or linked data can not be written
      store.dispatch(setDatasheetConnected(dstId));
      const dataPack = foreignDatasheetMap![dstId]!;
      store.dispatch(receiveDataPack(dataPack, { isPartOfData: true }));
      dataPack.fieldPermissionMap && store.dispatch(loadFieldPermissionMap(dataPack.fieldPermissionMap, dstId));
    });
  }

  store.dispatch(setDatasheetConnected(datasheetPack.datasheet.id));
  store.dispatch(receiveDataPack(datasheetPack));

  return store;
}
