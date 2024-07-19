import { Controller, Get, Param, Query } from '@nestjs/common';
import { AutomationRunHistoryRepository } from '../repositories/automation.run.history.repository';

@Controller(['nest/v1/robots/run-history', 'nest/v1/automation/run-history'])
export class RobotRunHistoryController {
  constructor(private readonly automationRunHistoryRepository: AutomationRunHistoryRepository) {}

  @Get('/')
  getRunHistory(@Query('robotId') robotId: string, @Query('page') page = 1, @Query('size') size = 20) {
    // max pagesize 20
    const pageSize = Math.min(size, 20);
    const offset = (page - 1) * pageSize;
    return this.automationRunHistoryRepository.getRunHistoryByRobotId(robotId, offset, pageSize);
  }

  @Get('/:taskId')
  getRunHistoryDetail(@Param('taskId') taskId: string) {
    return this.automationRunHistoryRepository.getRunHistoryByTaskId(taskId);
  }
}
