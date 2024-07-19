

import { NodeBaseInfo } from 'database/interfaces';
import { NodeEntity } from 'node/entities/node.entity';
import { INodeExtra } from 'shared/interfaces';
import { EntityRepository, In, Not, Repository } from 'typeorm';

@EntityRepository(NodeEntity)
export class NodeRepository extends Repository<NodeEntity> {
  /**
   * Obtain the number of nodes with the given node ID
   */
  public async selectCountByNodeId(nodeId: string): Promise<number> {
    return await this.count({ where: { nodeId, isRubbish: false } });
  }

  public async selectNameByNodeId(nodeId: string): Promise<string> {
    const nodeEntity = await this.findOne({
      select: ['nodeName'],
      where: { nodeId, isRubbish: false, isDeleted: false },
    });
    return nodeEntity?.nodeName || '';
  }

  /**
   * Obtain the number of templates with the given node ID
   */
  public async selectTemplateCountByNodeId(nodeId: string): Promise<number> {
    return await this.count({ where: { nodeId, isTemplate: true, isRubbish: false } });
  }

  /**
   * Obtain the number of nodes with the given parent node ID
   */
  public async selectCountByParentId(parentId: string): Promise<number> {
    return await this.count({ where: { parentId, isRubbish: false } });
  }

  /**
   * Obtain the ID of the space which the given node belongs to
   */
  public async selectSpaceIdByNodeId(nodeId: string): Promise<{ spaceId: string } | undefined> {
    return await this.createQueryBuilder('vn')
      .select('vn.space_id', 'spaceId')
      .where('vn.node_id = :nodeId', { nodeId })
      .andWhere('vn.is_rubbish = 0')
      .getRawOne<{ spaceId: string }>();
  }

  public async getNodeInfo(nodeId: string): Promise<NodeEntity | undefined> {
    return await this.findOne({
      select: ['nodeId', 'nodeName', 'spaceId', 'parentId', 'icon', 'extra', 'type', 'unitId'],
      where: [{ nodeId, isRubbish: false }],
    });
  }

  public async selectExtraByNodeId(nodeId: string): Promise<{ extra: INodeExtra } | undefined> {
    return await this.createQueryBuilder('vn')
      .select('CONVERT(vn.extra, JSON) as extra')
      .where('vn.node_id = :nodeId', { nodeId })
      .andWhere('vn.is_rubbish = 0')
      .getRawOne();
  }

  public async selectNodeBaseInfoByNodeId(nodeId: string): Promise<NodeBaseInfo | undefined> {
    return await this.findOne({
      select: ['nodeName', 'icon', 'parentId'],
      where: [{ nodeId, isRubbish: false }],
    }).then((result) => {
      if (result) {
        return {
          id: nodeId,
          nodeName: result.nodeName,
          icon: result.icon || '',
          parentId: result.parentId,
        };
      }
      return undefined;
    });
  }

  public async selectNodeNameByNodeIds(nodeIds: string[]): Promise<NodeEntity[]> {
    return await this.find({
      select: ['nodeName', 'nodeId'],
      where: { nodeId: In(nodeIds), isDeleted: 0, isRubbish: 0 },
    });
  }

  /**
   * Obtain the number of unit with the given node ID
   */
  public async selectUnitCountByNodeId(nodeId: string): Promise<number> {
    return await this.count({ where: { nodeId, unitId: Not(0), isRubbish: false, isDeleted: false } });
  }

  public async selectTeamNodeByNodeIds(nodeIds: string[]): Promise<NodeEntity[]> {
    return await this.find({
      select: ['nodeId'],
      where: { nodeId: In(nodeIds), unitId: 0, isDeleted: 0, isRubbish: 0 },
    });
  }
}
