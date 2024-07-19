

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Star mark node move request parameters.
 * </p>
 */
@Data
@Schema(description = "Star mark node move request parameters")
public class MarkNodeMoveRo {

    @Schema(description = "Node Id", requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "Node Id cannot be empty")
    private String nodeId;

    @Schema(description = "The previous node of the target position moves to the first position "
        + "when it is empty", example = "nod10")
    private String preNodeId;
}
