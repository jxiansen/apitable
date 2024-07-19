

package com.apitable.interfaces.billing.facade;

import com.apitable.interfaces.billing.model.DefaultSubscriptionInfo;
import com.apitable.interfaces.billing.model.SubscriptionFeature;
import com.apitable.interfaces.billing.model.SubscriptionInfo;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * default entitlement service facade implement.
 */
public class DefaultEntitlementServiceFacadeImpl implements EntitlementServiceFacade {

    @Override
    public SubscriptionInfo getSpaceSubscription(String spaceId) {
        return new DefaultSubscriptionInfo();
    }

    @Override
    public Map<String, SubscriptionFeature> getSpaceSubscriptions(List<String> spaceIds) {
        return spaceIds.stream()
            .collect(Collectors.toMap(s -> s, s -> getSpaceSubscription(s).getFeature()));
    }
}
