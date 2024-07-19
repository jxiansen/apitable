

import {
  ILoadFieldPermissionMapAction, IResetFieldPermissionMapAction, IUpdateFieldPermissionMapAction, IUpdateFieldPermissionSettingAction
} from 'modules/database/store/actions/resource';

import {
  LOAD_FIELD_PERMISSION_MAP, RESET_FIELD_PERMISSION_MAP, UPDATE_FIELD_PERMISSION_MAP, UPDATE_FIELD_PERMISSION_SETTING
} from '../../../../../shared/store/action_constants';
import produce from 'immer';
import { IFieldPermissionMap } from '../../../../../../exports/store/interfaces';

type IFieldPermissionAction = IUpdateFieldPermissionMapAction | IResetFieldPermissionMapAction | ILoadFieldPermissionMapAction
  | IUpdateFieldPermissionSettingAction;

export const fieldPermissionMap = (state = {}, action: IFieldPermissionAction) => {

  switch (action.type) {
    case UPDATE_FIELD_PERMISSION_MAP: {
      if (!state) {
        return action.payload;
      }
      return {
        ...state,
        ...action.payload
      };
    }
    case RESET_FIELD_PERMISSION_MAP: {
      return produce(state, draft => {
        if (draft[action.payload]) {
          delete draft[action.payload];
        }
        return draft;
      });
    }
    case LOAD_FIELD_PERMISSION_MAP: {
      return action.payload;
    }
    case UPDATE_FIELD_PERMISSION_SETTING: {
      return produce(state, (draft: IFieldPermissionMap) => {
        const { fieldId, setting } = action.payload;
        if (!draft || !draft[fieldId]) {
          return draft;
        }
        draft[fieldId]!.setting = setting;
        return draft;
      });
    }
    default: {
      return state;
    }
  }
};

