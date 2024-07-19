

import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore as _createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunkMiddleware from 'redux-thunk';
import { IReduxState, Reducers } from '@apitable/core';
import { viewDerivationMiddleware } from './view_derivation_middleware';
import { widgetSyncDataMiddleware } from './widget_sync_data_middleware';

declare const window: any;
const composeEnhancers = composeWithDevTools({ trace: true });

export const createStore = () => {
  return _createStore<IReduxState, any, unknown, unknown>(
    enableBatching(Reducers.rootReducers),
    // https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
    composeEnhancers(applyMiddleware(thunkMiddleware, viewDerivationMiddleware, widgetSyncDataMiddleware)),
  );
};

export const store = createStore();

export type AppDispatch = typeof store.dispatch;

(() => {
  if (!process.env.SSR) {
    window.VkStore = store;
  }
})();
