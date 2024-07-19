

package com.apitable.space.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Update administrator request parameters.
 * </p>
 */
@Schema(description = "Update administrator request parameters")
@Data
public class UpdateSpaceRoleRo {

    @NotNull(message = "ID cannot be empty")
    @Schema(description = "Role ID", requiredMode = RequiredMode.REQUIRED,
        type = "java.lang.String", example = "1")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long id;

    @NotNull(message = "The selected member cannot be empty")
    @Schema(description = "Select Member ID", requiredMode = RequiredMode.REQUIRED,
        type = "java.lang.String", example = "1")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long memberId;

    @NotEmpty(message = "The assignment permission cannot be empty")
    @Schema(description = "Operation resource set, no sorting, automatic verification",
        requiredMode = RequiredMode.REQUIRED, type = "List",
        example = "[\"MANAGE_TEAM\",\"MANAGE_MEMBER\"]")
    private List<String> resourceCodes;
}
