import { Navigation } from '@apitable/core';
import { Router } from 'pc/components/route_manager/router';
import { store } from 'pc/store';

export const EXPAND_WIDGET = 'EXPAND_WIDGET';

export enum IWidgetFullScreenType {
  Full = '1',
  Normal = '0',
}

export const closeWidgetRoute = (widgetId: string, widgetFullScreen?: IWidgetFullScreenType) => {
  expandWidgetRoute(widgetFullScreen === IWidgetFullScreenType.Normal ? widgetId : '', true);
};

/**
 * Consider the use of scenarios in the space, sharing, templates
 * @param widgetId
 */
export const expandWidgetRoute = (widgetId: string, isReplace?: boolean, widgetFullScreen?: IWidgetFullScreenType) => {
  const state = store.getState();
  const spaceId = state.space.activeId;
  const { datasheetId, dashboardId, viewId, shareId, templateId, categoryId, mirrorId, embedId } = { ...state.pageParams };

  const nodeId = dashboardId || mirrorId || datasheetId;
  const query = { widgetFullScreen };
  if (shareId) {
    const params = { nodeId: nodeId, viewId, widgetId, shareId };
    isReplace ? Router.replace(Navigation.SHARE_SPACE, { params, query }) : Router.push(Navigation.SHARE_SPACE, { params, query });
  } else if (templateId) {
    const params = { nodeId: nodeId, viewId, spaceId, widgetId, categoryId, templateId };
    isReplace ? Router.replace(Navigation.TEMPLATE, { params, query }) : Router.push(Navigation.TEMPLATE, { params, query });
  } else if (embedId) {
    const params = { nodeId: nodeId, widgetId, embedId };
    isReplace ? Router.replace(Navigation.EMBED_SPACE, { params, query }) : Router.push(Navigation.EMBED_SPACE, { params, query });
  } else {
    const params = { nodeId: nodeId, datasheetId, viewId, spaceId, widgetId };
    isReplace ? Router.replace(Navigation.WORKBENCH, { params, query }) : Router.push(Navigation.WORKBENCH, { params, query });
  }
};
