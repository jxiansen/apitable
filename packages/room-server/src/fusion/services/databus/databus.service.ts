import { databus, IReduxState, IServerDatasheetPack } from '@apitable/core';
import { RedisService } from '@apitable/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { CommandService } from 'database/command/services/command.service';
import { DatasheetChangesetSourceService } from 'database/datasheet/services/datasheet.changeset.source.service';
import { DatasheetService } from 'database/datasheet/services/datasheet.service';
import { OtService } from 'database/ot/services/ot.service';
import { Store } from 'redux';
import { InjectLogger } from 'shared/common';
import { Logger } from 'winston';
import { IServerLoadDashboardPackOptions, IServerLoadDatasheetPackOptions, ServerDataStorageProvider } from './server.data.storage.provider';
import { DashboardService } from 'database/dashboard/services/dashboard.service';
import { ServerStoreProvider } from './server.store.provider';

@Injectable()
export class DataBusService {
  private readonly databus: databus.DataBus;
  private readonly database: databus.Database;

  constructor(
    datasheetService: DatasheetService,
    dashboardService: DashboardService,
    commandService: CommandService,
    redisService: RedisService,
    otService: OtService,
    changesetSourceService: DatasheetChangesetSourceService,
    @InjectLogger() private readonly logger: Logger,
  ) {
    this.databus = databus.DataBus.create({
      dataStorageProvider: new ServerDataStorageProvider(
        {
          datasheetService,
          dashboardService,
          redisService,
          otService,
          changesetSourceService,
          loadOptions: {
            useCache: false,
          },
        },
        logger,
      ),
      storeProvider: new ServerStoreProvider(commandService),
    });
    this.database = this.databus.getDatabase();
    this.database.addEventHandler({
      type: databus.event.ResourceEventType.CommandExecuted,
      handle: (event: databus.event.IResourceCommandExecutedEvent) => {
        if (event.execResult === databus.event.CommandExecutionResultType.Error) {
          this.logger.error('CommandExecuteError', { error: event.error });
          return;
        }

        return;
      },
    });
  }

  async getDatasheet(dstId: string, options: IServerDatasheetOptions): Promise<databus.Datasheet | null> {
    const datasheet = await this.database.getDatasheet(
      dstId,
      options.createStore ? (options as Required<IServerDatasheetOptions>) : { storeOptions: {}, ...options },
    );
    if (datasheet === null) {
      return null;
    }

    return datasheet;
  }

  async getDashboard(dsbId: string, options: IServerDashboardOptions): Promise<databus.Dashboard | null> {
    const dashboard = await this.database.getDashboard(dsbId, { storeOptions: {}, ...options });
    if (dashboard === null) {
      return null;
    }

    return dashboard;
  }
}

export interface IServerDatasheetOptions {
  /**
   * Creates the internal redux store of the datasheet, overriding the store provider.
   */
  createStore?: (dst: IServerDatasheetPack) => Promise<Store<IReduxState>> | Store<IReduxState>;

  loadOptions: IServerLoadDatasheetPackOptions;
}

export interface IServerDashboardOptions {
  loadOptions: IServerLoadDashboardPackOptions;
}
