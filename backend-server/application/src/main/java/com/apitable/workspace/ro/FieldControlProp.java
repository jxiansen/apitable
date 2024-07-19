

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * Field Control.
 */
@Data
@Schema(description = "Field Permission Properties")
public class FieldControlProp {

    @NotNull(message = "formSheetAccessible cannot be null")
    @Schema(description = "Allow collection table access",
        type = "java.lang.Boolean", example = "true")
    private Boolean formSheetAccessible;
}
