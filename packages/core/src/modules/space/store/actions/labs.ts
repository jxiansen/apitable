import * as ActionConstants from 'modules/shared/store/action_constants';
import { ILabs } from '../../../../exports/store/interfaces';

/**
 * set labs features
 */
export const setLabs = (labs: ILabs) => {
  return {
    type: ActionConstants.SET_LABS,
    payload: labs,
  };
};
