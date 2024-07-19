import { IResourceRevision } from '@apitable/core';
import { WidgetEntity } from '../entities/widget.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(WidgetEntity)
export class WidgetRepository extends Repository<WidgetEntity> {
  selectNodeIdByWidgetId(widgetId: string): Promise<{ nodeId: string } | undefined> {
    return this.findOne({
      select: ['nodeId'],
      where: [{ widgetId, isDeleted: false }],
    });
  }

  selectStorageByWidgetId(widgetId: string): Promise<WidgetEntity | undefined> {
    return this.findOne({
      select: ['storage'],
      where: [{ widgetId, isDeleted: false }],
    });
  }

  selectWidgetIdsByNodeIdAndIsDeleted(nodeId: string, isDeleted?: boolean): Promise<WidgetEntity[]> {
    return this.find({
      select: ['widgetId'],
      where: [{ nodeId, isDeleted }],
    });
  }

  /**
   * Query revisions corresponding to multiple widgets
   */
  public async getRevisionByWdtIds(widgetIds: string[]): Promise<IResourceRevision[]> {
    return await this.createQueryBuilder()
      .select('widget_id', 'resourceId')
      .addSelect('revision')
      .where('widget_id IN (:...widgetIds)', { widgetIds })
      .andWhere('is_deleted = 0')
      .getRawMany<IResourceRevision>();
  }

  getNodeIdAndRevision(widgetId: string): Promise<{ nodeId: string; revision: number } | undefined> {
    return this.findOne({
      select: ['nodeId', 'revision'],
      where: [{ widgetId }],
    });
  }
}
