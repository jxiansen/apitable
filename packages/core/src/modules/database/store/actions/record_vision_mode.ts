import { SET_RECORD_VISION_MODE } from 'modules/shared/store/action_constants';
import { RecordVision } from 'exports/store/interfaces';

export const setRecordVision = (recordVision: RecordVision) => {
  return {
    type: SET_RECORD_VISION_MODE,
    payload: recordVision,
  };
};
