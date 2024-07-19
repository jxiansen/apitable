import { CollaCommandManager, ExecuteResult } from 'command_manager';
import { CollaCommandName, ICollaCommandOptions } from 'commands';
import { IDataSaver, ILoadDashboardPackOptions, IStoreOptions } from 'databus/providers';
import { IDashboardLayout, IDashboardSnapshot, IReduxState, IServerDashboardPack, IWidget } from 'exports/store/interfaces';
import { getResourceRevision } from 'modules/database/store/selectors/resource';
import { getDashboardSnapshot, getDashboard } from 'modules/database/store/selectors/resource/dashboard';
import { Store } from 'redux';
import { ResourceType } from 'types';
import { ICommandExecutionResult, ISaveOptions } from './datasheet';
import { IResource } from './resource.interface';
import { updateRevision, receiveInstallationWidget } from 'modules/database/store/actions/resource';

type IDashboardWidgetMap = { [widgetId: string]: IWidget };

interface IDashboardCtorOptions {
  store: Store<IReduxState>;
  saver: IDataSaver;
  widgetMap: IDashboardWidgetMap;
  commandManager: CollaCommandManager;
}

export class Dashboard implements IResource {
  private readonly _commandManager: CollaCommandManager;
  private readonly store: Store<IReduxState>;
  private readonly saver: IDataSaver;

  public readonly widgetMap: IDashboardWidgetMap;

  public readonly type = ResourceType.Dashboard;

  /**
   * Create a `Dashboard` instance.
   *
   * @deprecated This constructor is not intended for public use.
   */
  public constructor(
    public readonly id: string,
    options: IDashboardCtorOptions
  ) {
    const { store, saver, commandManager, widgetMap } = options;
    this.store = store;
    this.saver = saver;
    this._commandManager = commandManager;
    this.widgetMap = widgetMap;
  }

  /**
   * The name of this dashboard.
   */
  public get name(): string {
    return getDashboard(this.store.getState(), this.id)!.name;
  }

  public get revision(): number {
    return getResourceRevision(this.store.getState(), this.id, ResourceType.Dashboard)!;
  }

  public setRevision(revision: number) {
    this.store.dispatch(updateRevision(revision, this.id, ResourceType.Dashboard));
  }

  public get snapshot(): IDashboardSnapshot {
    return <IDashboardSnapshot>getDashboardSnapshot(this.store.getState(), this.id);
  }

  public setWidgetInstalled(widget: IWidget) {
    this.store.dispatch(receiveInstallationWidget(widget.id, widget));
  }

  /**
   * Perform a command on this dashboard.
   *
   * @param command The command that will be executed.
   * @param saveOptions The options that will be passed to the data saver.
   *
   * @deprecated This method is not intended for public use.
   */
  public async doCommand<R>(command: ICollaCommandOptions, saveOptions: ISaveOptions): Promise<ICommandExecutionResult<R>> {
    const result = this._commandManager.execute<R>(command);
    if (result.result === ExecuteResult.Success) {
      const saveResult = await this.saver.saveOps(result.resourceOpsCollects, {
        ...saveOptions,
        resource: this,
        store: this.store,
      });
      result['saveResult'] = saveResult;
    }
    return result as ICommandExecutionResult<R>;
  }

  /**
   * Add widgets to the dashboard.
   *
   * @param saveOptions The options that will be passed to the data saver.
   */
  public addWidgets(widgetIds: string[], saveOptions: ISaveOptions): Promise<ICommandExecutionResult<void>> {
    return this.doCommand<void>(
      {
        cmd: CollaCommandName.AddWidgetToDashboard,
        dashboardId: this.id,
        widgetIds,
      },
      saveOptions
    );
  }

  /**
   * Add widgets to the dashboard.
   *
   * @param options The widget option
   * @param saveOptions The options that will be passed to the data saver.
   */
  public setWidgetDependencyDatasheet(options: IWidgetDependencyDatasheetOptions, saveOptions: ISaveOptions): Promise<ICommandExecutionResult<void>> {
    return this.doCommand<void>(
      {
        cmd: CollaCommandName.SetWidgetDepDstId,
        resourceId: options.widgetId,
        resourceType: ResourceType.Widget,
        dstId: options.dstId,
      },
      saveOptions
    );
  }

  /**
   * Delete a widget from the dashboard.
   *
   * @param widgetId The widget id
   * @param saveOptions The options that will be passed to the data saver.
   */
  public deleteWidget(widgetId: string, saveOptions: ISaveOptions): Promise<ICommandExecutionResult<void>> {
    return this.doCommand<void>(
      {
        cmd: CollaCommandName.DeleteDashboardWidget,
        dashboardId: this.id,
        widgetId,
      },
      saveOptions
    );
  }

  public setWidgetName(widgetId: string, newWidgetName: string, saveOptions: ISaveOptions): Promise<ICommandExecutionResult<void>> {
    return this.doCommand<void>(
      {
        cmd: CollaCommandName.SetWidgetName,
        resourceId: widgetId,
        resourceType: ResourceType.Widget,
        newWidgetName,
      },
      saveOptions
    );
  }

  public changeLayout(options: IDashboardChangeLayoutOptions[], saveOptions: ISaveOptions): Promise<ICommandExecutionResult<void>> {
    return this.doCommand<void>(
      {
        cmd: CollaCommandName.ChangeDashboardLayout,
        dashboardId: this.id,
        layout: options,
      },
      saveOptions
    );
  }
}

/**
 * The options for creating a `Database` instance. The implementor may extend this interface, adding necessary fields.
 */
export type IDashboardOptions = IDashboardDefaultOptions | IDashboardOptionsWithCustomStore;

export interface IDashboardDefaultOptions {
  storeOptions: IStoreOptions;
  loadOptions: ILoadDashboardPackOptions;
}

export interface IDashboardOptionsWithCustomStore {
  /**
   * Creates the internal redux store of the datasheet, overriding the store provider.
   */
  createStore: (dst: IServerDashboardPack) => Promise<Store<IReduxState>> | Store<IReduxState>;

  loadOptions: ILoadDashboardPackOptions;
}

export interface IWidgetDependencyDatasheetOptions {
  widgetId: string;
  dstId: string;
}

export type IDashboardChangeLayoutOptions = IDashboardLayout;
