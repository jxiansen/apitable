

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Node recovery request parameters.
 * </p>
 */
@Data
@Schema(description = "Node recovery request parameters")
public class NodeRecoverRo {

    @Schema(description = "Node Id", requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "Node Id cannot be empty")
    private String nodeId;

    @Schema(description = "Parent Node Id of the target location", example = "nod10")
    private String parentId;
}
