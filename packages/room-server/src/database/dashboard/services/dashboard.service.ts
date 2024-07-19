

import { IDashboardLayout, IDashboardWidgetMap, IResourceMeta, IServerDashboardPack } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { MetaService } from 'database/resource/services/meta.service';
import { NodeService } from 'node/services/node.service';
import { ResourceException, ServerException } from 'shared/exception';
import { IAuthHeader } from 'shared/interfaces';
import { RestService } from 'shared/services/rest/rest.service';
import { NodeDetailInfo } from '../../interfaces';

@Injectable()
export class DashboardService {
  constructor(
    private readonly nodeService: NodeService,
    private readonly restService: RestService,
    private readonly resourceMetaService: MetaService,
  ) {
  }

  async fetchDashboardPack(dashboardId: string, auth: IAuthHeader): Promise<IServerDashboardPack> {
    const baseNodeInfo = await this.nodeService.getNodeDetailInfo(dashboardId, auth, { internal: true, notDst: true, main: true });
    return this.fetchPack(dashboardId, auth, baseNodeInfo);
  }

  async fetchTemplateDashboardPack(templateId: string, dashboardId: string, auth: { token: string; cookie: string }): Promise<IServerDashboardPack> {
    const baseNodeInfo = await this.nodeService.getNodeDetailInfo(dashboardId, auth, { internal: false, notDst: true, main: true });
    return await this.fetchPack(dashboardId, auth, baseNodeInfo, templateId);
  }

  async fetchShareDashboardPack(shareId: string, dashboardId: string, auth: IAuthHeader): Promise<IServerDashboardPack> {
    const baseNodeInfo = await this.nodeService.getNodeDetailInfo(dashboardId, auth, { internal: false, notDst: true, main: true, shareId });
    return await this.fetchPack(dashboardId, auth, baseNodeInfo, shareId);
  }

  async fetchPack(dashboardId: string, auth: IAuthHeader, baseNodeInfo: NodeDetailInfo, linkId?: string): Promise<IServerDashboardPack> {
    const meta = await this.resourceMetaService.selectMetaByResourceId(dashboardId);
    const dashboard = {
      ...baseNodeInfo.node,
      snapshot: {
        widgetInstallations: meta,
      },
    };

    const widgetMap = await this.fetchWidgetMapByIds(meta, auth, linkId);
    return {
      dashboard,
      widgetMap,
    };
  }

  private async fetchWidgetMapByIds(meta: IResourceMeta, auth: IAuthHeader, linkId?: string): Promise<IDashboardWidgetMap> {
    if (!Object.keys(meta).length) {
      return {};
    }
    const layout: IDashboardLayout[] = meta['layout'] || [];
    const installWidgetIds = layout.map(v => v.id);
    if (!installWidgetIds.length) {
      return {};
    }
    try {
      return await this.restService.fetchWidget(auth, installWidgetIds.join(','), linkId);
    } catch (e) {
      throw new ServerException(ResourceException.FETCH_WIDGET_ERROR);
    }
  }
}
