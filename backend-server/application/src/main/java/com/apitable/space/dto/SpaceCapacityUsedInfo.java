

package com.apitable.space.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Space Capacity Used Info.
 */
@Data
@Schema(description = "space capacity info")
public class SpaceCapacityUsedInfo {

    /**
     * subscription package capacity used sizes.
     */
    private Long currentBundleCapacityUsedSizes;

    /**
     * gift capacity used sizes.
     */
    private Long giftCapacityUsedSizes;
}
