

import { IReduxState, IServerDashboardPack, IServerDatasheetPack } from 'exports/store/interfaces';
import { Store } from 'redux';

/**
 * A store provider is responsible for creating internal redux stores for resources, e.g. `Datasheet`.
 */
export interface IStoreProvider {
  /**
   * Creates a redux store from the datasheet pack.
   */
  createDatasheetStore(datasheetPack: IServerDatasheetPack, options: IStoreOptions): Promise<Store<IReduxState>> | Store<IReduxState>;

  /**
   * Creates a redux store from the dashboard pack.
   */
  createDashboardStore(dashboardPack: IServerDashboardPack, options: IStoreOptions): Promise<Store<IReduxState>> | Store<IReduxState>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStoreOptions {}
