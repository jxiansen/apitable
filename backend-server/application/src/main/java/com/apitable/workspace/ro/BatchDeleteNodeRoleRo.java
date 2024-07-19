

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Batch Delete Node Role Request Parameters.
 * </p>
 */
@Data
@Schema(description = "Batch Delete Node Role Request Parameters")
public class BatchDeleteNodeRoleRo {

    @Schema(description = "The node ID is not passed to represent the root node, that is, the "
        + "working directory", example = "nod10")
    private String nodeId;

    @NotEmpty(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID Set", type = "java.util.List",
        requiredMode = RequiredMode.REQUIRED, example = "[\"1\",\"2\",\"3\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;
}
