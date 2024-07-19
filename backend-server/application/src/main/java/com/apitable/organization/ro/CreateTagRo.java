

package com.apitable.organization.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

/**
 * Add tag request parameters.
 */
@Data
@Schema(description = "Add tag request parameters")
public class CreateTagRo {

    @NotNull(message = "Space ID cannot be empty")
    @Schema(description = "Space unique ID", example = "r4Arzo4YydiwsgAV",
        requiredMode = RequiredMode.REQUIRED)
    private String spaceId;

    @NotBlank
    @Size(min = 1, max = 100, message = "Limit 1 to 100 characters and input special characters")
    @Schema(description = "Label Name", type = "string", example = "New label",
        requiredMode = RequiredMode.REQUIRED)
    private String tagName;
}
