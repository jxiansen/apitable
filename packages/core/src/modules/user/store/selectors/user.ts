import { IReduxState } from 'exports/store/interfaces';

export function getUserState(state: IReduxState) {
  return state.user;
}

export function getUserTimeZone(state: IReduxState): string | undefined {
  return state.user?.info?.timeZone ?? undefined;
}

export function getUserLocale(state: IReduxState): string | undefined {
  const locale = state.user?.info?.locale ?? undefined;
  if (locale) {
    return locale.toLowerCase().split('_').join('-');
  }
  return undefined;
}
