import { ResourceType, StoreActions } from '@apitable/core';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';

let paramsDashboardId: string | undefined;

store.subscribe(() => {
  const state = store.getState();

  const spaceId = state.space.activeId || state.share.spaceId || state.embedInfo?.spaceId;

  if (!spaceId && !state.pageParams.shareId && !state.pageParams.templateId && !state.pageParams.embedId) {
    return;
  }

  if (state.pageParams.embedId && (!spaceId || !resourceService.instance?.initialized)) {
    return;
  }

  const previousParamsDashboardId = paramsDashboardId;
  paramsDashboardId = state.pageParams.dashboardId;

  if (paramsDashboardId === previousParamsDashboardId) {
    return;
  }

  if (!paramsDashboardId) {
    return;
  }

  if (!paramsDashboardId && previousParamsDashboardId) {
    // TODO: Destroy Dashboard
    return;
  }

  const widgetMapKey = Object.keys(state.widgetMap);

  if (widgetMapKey.length) {
    store.dispatch(StoreActions.resetWidget(widgetMapKey));
  }

  resourceService.instance?.initialized &&
    resourceService.instance?.switchResource({
      from: previousParamsDashboardId,
      to: paramsDashboardId!,
      resourceType: ResourceType.Dashboard,
    });
});
