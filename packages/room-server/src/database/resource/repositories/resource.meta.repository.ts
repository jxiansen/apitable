import { IResourceMeta, IResourceRevision } from '@apitable/core';
import { EntityRepository, In, Repository } from 'typeorm';
import { ResourceMetaEntity } from '../entities/resource.meta.entity';

@EntityRepository(ResourceMetaEntity)
export class ResourceMetaRepository extends Repository<ResourceMetaEntity> {
  /**
   * Obtain the metadata entity of the given resource.
   */
  public async selectMetaByResourceId(resourceId: string): Promise<IResourceMeta> {
    const meta = await this.findOne({
      select: ['metaData'],
      where: [{ resourceId, isDeleted: false }],
    });
    return meta?.metaData || {};
  }

  /**
   * Update the metadata entity.
   *
   * @param resourceId resource ID
   * @param userId user ID
   * @param metaData updated metaData
   */
  public async updateMetaDataByResourceId(resourceId: string, userId: string, metaData: IResourceMeta) {
    const meta = await this.selectMetaByResourceId(resourceId);
    return this.update(
      { resourceId },
      {
        metaData: { ...meta, ...metaData },
        updatedBy: userId,
      },
    );
  }

  public async updateMetaAndRevision(resourceId: string, userId: string, metaData: IResourceMeta, revision: number) {
    const meta = await this.selectMetaByResourceId(resourceId);
    return this.update(
      { resourceId },
      {
        metaData: { ...meta, ...metaData },
        updatedBy: userId,
        revision,
      },
    );
  }

  /**
   * Obtain the revision numbers of multiple resources
   * Notice: In fact, return data Revision is string type, not number type.
   *
   * @param resourceIds resource ID array
   */
  public async getRevisionByRscIds(resourceIds: string[]): Promise<IResourceRevision[]> {
    return await this.find({
      select: ['resourceId', 'revision'],
      where: {
        resourceId: In(resourceIds),
        isDeleted: 0,
      },
    });
  }

  /**
   * Obtain the revision number of a resource
   */
  selectRevisionByResourceId(resourceId: string): Promise<{ revision: number } | undefined> {
    return this.findOne({
      select: ['revision'],
      where: [{ resourceId, isDeleted: false }],
    });
  }
}
