

import { CacheManager, StoreActions } from '@apitable/core';
import { updateSubscription } from 'modules/billing';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';

let spaceId: string | null;

store.subscribe(function spaceIdChange() {
  const state = store.getState();
  const previousSpaceId = spaceId;
  spaceId = state.space.activeId;
  const shareId = state.pageParams.shareId;
  const embedId = state.pageParams.embedId;
  if (!spaceId || previousSpaceId === spaceId || shareId || embedId) {
    return;
  }

  // notify.reset(); // Toggle the space and reset the dom element positioned by toast
  console.log('init resourceService: ', spaceId);

  CacheManager.clear();
  resourceService.instance?.destroy();
  resourceService.instance?.init();
  // memberStash.loadMemberList(spaceId);

  store.dispatch(StoreActions.resetUnitInfo());
  // Request subscription information
  updateSubscription?.(spaceId);
});
