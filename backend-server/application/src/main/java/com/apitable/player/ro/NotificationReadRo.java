

package com.apitable.player.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import lombok.Data;

/**
 * <p>
 * User notification list parameters.
 * </p>
 */
@Data
@Schema(description = "User marked read notification")
public class NotificationReadRo {

    @Schema(description = "Notification ID, supporting batch",
        requiredMode = RequiredMode.REQUIRED, example = "[\"124324324\",\"243242\"]")
    private String[] id;

    @Schema(description = "Full 1 full, 0 incomplete", allowableValues = "range[0,1]",
        type = "Boolean", example = "0")
    private Boolean isAll;
}
