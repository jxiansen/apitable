import { IDPrefix, IRobotTask } from '@apitable/core';
import { RunHistoryStatusEnum } from 'shared/enums/automation.enum';
import { EntityRepository, In, Repository } from 'typeorm';
import { AutomationRunHistoryEntity } from '../entities/automation.run.history.entity';

@EntityRepository(AutomationRunHistoryEntity)
export class AutomationRunHistoryRepository extends Repository<AutomationRunHistoryEntity> {
  getRunHistoryByRobotId(robotId: string, skip = 0, take = 10) {
    return this.find({
      select: ['taskId', 'robotId', 'createdAt', 'status'],
      where: {
        robotId,
        status: In([RunHistoryStatusEnum.RUNNING, RunHistoryStatusEnum.SUCCESS, RunHistoryStatusEnum.FAILED]),
      },
      order: {
        createdAt: 'DESC',
      },
      skip,
      take,
    });
  }

  getRunHistoryByTaskId(taskId: string) {
    return this.findOneOrFail({
      where: {
        taskId,
      },
    }).then((result) => {
      if (result.data && result.data.hasOwnProperty('executedNodeIds')) {
        const executedNodeIds = result.data['executedNodeIds'] as string[];
        if (executedNodeIds.length) {
          const nodeIds = [];
          let executedTriggerId;
          for (const nodeId of executedNodeIds) {
            if (nodeId.startsWith(IDPrefix.AutomationTrigger) && !executedTriggerId) {
              executedTriggerId = nodeId;
              nodeIds.push(nodeId);
            }
            if (nodeId.startsWith(IDPrefix.AutomationAction)) {
              nodeIds.push(nodeId);
            }
          }
          result.data['executedNodeIds'] = nodeIds;
        }
      }
      return result;
    });
  }

  selectContextByTaskIdAndTriggerId(taskId: string, triggerId: string): Promise<IRobotTask | undefined> {
    return this.createQueryBuilder('rhs')
      .select('robot_id', 'robotId')
      .addSelect('task_id', 'taskId')
      .addSelect('status', 'status')
      .addSelect("JSON_EXTRACT(rhs.data, CONCAT('$.', :triggerId, '.input'))", 'triggerInput')
      .addSelect("JSON_EXTRACT(rhs.data, CONCAT('$.', :triggerId, '.output'))", 'triggerOutput')
      .where('rhs.task_id = :taskId', { taskId })
      .setParameter('triggerId', triggerId)
      .getRawOne<IRobotTask>();
  }

  async updateStatusByTaskId(taskId: string, status: RunHistoryStatusEnum): Promise<number | undefined> {
    const r = await this.update({ taskId }, { status });
    return r.affected;
  }

  async selectRobotIdByTaskId(taskId: string): Promise<string | undefined> {
    const result = await this.findOne({ select: ['robotId'], where: { taskId } });
    return result?.robotId;
  }

  async selectStatusByTaskId(taskId: string): Promise<number | undefined> {
    return await this.findOne({ select: ['status'], where: { taskId } }).then((result) => result?.status);
  }
}
