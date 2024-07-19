

package com.apitable.interfaces.billing.model;

import static java.util.Collections.emptyList;

import com.apitable.interfaces.billing.model.SubscriptionFeatures.ConsumeFeatures.CapacitySize;
import java.time.LocalDate;
import java.util.List;

/**
 * Subscription Info.
 */
public interface SubscriptionInfo {

    /**
     * return billing version.
     *
     * @return billing version
     */
    default String getVersion() {
        return "V1";
    }

    /**
     * return product name.
     *
     * @return billing product name
     */
    String getProduct();

    /**
     * indicate whether it is free.
     *
     * @return true | false
     */
    boolean isFree();

    /**
     * indicate whether trial period.
     *
     * @return true | false
     */
    boolean onTrial();

    /**
     * return billing mode.
     *
     * @return billing mode
     */
    default String getBillingMode() {
        return null;
    }

    /**
     * billing recurring interval.
     *
     * @return recurring interval
     */
    default String getRecurringInterval() {
        return null;
    }

    /**
     * base plan name.
     *
     * @return base plan name
     */
    String getBasePlan();

    /**
     * add-on plan list.
     *
     * @return plan list
     */
    default List<String> getAddOnPlans() {
        return emptyList();
    }

    /**
     * start date.
     *
     * @return effective start date
     */
    default LocalDate getStartDate() {
        return null;
    }

    /**
     * end date.
     *
     * @return effective end date
     */
    default LocalDate getEndDate() {
        return null;
    }

    /**
     * return billing cycle day of month.
     *
     * @param defaultDayOfMonth default day of month if not free
     * @return billing cycle day of month
     */
    default int cycleDayOfMonth(int defaultDayOfMonth) {
        if (getRecurringInterval() == null || getRecurringInterval().isEmpty()) {
            return defaultDayOfMonth;
        }
        return getStartDate().getDayOfMonth();
    }

    /**
     * feature map.
     *
     * @return billing plan feature
     */
    SubscriptionFeature getFeature();

    /**
     * return gift capacity.
     *
     * @return gift capacity
     */
    default CapacitySize getGiftCapacity() {
        return new CapacitySize(0L);
    }

    /**
     * return total capacity.
     *
     * @return total capacity
     */
    default CapacitySize getTotalCapacity() {
        return new CapacitySize(getFeature().getCapacitySize().getValue().toBytes());
    }

    /**
     * return config.
     *
     * @return config
     */
    default SubscriptionConfig getConfig() {
        return SubscriptionConfig.create();
    }
}
