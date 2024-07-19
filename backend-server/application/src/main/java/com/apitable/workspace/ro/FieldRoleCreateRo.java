

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
 * DataSheet Field Role Creation Request Parameters.
 * </p>
 */
@Data
@Schema(description = "DataSheet Field Role Creation Request Parameters")
public class FieldRoleCreateRo {

    @NotEmpty(message = "Organization unit cannot be empty")
    @Schema(description = "Organization Unit ID Collection", type = "List",
        requiredMode = RequiredMode.REQUIRED, example = "10101,10102,10103,10104")
    @JsonDeserialize(using = StringArrayToLongArrayDeserializer.class)
    private List<Long> unitIds;

    @NotBlank(message = "Role cannot be empty")
    @FieldRoleMatch
    @Schema(description = "Role", requiredMode = RequiredMode.REQUIRED, example = "editor")
    private String role;
}
