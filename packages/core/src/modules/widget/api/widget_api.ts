import axios from 'axios';
import * as Url from './url.widget';
import Qs from 'qs';
import urlcat from 'urlcat';
import { WidgetReleaseType } from 'modules/database/store/interfaces/resource/widget';
import { IApiWrapper, IWidget } from '../../../exports/store/interfaces';
import { IWidgetTemplateItem } from './widget_api.interface';

// const baseURL = '/nest/v1';

export const readInstallationWidgets = (widgetIds: string[], linkId?: string) => {
  return axios.get(Url.INSTALLATION_WIDGETS, {
    params: {
      widgetIds: widgetIds.join(','),
      linkId,
    },
    // serialize arguement revisions: [1,2,3] to normal GET params revisions=1&revisions=2&revisions=3
    paramsSerializer: (params) => {
      return Qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
};

/**
 * get widget list from widget center
 */
export const getWidgetCenterList = (type: WidgetReleaseType, filter = true) => {
  return axios.post(Url.WIDGET_CENTER_LIST, { type, filter });
};

export const getWidgetsByNodeId = (nodeId: string) => {
  return axios.get(urlcat(Url.GET_NODE_WIDGETS, { nodeId }));
};

export const installWidget = (nodeId: string, packageId: string, name?: string) => {
  return axios.post<IApiWrapper & { data: IWidget }>(Url.INSTALL_WIDGET, {
    nodeId: nodeId,
    widgetPackageId: packageId,
    name,
  });
};

export const getRecentInstalledWidgets = (spaceId: string, unitType?: number) => {
  return axios.get(urlcat(Url.RECENT_INSTALL_WIDGET, { spaceId, unitType }));
};

export const getWidgetsInfoByNodeId = (nodeId: string) => {
  return axios.get(urlcat(Url.GET_NODE_WIDGETS_PREVIOUS, { nodeId }));
};

export const getTemplateList = () => {
  return axios.get<IApiWrapper & { data: IWidgetTemplateItem[] }>(Url.GET_TEMPLATE_LIST);
};

/**
 * unpublish widget
 * @param widgetPackageId
 * @returns
 */
export const unpublishWidget = (widgetPackageId: string) => {
  return axios.post(Url.UNPUBLISH_WIDGET, { packageId: widgetPackageId });
};

/**
 * transfer widget to others
 *
 * @param packageId
 * @param transferMemberId
 * @returns
 */
export const transferWidget = (packageId: string, transferMemberId: string) => {
  return axios.post(Url.TRANSFER_OWNER, { packageId, transferMemberId });
};
