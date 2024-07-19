

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
public class AttachAuditResultRo {

    @Schema(description = "The label to which the picture belongs. A picture can only have one "
        + "label", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "The label to which the picture belongs. A picture can only have one label")
    private String label;

    @Schema(description = "Confidence of the label to which the picture belongs",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Confidence of the label to which the picture belongs")
    private float score;

}
