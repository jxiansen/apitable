
import { Injectable } from '@nestjs/common';
import { maxRobotActionCount } from 'app.environment';
import { CommonException, ServerException } from 'shared/exception';
import { AutomationActionRepository } from '../repositories/automation.action.repository';

@Injectable()
export class RobotActionService {

  constructor(
    private readonly automationActionRepository: AutomationActionRepository
  ) {
  }

  /**
   * Finds the previous and the next node of the current node.
   * Then currentNode.nextNode.prevNode <- currentNode.prevNode.
   * It makes sure that the robot's sequence of actions.
   *
   * @param userId    the operator
   * @param actionId  the deleted action's id
   */
  async deleteRobotActionByActionId(userId: string, actionId: string): Promise<boolean> {
    // Get the action's robot id, and it's previous action.
    const robotRel = await this.automationActionRepository.selectRobotRelByActionId(actionId);
    const robotId = robotRel.robotId;
    // the prevActionId may be null
    const prevActionId = robotRel.prevActionId;
    await this.automationActionRepository.manager.transaction(async() => {
      // Find the action whose prevActionId equals to actionId.
      // If the action exist, set the action's prevActionId as prevActionId.
      await this.automationActionRepository.updateRobotPrevActionIdByOldPrevActionId(userId, robotId, prevActionId, actionId);
      // Update the action's deleted flag.
      await this.automationActionRepository.deleteActionByActionId(userId, actionId);
    });
    return true;
  }

  async checkCreateActionCount(robotId: string) {
    const count = await this.automationActionRepository.selectCountByRobotId(robotId);
    if (count >= maxRobotActionCount) {
      throw new ServerException(CommonException.ROBOT_ACTION_CREATE_OVER_MAX_COUNT_LIMIT);
    }
  }
}
