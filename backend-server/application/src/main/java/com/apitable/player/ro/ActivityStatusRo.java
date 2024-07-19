

package com.apitable.player.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Activity Status Parameters.
 * </p>
 */
@Data
@Schema(description = "Activity Status Parameters")
public class ActivityStatusRo {

    @Schema(description = "Boot ID. See the config table of the airtable for specific information",
        type = "java.lang.Integer", example = "1", requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Boot ID cannot be empty")
    private Integer wizardId;

}
