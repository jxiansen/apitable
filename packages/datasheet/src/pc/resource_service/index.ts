

import { Store } from 'redux';
import { IReduxState } from '@apitable/core';
import { onError } from 'pc/resource_service/error';
import { ResourceServiceEnhanced } from './service';

export * from './context';
export const resourceService: { instance: ResourceServiceEnhanced } = { instance: null as any };

export const initResourceService = (store: Store<IReduxState>) => {
  resourceService.instance = new ResourceServiceEnhanced(store, onError);
  (window as any).VkResourceService = resourceService.instance;
  return resourceService.instance;
};
