

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Delete node role request parameters.
 * </p>
 */
@Data
@Schema(description = "Delete node role request parameters")
public class DeleteNodeRoleRo {

    @Schema(description = "The node ID is not passed to represent the root node, that is, the "
        + "working directory", example = "nod10")
    private String nodeId;

    @NotNull(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID", type = "java.lang.String",
        requiredMode = RequiredMode.REQUIRED, example = "71638172638")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long unitId;
}
