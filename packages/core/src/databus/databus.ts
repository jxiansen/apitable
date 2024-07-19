import { Database } from './logic';
import { IDataStorageProvider, IStoreProvider } from './providers';

/**
 * The entry point of the DataBus layer.
 */
export class DataBus {
  private _database: Database;

  private constructor() {
    this._database = new Database();
  }

  /**
   * Create a DataBus instance.
   */
  public static create(options: IDataBusInitOptions): DataBus {
    const { dataStorageProvider, storeProvider } = options;
    const databus = new DataBus();

    const db = databus.getDatabase();
    db.setDataStorageProvider(dataStorageProvider);
    db.setStoreProvider(storeProvider);

    return databus;
  }

  /**
   * Get the database of a DataBus instance.
   *
   * Currently, only one database exists for a DataBus instance. In the future, there may be multiple databases
   * for a DataBus instance. And the use cases are:
   *
   * - For front end, there is only one user, so one database suffice.
   * - For back end, the server creates many databases, one database corresponds to one user respectively.
   */
  public getDatabase(): Database {
    return this._database;
  }
}

/**
 * The options to intiailize a DataBus instance.
 */
export interface IDataBusInitOptions {
  dataStorageProvider: IDataStorageProvider;
  storeProvider: IStoreProvider;
}
