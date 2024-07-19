import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from 'user/services/user.service';
import { AutomationRobotRepository } from '../repositories/automation.robot.repository';
import { RobotCreateRo } from '../ros/robot.create.ro';
import { AutomationService } from '../services/automation.service';
import { RobotRobotService } from '../services/robot.robot.service';
import { AutomationTriggerRepository } from '../repositories/automation.trigger.repository';
import { AutomationActionRepository } from '../repositories/automation.action.repository';
import { NodeService } from 'node/services/node.service';

@Controller(['nest/v1/robots', 'nest/v1/automation/robots'])
export class RobotController {
  constructor(
    private readonly automationRobotRepository: AutomationRobotRepository,
    private readonly automationActionRepository: AutomationActionRepository,
    private readonly automationTriggerRepository: AutomationTriggerRepository,
    private readonly automationService: AutomationService,
    private readonly robotService: RobotRobotService,
    private readonly userService: UserService,
    private readonly nodeService: NodeService,
  ) {}

  @Get(['/'])
  async getRobotListByResourceId(@Query('resourceId') resourceId: string, @Headers('cookie') cookie: string) {
    const { userId } = await this.userService.getMe({ cookie });
    await this.nodeService.checkUserForNode(userId, resourceId);
    return this.robotService.getRobotListByResourceId(resourceId);
  }

  @Post(['/'])
  async createRobot(@Body() robot: RobotCreateRo, @Headers('cookie') cookie: string) {
    const user = await this.userService.getMe({ cookie });
    await this.automationService.checkCreateRobotPermission(robot.resourceId);
    return this.automationRobotRepository.createRobot(robot, user.userId);
  }

  @Get(['/:robotId'])
  getDatePack(@Param('robotId') robotId: string) {
    return this.robotService.getRobotDetailById(robotId);
  }

  @Delete(['/:robotId'])
  async deleteRobot(@Param('robotId') robotId: string, @Headers('cookie') cookie: string) {
    const { userId } = await this.userService.getMe({ cookie });
    return this.automationRobotRepository.deleteRobot(robotId, userId);
  }

  @Patch(['/:robotId'])
  async updateRobot(@Param('robotId') robotId: string, @Body() robot: { name?: string; description?: string }, @Headers('cookie') cookie: string) {
    const { userId } = await this.userService.getMe({ cookie });
    const { name, description } = robot;
    if (name) {
      return this.automationRobotRepository.updateRobot(robotId, { name }, userId);
    }
    if (description) {
      return this.automationRobotRepository.updateRobot(robotId, { description }, userId);
    }
    return { ok: false, msg: 'nothing changed' };
  }

  @Get('/:robotId/base-info')
  async getRobotBaseInfo(@Param('robotId') robotId: string) {
    return await this.robotService.getRobotBaseInfoByIds([robotId]);
  }

  @Get(['/:robotId/trigger'])
  public async getRobotTrigger(@Param('robotId') robotId: string) {
    return await this.automationTriggerRepository.selectTriggerInfoByRobotId(robotId);
  }

  @Get(['/:robotId/actions'])
  public async getRobotActions(@Param('robotId') robotId: string) {
    const actions = await this.automationActionRepository.selectActionInfosByRobotId(robotId);
    // The iRobot interface's action's action id named id, and action type id named type id.
    actions.forEach((action) => {
      action.id = action.actionId;
      action.typeId = action.actionTypeId;
    });
    return actions;
  }

  @Post(['/:robotId/active'])
  async activeRobot(@Param('robotId') robotId: string, @Headers('cookie') cookie: string) {
    const user = await this.userService.getMe({ cookie });
    return this.automationService.activeRobot(robotId, user);
  }

  @Post(['/:robotId/deactive'])
  async deActiveRobot(@Param('robotId') robotId: string, @Headers('cookie') cookie: string) {
    const user = await this.userService.getMe({ cookie });
    return this.automationRobotRepository.deActiveRobot(robotId, user.userId);
  }
}
