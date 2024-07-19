

package com.apitable.interfaces.billing.model;

/**
 * boolean type of plan feature.
 */
public class BooleanPlanFeature implements PlanFeature<Boolean> {

    private final Boolean value;

    public BooleanPlanFeature(Boolean value) {
        this.value = value;
    }

    @Override
    public Boolean getValue() {
        return value;
    }
}
