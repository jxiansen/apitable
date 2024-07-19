

package com.apitable.workspace.ro;

import com.apitable.core.support.deserializer.StringArrayToLongArrayDeserializer;
import com.apitable.shared.validator.FieldRoleMatch;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Batch data table field role editing request parameters.
 * </p>
 */
@Data
@Schema(description = "Batch data table field role editing request parameters")
public class BatchFieldRoleEditRo {

    @NotEmpty(message = "Organization unit cannot be empty")
    @Schema(description = "Org Unit ID Set", type = "java.util.List",
        requiredMode = RequiredMode.REQUIRED, example = "[\"1\",\"2\",\"3\"]")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;

    @NotBlank(message = "Role cannot be empty")
    @FieldRoleMatch
    @Schema(description = "Role", requiredMode = RequiredMode.REQUIRED, example = "editor")
    private String role;
}
