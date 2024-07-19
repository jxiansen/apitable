import { NodeDescEntity } from '../entities/node.desc.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(NodeDescEntity)
export class NodeDescRepository extends Repository<NodeDescEntity> {
  public async selectDescriptionByNodeId(nodeId: string): Promise<{ description: string } | undefined> {
    return await this.createQueryBuilder('vnd')
      .select('vnd.description', 'description')
      .where('vnd.node_id = :nodeId', { nodeId })
      .getRawOne<{ description: string }>();
  }
}
