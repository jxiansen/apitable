

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Modify node role request parameters.
 * </p>
 */
@Data
@Schema(description = "Modify Org Unit Role Request Parameters")
public class ModifyNodeRoleRo {

    @NotBlank(message = "Node ID cannot be empty")
    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @NotNull(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID", type = "java.lang.String",
        requiredMode = RequiredMode.REQUIRED, example = "761263712638")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long unitId;

    @Schema(description = "Role", requiredMode = RequiredMode.REQUIRED, example = "readonly")
    @NotBlank(message = "Role cannot be empty")
    private String role;
}
