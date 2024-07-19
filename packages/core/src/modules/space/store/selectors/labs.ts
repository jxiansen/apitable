import { IReduxState } from '../../../../exports/store/interfaces';

export const labsFeatureOpen = (state: IReduxState, key: string) => {
  return state.labs.includes(key);
};
