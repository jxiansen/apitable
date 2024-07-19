

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringToLongDeserializer;
import com.apitable.shared.validator.FieldRoleMatch;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * DataSheet field role editing request parameters.
 * </p>
 */
@Data
@Schema(description = "DataSheet field role editing request parameters")
public class FieldRoleEditRo {

    @NotNull(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID", type = "java.lang.String",
        requiredMode = RequiredMode.REQUIRED, example = "761263712638")
    @JsonDeserialize(using = StringToLongDeserializer.class)
    private Long unitId;

    @NotBlank(message = "Role cannot be empty")
    @FieldRoleMatch
    @Schema(description = "Role", requiredMode = RequiredMode.REQUIRED, example = "editor")
    private String role;
}
