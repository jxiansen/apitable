import { Injectable } from '@nestjs/common';
import { NodeDescRepository } from '../repositories/node.desc.repository';
import { NodeDescEntity } from '../entities/node.desc.entity';
import { IdWorker } from '../../shared/helpers';

@Injectable()
export class NodeDescriptionService {
  constructor(private readonly repository: NodeDescRepository) {}

  async getNodeDesc(nodeId: string): Promise<NodeDescEntity | undefined> {
    return await this.repository.findOne({
      where: {
        nodeId: nodeId,
      },
    });
  }

  async recoverNodeDesc(descs: NodeDescEntity[]) {
    if (descs) {
      descs.forEach((desc) => {
        desc.id = IdWorker.nextId() + '';
      });
      await this.repository.createQueryBuilder().insert().values(descs).execute();
    }
  }

  async getDescription(nodeId: string): Promise<string | null> {
    const rawData = await this.repository.selectDescriptionByNodeId(nodeId);
    if (rawData) return rawData.description;
    return null;
  }
}
