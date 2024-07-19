import { IDataLoader } from './data.loader.interface';
import { IDataSaver } from './data.saver.interface';

/**
 * A data storage provider is the combination of a data loader and a data saver.
 * 
   @see IDataLoader 
   @see IDataSaver
 */
export interface IDataStorageProvider extends IDataLoader, IDataSaver {}
