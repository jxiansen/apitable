

import { AutomationTriggerEntity } from '../entities/automation.trigger.entity';

export interface IResourceTriggerGroupVo {
  [resourceId: string]: AutomationTriggerEntity[]
}
