

import * as ActionConstants from 'modules/shared/store/action_constants';
import { ISubscriptions } from 'exports/store/interfaces';
import { getSubscriptions } from '../../api/datasheet_api';

/**
 * get current datasheet/mirrors' subscribed(followed) record ids
 * @param datasheetId
 * @param mirrorId
 * @returns
 */
export const getSubscriptionsAction = (datasheetId: string, mirrorId?: string) => async (dispatch: any) => {
  const { data } = await getSubscriptions(datasheetId, mirrorId);

  if (data?.success) {
    dispatch(setSubscriptionsAction(data.data || []));
  }
};

/**
 * update current subscribed(followed) records ids
 * @param recordIds
 * @returns
 */
export const setSubscriptionsAction = (recordIds: ISubscriptions) => ({
  type: ActionConstants.SET_SUBSCRIPTIONS,
  payload: recordIds,
});
