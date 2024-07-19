

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Widget Copy Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Widget Copy Request Parameters")
public class WidgetCopyRo {

    @Schema(description = "Node ID", requiredMode = RequiredMode.REQUIRED,
        example = "dst11/dsb11")
    private String nodeId;

    @Schema(description = "Widget ID List", requiredMode = RequiredMode.REQUIRED,
        example = "[\"wdtiJjVmNFcFmNtQFA\", \"wdtSbp8TkH7gTGAYR1\"]")
    @NotEmpty(message = "Widget ID list cannot be empty")
    private List<String> widgetIds;
}
