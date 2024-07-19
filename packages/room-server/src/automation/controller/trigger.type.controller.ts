import { Controller, Get, Query } from '@nestjs/common';
import { RobotTriggerTypeService } from '../services/robot.trigger.type.service';

@Controller(['nest/v1/robots/trigger-types', 'nest/v1/automation/trigger-types'])
export class RobotTriggerTypeController {
  constructor(private readonly robotTriggerTypeService: RobotTriggerTypeService) {}

  @Get(['/'])
  getTriggerTypes(@Query('lang') lang: string) {
    return this.robotTriggerTypeService.getTriggerType(lang);
  }
}
