

import { DataBus } from '../databus';
import { MockDataStorageProvider } from './mock.data.storage.provider';
import { MockStoreProvider } from './mock.store.provider';

const dataStorageProvider = new MockDataStorageProvider();

export const MockDataBus = DataBus.create({
  dataStorageProvider,
  storeProvider: new MockStoreProvider(),
});

export const resetDataLoader = () => {
  dataStorageProvider.reset();
};