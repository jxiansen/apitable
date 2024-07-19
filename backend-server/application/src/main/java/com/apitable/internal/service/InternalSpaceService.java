

package com.apitable.internal.service;

import com.apitable.internal.ro.SpaceStatisticsRo;
import com.apitable.internal.vo.InternalCreditUsageVo;
import com.apitable.internal.vo.InternalSpaceApiRateLimitVo;
import com.apitable.internal.vo.InternalSpaceApiUsageVo;
import com.apitable.internal.vo.InternalSpaceAutomationRunMessageV0;
import com.apitable.internal.vo.InternalSpaceInfoVo;
import com.apitable.internal.vo.InternalSpaceSubscriptionVo;

/**
 * internal space service.
 */
public interface InternalSpaceService {

    /**
     * get space entitlement view.
     *
     * @param spaceId space id
     * @return InternalSpaceSubscriptionVo
     */
    InternalSpaceSubscriptionVo getSpaceEntitlementVo(String spaceId);

    /**
     * get space credit usage.
     *
     * @param spaceId space id
     * @return InternalCreditUsageVo
     */
    InternalCreditUsageVo getSpaceCreditUsageVo(String spaceId);

    /**
     * get space automation run nums.
     *
     * @param spaceId space id
     * @return InternalSpaceAutomationRunMessageV0
     */
    InternalSpaceAutomationRunMessageV0 getAutomationRunMessageV0(String spaceId);

    /**
     * get space api usage in entitlement.
     *
     * @param spaceId space id
     * @return InternalSpaceApiUsageVo
     */
    InternalSpaceApiUsageVo getSpaceEntitlementApiUsageVo(String spaceId);

    /**
     * get space api qps in entitlement.
     *
     * @param spaceId space id
     * @return InternalSpaceApiRateLimitVo
     */
    InternalSpaceApiRateLimitVo getSpaceEntitlementApiRateLimitVo(String spaceId);

    /**
     * get space info.
     *
     * @param spaceId space id
     * @return {@link InternalSpaceInfoVo}
     */
    InternalSpaceInfoVo getSpaceInfo(String spaceId);

    /**
     * update space statistics which stored in cache.
     *
     * @param spaceId space id
     * @param data    data
     */
    void updateSpaceStatisticsInCache(String spaceId, SpaceStatisticsRo data);
}
