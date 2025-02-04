import { IResourceOpsCollect, resourceOpsToChangesets } from 'command_manager';
import { IDataStorageProvider, ISaveOpsOptions } from '../providers';
import { IBaseDatasheetPack, IServerDashboardPack, IServerDatasheetPack } from 'exports/store/interfaces';
import { getSnapshot, getDatasheet } from 'modules/database/store/selectors/resource/datasheet/base';
import { getDashboard } from 'modules/database/store/selectors/resource/dashboard';

import { mockDatasheetMap } from './mock.datasheets';
import { ResourceType } from '../../types';
import { mockDashboardMap } from './mock.dashboards';
import { applyJOTOperations, updateRevision } from 'modules/database/store/actions/resource';

export class MockDataStorageProvider implements IDataStorageProvider {
  datasheets!: Record<string, IBaseDatasheetPack>;
  dashboards!: Record<string, IServerDashboardPack>;

  constructor() {
    this.reset();
  }

  reset() {
    this.datasheets = JSON.parse(JSON.stringify(mockDatasheetMap));
    this.dashboards = JSON.parse(JSON.stringify(mockDashboardMap));
  }

  loadDatasheetPack(dstId: string): Promise<IServerDatasheetPack | null> {
    if (this.datasheets.hasOwnProperty(dstId)) {
      return Promise.resolve(this.datasheets[dstId]!);
    }
    return Promise.resolve(null);
  }

  loadDashboardPack(dsbId: string): Promise<IServerDashboardPack | null> {
    if (this.dashboards.hasOwnProperty(dsbId)) {
      return Promise.resolve(this.dashboards[dsbId]!);
    }
    return Promise.resolve(null);
  }

  saveOps(ops: IResourceOpsCollect[], options: ISaveOpsOptions): Promise<any> {
    const { store } = options;
    const changesets = resourceOpsToChangesets(ops, store.getState());
    changesets.forEach((cs) => {
      store.dispatch(applyJOTOperations(cs.operations, cs.resourceType, cs.resourceId));
      if (cs.baseRevision !== undefined) {
        store.dispatch(updateRevision(cs.baseRevision + 1, cs.resourceId, cs.resourceType));
      }
      switch (cs.resourceType) {
        case ResourceType.Datasheet:
          this.datasheets[cs.resourceId] = {
            datasheet: getDatasheet(store.getState())!,
            snapshot: getSnapshot(store.getState())!,
          };
          break;
        case ResourceType.Dashboard:
          if (this.dashboards[cs.resourceId]) {
            this.dashboards[cs.resourceId]!.dashboard = getDashboard(store.getState(), cs.resourceId)!;
          }
          break;
      }
    });

    return Promise.resolve(changesets);
  }

  async nestRoomChangeFromRust(_roomId: string, _data: any) {}
}
