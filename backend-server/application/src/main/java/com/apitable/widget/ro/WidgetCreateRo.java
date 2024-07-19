

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Request parameters for widget creation.
 * </p>
 */
@Data
@Schema(description = "Request parameters for widget creation")
public class WidgetCreateRo {

    @Schema(description = "Node ID", requiredMode = RequiredMode.REQUIRED,
        example = "dstAAA/dsbBBB")
    @NotBlank(message = "Node ID cannot be empty")
    private String nodeId;

    @Schema(description = "Widget Package ID",
        requiredMode = RequiredMode.REQUIRED, example = "wpkBBB")
    @NotBlank(message = "The Widget package ID cannot be empty")
    private String widgetPackageId;

    @Schema(description = "Widget name", example = "This is a widget")
    private String name = "New Widget";
}
