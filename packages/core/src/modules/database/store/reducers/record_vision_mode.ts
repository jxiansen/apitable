import produce from 'immer';
import { IRecordVisionAction, RecordVision } from '../../../../exports/store/interfaces';
import { SET_RECORD_VISION_MODE } from '../../../shared/store/action_constants';

export const recordVision = produce((recordVisionModeDraft: RecordVision = RecordVision.Center, action: IRecordVisionAction) => {
  if (action.type === SET_RECORD_VISION_MODE) {
    recordVisionModeDraft = action.payload;
    return action.payload;
  }
  return recordVisionModeDraft;
}, RecordVision.Center as RecordVision);
