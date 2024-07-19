

package com.apitable.interfaces.billing.model;

/**
 * Default Subscription.
 *
 * @author ShawnDeng
 */
public class DefaultSubscriptionInfo implements SubscriptionInfo {

    private final String product;

    private final String basePlan;

    private final SubscriptionFeature feature;

    public DefaultSubscriptionInfo() {
        this("CE", "ce_unlimited", new DefaultSubscriptionFeature());
    }

    /**
     * construct.
     *
     * @param product  product name
     * @param basePlan base plan name
     * @param feature  subscription feature
     */
    public DefaultSubscriptionInfo(String product, String basePlan, SubscriptionFeature feature) {
        this.product = product;
        this.basePlan = basePlan;
        this.feature = feature;
    }

    @Override
    public String getProduct() {
        return product;
    }

    @Override
    public boolean isFree() {
        return true;
    }

    @Override
    public boolean onTrial() {
        return false;
    }

    @Override
    public String getBasePlan() {
        return basePlan;
    }

    @Override
    public SubscriptionFeature getFeature() {
        return feature;
    }
}
