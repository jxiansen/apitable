

import { Controller, Get, Query } from '@nestjs/common';
import { RobotActionTypeBaseService } from '../services/robot.action.type.base.service';

@Controller(['nest/v1/robots/action-types', 'nest/v1/automation/action-types'])
export class RobotActionTypeController {
  constructor(
    private readonly robotActionTypeService: RobotActionTypeBaseService,
  ) { }

  @Get(['/'])
  getActionTypes(@Query('lang') lang: string) {
    return this.robotActionTypeService.getActionType(lang);
  }
}
