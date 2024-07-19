

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Batch Modify Node Role Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Batch Modify Org Unit Role Request Parameters")
public class BatchModifyNodeRoleRo {

    @NotBlank(message = "Node ID cannot be empty")
    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @NotEmpty(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID Set", type = "java.util.List",
        requiredMode = RequiredMode.REQUIRED, example = "[\"1\",\"2\",\"3\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;

    @Schema(description = "Role", requiredMode = RequiredMode.REQUIRED, example = "readonly")
    @NotBlank(message = "Role cannot be empty")
    private String role;
}
