import { ExecuteResult, ICollaCommandDef } from 'command_manager';
import { CollaCommandName } from 'commands/enum';
import { DatasheetActions } from 'commands_actions/datasheet';
import { IRecordAlarm } from '../../exports/store/interfaces';
import { getActiveDatasheetId, getSnapshot } from 'modules/database/store/selectors/resource/datasheet/base';
import { ResourceType, WithOptional } from 'types';
import { getNewId, IDPrefix } from 'utils';

export interface ISetDateTimeCellAlarmOptions {
  cmd: CollaCommandName.SetDateTimeCellAlarm;
  datasheetId?: string;
  fieldId: string;
  recordId: string;
  alarm: WithOptional<IRecordAlarm, 'id'> | null;
}

/**
 * TODO(kailang)
 * Support new alarm clock OP
 */

export const setDateTimeCellAlarm: ICollaCommandDef<ISetDateTimeCellAlarmOptions> = {
  undoable: true,
  execute: (context, options) => {
    const { state: state } = context;
    const { fieldId, recordId, alarm } = options;
    const newAlarmId = getNewId(IDPrefix.DateTimeAlarm);
    const datasheetId = options.datasheetId || getActiveDatasheetId(state)!;
    const snapshot = getSnapshot(state, datasheetId);
    if (!snapshot) {
      return null;
    }

    const actions = DatasheetActions.setDateTimeCellAlarm(snapshot, {
      recordId,
      fieldId,
      alarm: alarm
        ? {
            id: newAlarmId,
            ...alarm,
          }
        : null,
    });
    if (!actions) {
      return null;
    }
    return {
      result: ExecuteResult.Success,
      resourceId: datasheetId,
      resourceType: ResourceType.Datasheet,
      actions,
    };
  },
};
