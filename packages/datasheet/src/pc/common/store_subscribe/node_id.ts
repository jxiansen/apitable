

import { NotificationStore } from 'pc/notification_store';
import { store } from 'pc/store';

let preNodeId: string | undefined;

store.subscribe(function nodeIdChange() {
  const state = store.getState();
  const { nodeId } = state.pageParams;
  if (!nodeId || preNodeId === nodeId) {
    return;
  }
  preNodeId = nodeId;
  // send recently browsed node message
  NotificationStore.recentlyBrowsedNode(nodeId);
});
