

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Change node sharing setting request parameters.
 * </p>
 */
@Data
@Schema(description = "Change node sharing setting request parameters")
public class UpdateNodeShareSettingRo {

    @NotBlank(message = "Share setting parameter cannot be empty")
    @Schema(description = "Share setting parameter string", type = "string",
        requiredMode = RequiredMode.REQUIRED, example = "\"{\"onlyRead\": true}\"")
    private String props;
}
