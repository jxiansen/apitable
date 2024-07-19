

import { RecordVision, StoreActions } from '@apitable/core';
import { expandRecordRoute } from 'pc/components/expand_record/expand_record.utils';
import { clearExpandModal } from 'pc/components/expand_record/utils';

import { store } from 'pc/store';

let preRecordId: string | null;

store.subscribe(function routeRecordChange() {
  const state = store.getState();
  const isLogin = state.user.isLogin;
  const { viewId, recordId, shareId, embedId } = state.pageParams;
  // Share page to expand cards even if you are not logged in
  if (!isLogin && !shareId && !embedId) {
    return;
  }

  const isSideRecordOpen = state.space.isSideRecordOpen;

  if (!recordId) {
    preRecordId && clearExpandModal();
    preRecordId = null;
    if (isSideRecordOpen) {
      store.dispatch(StoreActions.toggleSideRecord(false)); // Close the side record card when the recordId does not exist for the route
    }

    return;
  }

  // Compatible with cases where there is no viewId but there is a recordId
  if (!viewId || preRecordId === recordId) {
    return;
  }

  preRecordId = recordId;

  if (!isSideRecordOpen && state.recordVision === RecordVision.Side) {
    store.dispatch(StoreActions.toggleSideRecord(true));
  }

  expandRecordRoute({ preventOpenNewModal: true });
});
