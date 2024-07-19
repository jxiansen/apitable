

import { Api, StoreActions } from '@apitable/core';
import { store } from 'pc/store';

let folderId: string | undefined;
let viewId: string | undefined;
let dashboardId: string | undefined;
let mirrorId: string | undefined;
let aiId: string | undefined;
let automationId: string | undefined;

store.subscribe(function folderIdChange() {
  const previousFolderId = folderId;
  const previousViewId = viewId;
  const previousDashboard = dashboardId;
  const previousMirrorId = mirrorId;
  const previousAIId = aiId;
  const previousAutomationId = automationId;

  const state = store.getState();
  // The userInfo is not updated until it is loaded.
  if (!state.user.info) {
    return;
  }

  const datasheetId = state.pageParams.datasheetId;
  const templateId = state.pageParams.templateId;
  const shareId = state.pageParams.shareId;

  folderId = state.pageParams.folderId;
  viewId = state.pageParams.viewId;
  mirrorId = state.pageParams.mirrorId;
  dashboardId = state.pageParams.dashboardId;
  aiId = state.pageParams.aiId;
  automationId = state.pageParams.automationId;

  if (folderId && previousFolderId !== folderId && !templateId && !shareId) {
    Api.keepTabbar({
      nodeId: folderId,
    });
    store.dispatch(StoreActions.updateUserInfo({ activeNodeId: folderId }));
    return;
  }

  if (automationId && previousAutomationId !== automationId && !templateId && !shareId) {
    Api.keepTabbar({
      nodeId: automationId,
    });
    store.dispatch(StoreActions.updateUserInfo({ activeNodeId: automationId }));
    return;
  }

  if (aiId && previousAIId !== aiId && !templateId && !shareId) {
    Api.keepTabbar({
      nodeId: aiId,
    });
    store.dispatch(StoreActions.updateUserInfo({ activeNodeId: aiId }));
    return;
  }

  if (dashboardId && dashboardId !== previousDashboard && !templateId && !shareId) {
    Api.keepTabbar({
      nodeId: dashboardId,
    });
    store.dispatch(StoreActions.updateUserInfo({ activeNodeId: dashboardId }));
    return;
  }

  if (mirrorId && mirrorId !== previousMirrorId && !templateId && !shareId) {
    Api.keepTabbar({
      nodeId: mirrorId,
    });
    store.dispatch(StoreActions.updateUserInfo({ activeNodeId: mirrorId }));
    return;
  }

  if (viewId && viewId !== previousViewId && !templateId && !shareId && !mirrorId) {
    Api.keepTabbar({
      nodeId: datasheetId,
      viewId,
    });

    store.dispatch(StoreActions.updateUserInfo({ activeNodeId: datasheetId, activeViewId: viewId }));
    return;
  }
});
