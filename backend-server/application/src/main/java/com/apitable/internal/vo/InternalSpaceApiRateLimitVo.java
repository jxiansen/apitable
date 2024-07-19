

package com.apitable.internal.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * space subscription plan resource view.
 */
@Data
@Schema(description = "space subscription plan resource view")
public class InternalSpaceApiRateLimitVo {

    @Schema(description = "api request numbers per seconds", example = "false")
    private Long qps;
}
