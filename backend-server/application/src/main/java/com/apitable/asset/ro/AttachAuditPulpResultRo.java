

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
public class AttachAuditPulpResultRo {

    @Schema(description = "Suggestion is the corresponding control suggestion of various audit "
        + "types, Values include:[“block”,”review”,”pass”]", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Suggestion is the corresponding control suggestion of various audit "
        + "types, Values include:[“block”,”review”,”pass”]")
    private String suggestion;

    private AttachAuditResultRo result;

}
