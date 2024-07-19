import { EntityRepository, In, Repository } from 'typeorm';
import { NodeRelInfo } from '../../database/interfaces/internal';
import { NodeRelEntity } from '../entities/node.rel.entity';

@EntityRepository(NodeRelEntity)
export class NodeRelRepository extends Repository<NodeRelEntity> {
  public async selectMainNodeIdByRelNodeId(relNodeId: string): Promise<{ mainNodeId: string } | undefined> {
    return await this.findOne({
      select: ['mainNodeId'],
      where: [{ relNodeId }],
    });
  }

  public async selectRelNodeIdsByMainNodeIds(mainNodeIds: string[]): Promise<string[]> {
    return await this.find({
      select: ['relNodeId'],
      where: [{ mainNodeId: In(mainNodeIds) }],
    }).then((res) => res.map((res) => res.relNodeId));
  }

  public async selectRelNodeIdByMainNodeId(mainNodeId: string): Promise<NodeRelEntity[]> {
    return await this.createQueryBuilder('vnr')
      .select('vnr.rel_node_id', 'relNodeId')
      .innerJoin(`${this.manager.connection.options.entityPrefix}node`, 'vn', 'vnr.rel_node_id = vn.node_id')
      .where('vnr.main_node_id = :mainNodeId', { mainNodeId })
      .andWhere('vn.is_rubbish = 0')
      .getRawMany();
  }

  public async selectNodeRelInfo(relNodeId: string): Promise<NodeRelInfo | undefined> {
    return await this.createQueryBuilder('vnr')
      .select('vnr.main_node_id', 'datasheetId')
      .addSelect("JSON_UNQUOTE(JSON_EXTRACT(vnr.extra, '$.viewId'))", 'viewId')
      .addSelect('vn.node_name', 'datasheetName')
      .addSelect('vn.icon', 'datasheetIcon')
      .addSelect('vd.revision', 'datasheetRevision')
      .innerJoin(`${this.manager.connection.options.entityPrefix}node`, 'vn', 'vnr.main_node_id = vn.node_id')
      .leftJoin(`${this.manager.connection.options.entityPrefix}datasheet`, 'vd', 'vn.node_id = vd.dst_id')
      .where('vnr.rel_node_id = :relNodeId', { relNodeId })
      .getRawOne<NodeRelInfo>();
  }

  public async selectNodeRelInfoByIds(relNodeIds: string[]): Promise<NodeRelInfo[] | undefined> {
    return await this.createQueryBuilder('vnr')
      .select('vnr.main_node_id', 'datasheetId')
      .addSelect('vnr.rel_node_id', 'relNodeId')
      .addSelect("JSON_UNQUOTE(JSON_EXTRACT(vnr.extra, '$.viewId'))", 'viewId')
      .addSelect('vn.node_name', 'datasheetName')
      .addSelect('vn.icon', 'datasheetIcon')
      .addSelect('vd.revision', 'datasheetRevision')
      .innerJoin(`${this.manager.connection.options.entityPrefix}node`, 'vn', 'vnr.main_node_id = vn.node_id')
      .leftJoin(`${this.manager.connection.options.entityPrefix}datasheet`, 'vd', 'vn.node_id = vd.dst_id')
      .where('vnr.rel_node_id IN(:...relNodeIds)', { relNodeIds })
      .getRawMany();
  }

  public async selectRelNodeInfoByMainNodeIds(mainNodeIds: string[]): Promise<NodeRelEntity[]> {
    return await this.find({ where: { mainNodeId: In(mainNodeIds) }, select: ['relNodeId', 'mainNodeId'] });
  }
}
