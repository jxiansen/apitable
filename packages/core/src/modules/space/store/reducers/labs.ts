

import produce from 'immer';
import { ILabs, ILabsAction } from '../../../../exports/store/interfaces';
import * as actions from '../../../shared/store/action_constants';

const defaultLabs: ILabs = [];

export const labs = produce((labs: ILabs = defaultLabs, action: ILabsAction) => {
  switch (action.type) {
    case actions.SET_LABS: {
      labs = action.payload;
      return labs;
    }
    default:
      return labs;
  }
}, defaultLabs);
