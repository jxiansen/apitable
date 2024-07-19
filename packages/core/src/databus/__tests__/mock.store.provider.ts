import { IStoreOptions, IStoreProvider } from '../providers';
import { Store, AnyAction, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import { IBaseDatasheetPack, IReduxState, IServerDashboardPack } from 'exports/store/interfaces';
import * as Reducers from 'exports/store/reducers';
import { setDashboard, setDatasheetConnected, loadFieldPermissionMap, receiveDataPack } from 'modules/database/store/actions/resource';
import { setPageParams } from 'modules/database/store/actions/page_params';

export const fulfillDatasheetStore = (datasheetPack: IBaseDatasheetPack) => {
  const store = createStore<IReduxState, any, unknown, unknown>(Reducers.rootReducers, applyMiddleware(thunkMiddleware, batchDispatchMiddleware));
  store.dispatch(
    setPageParams({
      datasheetId: datasheetPack.datasheet.id,
      spaceId: datasheetPack.datasheet.spaceId,
    })
  );

  if (datasheetPack.fieldPermissionMap) {
    store.dispatch(loadFieldPermissionMap(datasheetPack.fieldPermissionMap, datasheetPack.datasheet.id));
  }
  store.dispatch(setDatasheetConnected(datasheetPack.datasheet.id));
  store.dispatch(receiveDataPack(datasheetPack));
  return store;
};

export const fulfillDashboardStore = (dashboardPack: IServerDashboardPack) => {
  const store = createStore<IReduxState, any, unknown, unknown>(Reducers.rootReducers, applyMiddleware(thunkMiddleware, batchDispatchMiddleware));
  store.dispatch(setDashboard(dashboardPack.dashboard, dashboardPack.dashboard.id));
  store.dispatch(setPageParams({ dashboardId: dashboardPack.dashboard.id }));
  return store;
};

export class MockStoreProvider implements IStoreProvider {
  createDatasheetStore(datasheetPack: IBaseDatasheetPack): Promise<Store<IReduxState, AnyAction>> {
    return Promise.resolve(fulfillDatasheetStore(datasheetPack));
  }

  createDashboardStore(
    dashboardPack: IServerDashboardPack,
    _options: IStoreOptions
  ): Store<IReduxState, AnyAction> | Promise<Store<IReduxState, AnyAction>> {
    return Promise.resolve(fulfillDashboardStore(dashboardPack));
  }
}
