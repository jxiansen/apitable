

package com.apitable.internal.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * space subscription plan resource view.
 */
@Data
@Schema(description = "space subscription plan resource view")
public class InternalSpaceApiUsageVo {

    @Schema(description = "whether to allow over limiting", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isAllowOverLimit;

    @Schema(description = "api usage used", example = "10000", deprecated = true)
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    @Deprecated(since = "1.8.0", forRemoval = true)
    private Long apiUsageUsedCount;

    @Schema(description = "api call nums used current month", example = "10000")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long apiCallUsedNumsCurrentMonth;

    @Schema(description = "maximum api usage", example = "60000", deprecated = true)
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    @Deprecated(since = "1.8.0", forRemoval = true)
    private Long maxApiUsageCount;

    @Schema(description = "maximum api usage", example = "60000")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long apiCallNumsPerMonth;
}
