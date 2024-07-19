

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Node replication request parameters.
 */
@Data
@Schema(description = "Node replication request parameters")
public class NodeCopyOpRo {

    @Schema(description = "Node Id", requiredMode = RequiredMode.REQUIRED, example = "nod10")
    @NotBlank(message = "Node Id cannot be empty")
    private String nodeId;

    @Schema(description = "Need to copy data", example = "true")
    private Boolean data;
}
