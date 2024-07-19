

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Widget removal request parameters.
 * </p>
 */
@Data
@Schema(description = "Widget removal request parameters")
public class WidgetPackageUnpublishRo {

    @Schema(description = "Widget Package ID", example = "wpkAAA")
    @NotBlank(message = "Package Id cannot be empty")
    private String packageId;

}
