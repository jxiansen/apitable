

package com.apitable.interfaces.billing.model;

/**
 * number type of plan feature.
 */
public class NumberPlanFeature implements PlanFeature<Long> {

    private Long value;

    private final boolean unlimited;

    public NumberPlanFeature(Long value) {
        this(value, value != null && value == -1);
    }

    public NumberPlanFeature(Long value, boolean unlimited) {
        this.value = value;
        this.unlimited = unlimited;
    }

    public void plus(long other) {
        value = value + other;
    }

    /**
     * unlimited if value is -1.
     *
     * @return true or false
     */
    public boolean isUnlimited() {
        return unlimited || (value != null && value == -1);
    }

    @Override
    public Long getValue() {
        return value;
    }
}
