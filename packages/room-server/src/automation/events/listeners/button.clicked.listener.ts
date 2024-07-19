

import { defaultEventListenerOptions, IEventListenerOptions, OPEventNameEnums } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ButtonClickedEvent, ButtonClickedEventContext } from 'automation/events/domains/button.clicked.event';
import { isNull } from 'lodash';
import { InjectLogger } from 'shared/common';
import { Logger } from 'winston';
import { ResourceRobotTriggerDto } from '../../dtos/trigger.dto';
import { AutomationService } from '../../services/automation.service';
import { RobotTriggerService } from '../../services/robot.trigger.service';
import { isHandleEvent } from '../helpers/listener.helper';
import { IShouldFireRobot, TriggerEventHelper } from '../helpers/trigger.event.helper';

@Injectable()
export class ButtonClickedListener {
  private readonly options: IEventListenerOptions;

  constructor(
    // @ts-ignore
    @InjectLogger() private readonly logger: Logger,
    private readonly automationService: AutomationService,
    private readonly robotTriggerService: RobotTriggerService,
    private readonly triggerEventHelper: TriggerEventHelper,
  ) {
    this.options = defaultEventListenerOptions;
  }

  @OnEvent(OPEventNameEnums.ButtonClicked, { async: true })
  public async handleButtonClickedEvent(event: ButtonClickedEvent): Promise<string | void> {
    if (!isHandleEvent(event, event.beforeApply, this.options)) {
      return;
    }

    const eventContext = event.context;
    const resourceId = eventContext.datasheetId;
    if (!resourceId) return;
    return await this.automationEventHandler(eventContext);
  }

  private async automationEventHandler(context: ButtonClickedEventContext): Promise<string | void> {
    const trigger = await this.robotTriggerService.getTriggerByTriggerId(context.triggerId);
    if (!trigger || isNull(trigger.input)) {
      return;
    }
    const shouldFireRobot = this.getRenderTrigger(trigger, context);
    if (shouldFireRobot) {
      return await this.automationService.handleTask(shouldFireRobot.robotId, shouldFireRobot.trigger);
    }
  }

  public getRenderTrigger(trigger: ResourceRobotTriggerDto, eventContext: ButtonClickedEventContext): IShouldFireRobot | null {
    const triggerInput = this.triggerEventHelper.renderInput(trigger.input!);
    if (triggerInput.datasheetId === eventContext.datasheetId) {
      return {
        robotId: trigger.robotId,
        trigger: {
          triggerId: trigger.triggerId,
          input: triggerInput,
          output: eventContext,
        },
      };
    }
    return null;
  }
}
