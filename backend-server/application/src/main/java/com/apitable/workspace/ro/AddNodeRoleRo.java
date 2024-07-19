

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Add node role request parameters.
 * </p>
 */
@Data
@Schema(description = "Add node role request parameters")
public class AddNodeRoleRo {

    @NotBlank(message = "Node ID cannot be empty")
    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @NotEmpty(message = "Organization unit cannot be empty")
    @Schema(description = "Organization Unit ID Collection", type = "List", example =
        "[\"10101\",\"10102\",\"10103\",\"10104\"]", required = true)
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;

    @Schema(description = "Role", example = "editor", required = true)
    @NotBlank(message = "Role cannot be empty")
    private String role;
}
