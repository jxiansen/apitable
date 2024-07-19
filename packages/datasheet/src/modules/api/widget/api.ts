

import axios from 'axios';
import { IApiWrapper, IWidget, WidgetPackageType, WidgetReleaseType } from '@apitable/core';
import * as Url from './const';

// const baseURL = '/nest/v1';
/**
 * create widget
 * @param name
 * @param spaceId
 * @param packageType
 * @param releaseType
 * @returns
 */
export const createWidget = (
  name: string, spaceId: string, packageType: WidgetPackageType = WidgetPackageType.Custom, releaseType: WidgetReleaseType = WidgetReleaseType.Space
) => {
  return axios.post(Url.CREATE_WIDGET, { name, spaceId, packageType, releaseType });
};

/**
 * Generic interface to support generating a new widget using an existing widget as a template
 *
 */
export const copyWidgetsToNode = (nodeId: string, widgetIds: string[]) => {
  return axios.post(Url.COPY_WIDGET, {
    nodeId,
    widgetIds: widgetIds,
  });
};

export const installWidget = (nodeId: string, packageId: string, name?: string) => {
  return axios.post<IApiWrapper & { data: IWidget }>(Url.INSTALL_WIDGET, {
    nodeId: nodeId,
    widgetPackageId: packageId,
    name
  });
};

