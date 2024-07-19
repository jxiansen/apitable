import { IEventInstance, IOPEvent } from '@apitable/core';
import { AutomationTriggerEntity } from '../../entities/automation.trigger.entity';

export type CommonEvent = Omit<IEventInstance<IOPEvent>, 'context'> & {
  context: CommonEventContext;
  beforeApply: boolean;
  metaContext: CommonEventMetaContext;
};

export type CommonEventMetaContext = {
  dstIdTriggersMap: { [datasheetId: string]: AutomationTriggerEntity[] };
  triggerSlugTypeIdMap: { [serviceSlug: string]: string };
  msgIds: string[];
};

export type CommonEventContext = {
  datasheetId: string;
  datasheetName: string;
  recordId: string;
  [key: string]: any;
};
