import { IFieldPermissionMap, IFieldRoleSetting, IReduxState } from 'exports/store/interfaces';
import {
  LOAD_FIELD_PERMISSION_MAP,
  RESET_FIELD_PERMISSION_MAP,
  UPDATE_FIELD_PERMISSION_MAP,
  UPDATE_FIELD_PERMISSION_SETTING,
} from 'modules/shared/store/action_constants';
import { DatasheetApi } from 'exports/api';
import { batchActions } from 'redux-batched-actions';

export interface IUpdateFieldPermissionMapAction {
  type: typeof UPDATE_FIELD_PERMISSION_MAP;
  payload: IFieldPermissionMap;
  datasheetId: string;
}

export const updateFieldPermissionMap = (fieldPermissionMap: IFieldPermissionMap, datasheetId: string): IUpdateFieldPermissionMapAction => {
  return {
    type: UPDATE_FIELD_PERMISSION_MAP,
    payload: fieldPermissionMap,
    datasheetId,
  };
};

export interface IUpdateFieldPermissionSettingAction {
  type: typeof UPDATE_FIELD_PERMISSION_SETTING;
  payload: {
    fieldId: string;
    setting: IFieldRoleSetting;
  };
  datasheetId: string;
}

export const updateFieldPermissionSetting = (
  fieldId: string,
  setting: IFieldRoleSetting,
  datasheetId: string
): IUpdateFieldPermissionSettingAction => {
  return {
    type: UPDATE_FIELD_PERMISSION_SETTING,
    payload: { fieldId, setting },
    datasheetId,
  };
};

export interface IResetFieldPermissionMapAction {
  type: typeof RESET_FIELD_PERMISSION_MAP;
  payload: string;
  datasheetId: string;
}

export const resetFieldPermissionMap = (fieldId: string, datasheetId: string) => {
  return {
    type: RESET_FIELD_PERMISSION_MAP,
    payload: fieldId,
    datasheetId,
  };
};

export interface ILoadFieldPermissionMapAction {
  type: typeof LOAD_FIELD_PERMISSION_MAP;
  payload: IFieldPermissionMap;
  datasheetId: string;
}

export const loadFieldPermissionMap = (fieldPermissionMap: IFieldPermissionMap, datasheetId: string): ILoadFieldPermissionMapAction => {
  return {
    type: LOAD_FIELD_PERMISSION_MAP,
    payload: fieldPermissionMap,
    datasheetId,
  };
};

export const fetchFieldPermission = (dstIds: string[]) => {
  return (dispatch: any, getState: () => IReduxState) => {
    const state = getState();
    const shareId = state.pageParams.shareId;
    DatasheetApi.getFieldPermissionMap(dstIds, shareId).then(
      (res) => {
        const { success, data } = res.data;
        if (success) {
          const actions: ILoadFieldPermissionMapAction[] = [];
          for (const v of data) {
            actions.push(loadFieldPermissionMap(v.fieldPermissionMap, v.datasheetId));
          }
          dispatch(batchActions(actions));
        }
      },
      (err) => {
        console.error('getFieldPermissionMap error', err);
      }
    );
  };
};
