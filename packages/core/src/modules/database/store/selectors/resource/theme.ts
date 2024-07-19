import { IReduxState } from '../../../../../exports/store/interfaces';
import { ThemeName } from 'modules/database/store/interfaces/resource/theme';

export const getTheme = (state: IReduxState) => {
  if (!state.theme) return ThemeName.Light;
  return state.theme;
};
