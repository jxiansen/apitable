

import { EntityRepository, In, Repository } from 'typeorm';
import { ResourceChangesetEntity } from '../entities/resource.changeset.entity';

@EntityRepository(ResourceChangesetEntity)
export class ResourceChangesetRepository extends Repository<ResourceChangesetEntity> {
  countByResourceIdAndMessageId(resourceId: string, messageId: string): Promise<number> {
    return this.createQueryBuilder('vrc')
      .where('vrc.resource_id = :resourceId', { resourceId })
      .andWhere('vrc.message_id = :messageId', { messageId })
      .getCount();
  }

  /**
   * Obtain the changeset list of a resource with the given revision numbers
   */
  getByResourceIdAndRevisions(resourceId: string, revisions: number[]): Promise<ResourceChangesetEntity[]> {
    return this.find({
      where: [{ resourceId, revision: In(revisions) }],
    });
  }

  /**
   * Obtain the maximum revision number of a resource
   */
  getMaxRevisionByResourceId(resourceId: string): Promise<{ revision: string } | undefined> {
    return this.createQueryBuilder('vrc')
      .select('vrc.revision', 'revision')
      .where('vrc.resource_id = :resourceId', { resourceId })
      .orderBy('vrc.revision', 'DESC')
      .getRawOne<{ revision: string }>();
  }

  /**
   * Obtain the changeset list of a resource with the given revision numbers.
   *
   * The order of the returned changeset list follows that of `revisions`.
   */
  getChangesetOrderList(resourceId: string, startRevision: number, endRevision: number): Promise<any[]> {
    // todo(itou): replace dynamic sql
    return this.query(
      `
        SELECT vrc.message_id messageId, vu.uuid userId, vrc.revision, 
          vrc.resource_id resourceId, vrc.operations, vrc.created_at createdAt
        FROM ${this.manager.connection.options.entityPrefix}resource_changeset vrc
        JOIN ${this.manager.connection.options.entityPrefix}user vu ON vrc.created_by = vu.id
        WHERE vrc.resource_id = ? AND vrc.revision >= ? AND vrc.revision < ? 
        ORDER BY vrc.revision
      `,
      [resourceId, startRevision, endRevision],
    );
  }
}
