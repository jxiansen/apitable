

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Field Permission View Information.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Field Permission View Information")
public class FieldPermissionInfo {

    @Schema(description = "Field ID", example = "fldUQZGaNqSg2")
    private String fieldId;

    @Schema(description = "Data Table Field Role Configuration Attribute")
    private FieldRoleSetting setting;

    @Schema(description = "Whether you have permission", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean hasRole;

    @Schema(description = "Role", example = "true")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String role;

    @Schema(description = "Whether column roles can be managed", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean manageable;

    @Schema(description = "Field permission set")
    private FieldPermission permission;
}
