

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Widget rollback request parameters.
 * </p>
 */
@Data
@Schema(description = "Widget rollback request parameters")
public class WidgetPackageRollbackRo {

    @Schema(description = "Widget Package ID", example = "wpkAAA")
    @NotBlank(message = "Package Id cannot be empty")
    private String packageId;

    @Schema(description = "Version No", example = "1.0.0")
    @NotBlank(message = "Rollback version number cannot be empty")
    private String version;

}
