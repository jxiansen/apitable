

import produce from 'immer';
import { IShareInfo, IShareInfoAction } from '../../../../exports/store/interfaces';
import * as actions from '../../../shared/store/action_constants';

const defaultShareInfo = {};

export const share = produce((shareInfoDraft: IShareInfo = defaultShareInfo, action: IShareInfoAction) => {
  switch (action.type) {
    case actions.SET_SHARE_INFO: {
      return {
        ...shareInfoDraft,
        ...action.payload
      };
    }

    default:
      return shareInfoDraft;
  }
}, defaultShareInfo);
