

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Data Table Field Role Information View.
 * </p>
 */
@Data
@Schema(description = "Data Table Field Permission View")
public class FieldCollaboratorVO {

    @Schema(description = "Whether to open", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean enabled;

    @Deprecated
    @Schema(description = "Role Member List")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<FieldRoleMemberVo> members;

    @Schema(description = "Role Org Unit List")
    private List<FieldRole> roles;

    @Schema(description = "Data Table Field Role Configuration Attribute")
    private FieldRoleSetting setting;
}
