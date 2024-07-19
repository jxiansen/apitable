

package com.apitable.internal.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * Internal Permission Ro.
 */
@Data
@Schema(description = "Internal Interface - Permission Request Parameters")
public class InternalPermissionRo {

    @Schema(description = "Node ID list", required = true, example = "[\"fomtujwf5eSWKiMaVw\","
        + "\"dstbw4CZFURbchgP17\"]")
    @NotEmpty(message = "Node ID list cannot be empty")
    private List<String> nodeIds;

    @Schema(description = "Node Share Id", type = "java.lang.String", example =
        "shr8T8vAfehg3yj3McmDG")
    private String shareId;

    @Schema(description = "User Id", type = "java.lang.String", example = "usrddddd")
    private String userId;
}
