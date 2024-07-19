// reducers for data subscribe(follow)
import produce from 'immer';
import { ISetSubscriptionsAction, ISubscriptions } from '../../../../exports/store/interfaces';
import { SET_SUBSCRIPTIONS } from '../../../shared/store/action_constants';

export const subscriptions = produce((subscriptions: ISubscriptions = [], action: ISetSubscriptionsAction) => {
  switch (action.type) {
    case SET_SUBSCRIPTIONS: {
      return action.payload;
    }
    default: {
      return subscriptions;
    }
  }
}, [] as ISubscriptions);
