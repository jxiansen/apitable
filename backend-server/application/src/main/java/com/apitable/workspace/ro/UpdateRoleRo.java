

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Modify node role request parameters.
 * </p>
 */
@Data
@Schema(description = "Modify node role request parameters")
public class UpdateRoleRo {

    @NotBlank(message = "Node ID cannot be empty")
    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @Schema(description = "The node role inherits the parent mode. If it is false, the roles "
        + "parameter needs to be passed", example = "false")
    private Boolean extend;

    private List<NodeRoleRo> roles;
}
