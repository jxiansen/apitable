

package com.apitable.interfaces.billing.model;

import org.springframework.util.unit.DataSize;

/**
 * data size type of plan feature.
 */
public class DataSizePlanFeature implements PlanFeature<DataSize> {

    private DataSize value;

    public DataSizePlanFeature(DataSize value) {
        this.value = value;
    }

    public void plus(DataSize other) {
        value = DataSize.ofBytes(value.toBytes() + other.toBytes());
    }

    /**
     * unlimited if value is -1.
     *
     * @return true or false
     */
    public boolean isUnlimited() {
        return value.isNegative();
    }

    @Override
    public DataSize getValue() {
        return value;
    }
}
