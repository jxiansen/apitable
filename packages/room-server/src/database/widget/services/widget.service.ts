import { IResourceRevision } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { ServerException } from '../../../shared/exception';
import { ResourceException } from '../../../shared/exception/resource.exception';
import { WidgetRepository } from '../repositories/widget.repository';

@Injectable()
export class WidgetService {
  constructor(private readonly widgetRepository: WidgetRepository) {}

  async getNodeIdByWidgetId(widgetId: string): Promise<string> {
    const rawData = await this.widgetRepository.selectNodeIdByWidgetId(widgetId);
    if (!rawData?.nodeId) {
      throw new ServerException(ResourceException.WIDGET_NOT_EXIST);
    }
    return rawData.nodeId;
  }

  async getWidgetInfo(widgetId: string): Promise<{ nodeId: string; revision: number } | undefined> {
    return await this.widgetRepository.getNodeIdAndRevision(widgetId);
  }

  async getStorageByWidgetId(widgetId: string): Promise<{ [key: string]: any }> {
    const rawData = await this.widgetRepository.selectStorageByWidgetId(widgetId);
    if (!rawData?.storage) {
      throw new ServerException(ResourceException.WIDGET_NOT_EXIST);
    }
    return rawData.storage;
  }

  async getDelWidgetIdsByNodeId(nodeId: string): Promise<string[]> {
    const raws = await this.widgetRepository.selectWidgetIdsByNodeIdAndIsDeleted(nodeId, true);
    return raws.map((item) => item.widgetId);
  }

  async getRevisionByWdtIds(widgetIds: string[]): Promise<IResourceRevision[]> {
    return await this.widgetRepository.getRevisionByWdtIds(widgetIds);
  }
}
