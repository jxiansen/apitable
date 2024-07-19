import { OPEventManager, OPEventNameEnums, IReduxState, OP2Event, IRemoteChangeset } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { IOtEventContext } from 'database/ot/interfaces/ot.interface';
import { InjectLogger } from 'shared/common';
import { Logger } from 'winston';
import { OTEventManager } from './ot.event.manager';

/**
 * Event listener service, convert op to domains, and handle related domains listening.
 */
@Injectable()
export class OTEventService {
  opEventManager: OPEventManager;

  constructor(
    // @ts-ignore
    @InjectLogger() private readonly logger: Logger,
  ) {
    const watchedEvents = [
      OPEventNameEnums.CellUpdated,
      OPEventNameEnums.RecordCreated,
      OPEventNameEnums.RecordDeleted,
      OPEventNameEnums.RecordUpdated,
      OPEventNameEnums.RecordCommentUpdated,
      OPEventNameEnums.RecordArchived,
      OPEventNameEnums.RecordUnarchived,
    ];
    this.opEventManager = new OPEventManager({
      options: {
        enableVirtualEvent: false,
        enableCombEvent: false,
        enableEventComplete: false,
      },
      getState: () => {
        return {} as IReduxState;
      },
      op2Event: new OP2Event(watchedEvents),
    });
  }

  async handleChangesets(changesets: IRemoteChangeset[], context: IOtEventContext) {
    if (OTEventManager.isEmpty()) {
      this.logger.debug('OT event executor is empty');
      return;
    }
    this.logger.debug('Begin parse ot events');
    const events = await this.opEventManager.asyncHandleChangesets(changesets);
    if (events.length === 0) {
      return;
    }
    // Execute all
    await OTEventManager.execute(events, context);
  }
}
