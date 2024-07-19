

package com.apitable.space.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Add administrator request parameters.
 * </p>
 */
@Data
@Schema(description = "Add administrator request parameters")
public class AddSpaceRoleRo {

    @NotEmpty(message = "The selected member list cannot be empty")
    @Schema(description = "Member ID", requiredMode = RequiredMode.REQUIRED,
        type = "List", example = "[1,2]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> memberIds;

    @NotEmpty(message = "Resource cannot be empty")
    @Schema(description = "Operation resource set, no sorting, automatic verification",
        requiredMode = RequiredMode.REQUIRED, type = "List",
        example = "[\"MANAGE_TEAM\",\"MANAGE_MEMBER\"]")
    private List<String> resourceCodes;
}
