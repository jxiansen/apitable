

import { SET_THEME } from '../../../../shared/store/action_constants';

export enum ThemeName {
  Light = 'light',
  Dark = 'dark'
}

export interface IThemeAction {
  type: typeof SET_THEME,
  payload: ThemeName;
}