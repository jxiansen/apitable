import axios from 'axios';
import urlcat from 'urlcat';
import * as Url from './url.data';

const baseURL = process.env.NEXT_PUBLIC_NEXT_API;

export const fetchDashboardPack = (dashboardId: string) => {
  return axios.get(urlcat(Url.FETCH_DASHBOARD, { dashboardId }), {
    baseURL,
  });
};

export const fetchShareDashboardPack = (dashboardId: string, shareId: string) => {
  return axios.get(urlcat(Url.FETCH_SHARE_DASHBOARD, { shareId, dashboardId }), {
    baseURL,
  });
};

export const fetchTemplateDashboardPack = (dashboardId: string, templateId: string) => {
  return axios.get(urlcat(Url.FETCH_TEMPLATE_DASHBOARD, { dashboardId, templateId }), {
    baseURL,
  });
};

export const fetchEmbedDashboardPack = (dashboardId: string, embedId: string) => {
  return axios.get(urlcat(Url.FETCH_EMBED_DASHBOARD, { dashboardId, embedId }), {
    baseURL,
  });
};
