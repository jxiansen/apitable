

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Node move request parameters.
 */
@Data
@Schema(description = "Node move request parameters")
public class NodeMoveOpRo {

    @Schema(description = "Node Id", requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "Node Id cannot be empty")
    private String nodeId;

    @Schema(description = "Parent Node Id of the target location",
        requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "The parent node ID cannot be empty")
    private String parentId;

    @Schema(description = "The previous node of the target position moves to the first position "
        + "when it is empty", example = "nod10")
    private String preNodeId;

    @Schema(description = "unit id, if is null means move to space workspace")
    private String unitId;
}
