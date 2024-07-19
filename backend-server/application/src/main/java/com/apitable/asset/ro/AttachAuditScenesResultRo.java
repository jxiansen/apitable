

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
public class AttachAuditScenesResultRo {

    @Schema(description = "The status code 0 is successful, 1 is waiting for processing, 2 is "
        + "processing, 3 processing failed, and 4 notification submission failed.",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Processing queue name")
    private String code;

    @Schema(description = "Message Results", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Message Results")
    private String message;

    @Schema(description = "The status code 0 is successful, 1 is waiting for processing, 2 is "
        + "processing, 3 processing failed, and 4 notification submission failed.",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Processing queue name")
    private AttachAuditScenesRo scenes;

    @Schema(description = "Processing queue name", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Processing queue name")
    private String suggestion;

}
