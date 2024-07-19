

package com.apitable.interfaces.billing.facade;

import com.apitable.interfaces.billing.model.EntitlementRemark;
import com.apitable.interfaces.billing.model.SubscriptionFeature;
import com.apitable.interfaces.billing.model.SubscriptionInfo;
import java.util.List;
import java.util.Map;

/**
 * entitlement service facade.
 */
public interface EntitlementServiceFacade {

    /**
     * get subscription info by space.
     *
     * @param spaceId space id
     * @return SubscriptionInfo
     */
    SubscriptionInfo getSpaceSubscription(String spaceId);

    /**
     * batch get subscription info by space.
     *
     * @param spaceIds space id list
     * @return SubscriptionFeature map
     */
    Map<String, SubscriptionFeature> getSpaceSubscriptions(List<String> spaceIds);

    /**
     * reward gift capacity.
     *
     * @param spaceId space id
     * @param remark  remark
     */
    default void rewardGiftCapacity(String spaceId, EntitlementRemark remark) {
        // Nothing to do default
    }

    default void cancelSubscription(String spaceId) {
        // Nothing to do default
    }
}
