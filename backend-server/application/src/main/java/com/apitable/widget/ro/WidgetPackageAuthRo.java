

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Widget Package Login Authorization Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Widget Package Login Authorization Request Parameters")
public class WidgetPackageAuthRo {

    @Schema(description = "Package ID", example = "wpkBBB")
    private String packageId;

}
