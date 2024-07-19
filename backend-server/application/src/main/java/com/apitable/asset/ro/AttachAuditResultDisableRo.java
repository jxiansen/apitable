

package com.apitable.asset.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Image audit result request parameters.
 * </p>
 */
@Data
@Schema(description = "Image audit result request parameters")
public class AttachAuditResultDisableRo {

    @Schema(description = "Indicates whether the file is disabled. True indicates that the file "
        + "is disabled, and false indicates that the file is not disabled. (You need to enable the "
        + "[Auto Disable] function in the incremental audit configuration)",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Identification of whether the file is disabled")
    private boolean disable;

    private AttachAuditScenesResultRo result;

}
