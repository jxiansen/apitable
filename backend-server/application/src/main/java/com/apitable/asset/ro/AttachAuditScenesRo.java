

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
public class AttachAuditScenesRo {

    @Schema(description = "Audit results of image sensitive persons",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Yellow identification results of pictures")
    private String politician;

    @Schema(description = "Photo Yellow Identification Review Results",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Yellow identification results of pictures")
    private AttachAuditPulpResultRo pulp;


    @Schema(description = "Audit Results of Photo Violence", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Audit Results of Photo Violence")
    private String terror;
}
