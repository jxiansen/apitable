

import { Injectable } from '@nestjs/common';
import { DatasheetWidgetRepository } from '../repositories/datasheet.widget.repository';

@Injectable()
export class DatasheetWidgetService {
  constructor(
    private readonly datasheetWidgetRepository: DatasheetWidgetRepository,
  ) {}

  async selectDstIdsByWidgetIds(widgetIds: string[]): Promise<string[] | null> {
    return await this.datasheetWidgetRepository.selectDstIdsByWidgetIds(widgetIds);
  }

  async selectDstIdsByNodeId(nodeId: string): Promise<string[] | null> {
    return await this.datasheetWidgetRepository.selectDstIdsByNodeId(nodeId);
  }
}