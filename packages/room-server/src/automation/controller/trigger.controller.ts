

import { Body, Controller, Headers, Param, Patch, Post } from '@nestjs/common';
import { UserService } from 'user/services/user.service';
import { AutomationTriggerRepository } from '../repositories/automation.trigger.repository';
import { TriggerCreateRo } from '../ros/trigger.create.ro';
import { TriggerEventHelper } from 'automation/events/helpers/trigger.event.helper';

@Controller(['nest/v1/robots/triggers', 'nest/v1/automation/triggers'])
export class RobotTriggerController {
  constructor(
    private readonly automationTriggerRepository: AutomationTriggerRepository,
    private readonly userService: UserService,
    private readonly triggerEventHelper: TriggerEventHelper,
  ) { }

  @Post(['/'])
  async createTrigger(@Body() trigger: TriggerCreateRo, @Headers('cookie') cookie: string) {
    const user = await this.userService.getMe({ cookie });
    let resourceId = '';
    if (trigger.input) {
      const triggerInput = this.triggerEventHelper.renderInput(trigger.input);
      resourceId = triggerInput?.datasheetId || triggerInput?.formId || '';
    }
    return this.automationTriggerRepository.createTrigger(trigger, user.userId, resourceId);
  }

  @Patch(['/:triggerId'])
  async changeTriggerTypeId(
    @Headers('cookie') cookie: string,
    @Param('triggerId') triggerId: string,
    @Body() data: { triggerTypeId?: string, input?: object }
  ) {
    const { userId } = await this.userService.getMe({ cookie });
    if (data.triggerTypeId) {
      return this.automationTriggerRepository.changeTriggerTypeId(triggerId, data.triggerTypeId, userId);
    }
    if (data.input) {
      const triggerInput = this.triggerEventHelper.renderInput(data.input);
      const resourceId = triggerInput?.datasheetId || triggerInput?.formId || '';
      return this.automationTriggerRepository.updateTriggerInput(triggerId, data.input, userId, resourceId);
    }
    return { ok: false, msg: 'nothing changed' };
  }

}
