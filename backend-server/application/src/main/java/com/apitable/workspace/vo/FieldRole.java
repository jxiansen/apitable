

package com.apitable.workspace.vo;

import com.apitable.organization.vo.MemberTeamPathInfo;
import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * Field Role.
 */
@Data
@Schema(description = "Data Table Field Role View")
public class FieldRole {

    @Schema(description = "Org Unit ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "Organization Unit Name", example = "R&D Department ｜ Zhang San")
    private String unitName;

    @Schema(description = "Type: 1-Department, 2-Label, 3-Member", example = "1")
    private Integer unitType;

    @Schema(description = "When an organization unit is a member, indicate whether it is an "
        + "administrator", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isAdmin;

    @Schema(description = "The number of members of the department. It is returned when the type "
        + "is department", example = "3")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long memberCount;

    @Schema(description = "Head portrait, returned when the type is member",
        example = "https://www.apitable.com/image.png")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String avatar;

    @Schema(description = "Department, returned when the type is member", example = "Operation "
        + "Department | Product Department | R&D Department")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String teams;

    @Schema(description = "Role", example = "manager")
    private String role;

    @Schema(description = "Mark whether it is the field authority owner (open)", example = "false")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isOwner;

    @Deprecated
    @Schema(description = "Whether the role permission is invalid", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean roleInvalid;

    @Deprecated
    @Schema(description = "Whether read-only permission can be set", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean canRead;

    @Deprecated
    @Schema(description = "Whether editing permission can be set", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean canEdit;

    @Deprecated
    @Schema(description = "Whether permission can be removed", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean canRemove;

    @Deprecated
    @Schema(description = "Node manageable flag (space station administrator+node manageable "
        + "organizational unit)", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean nodeManageable;

    @Deprecated
    @Schema(description = "Permission inheritance flag", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean permissionExtend;

    @Schema(description = "memberId / teamId", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitRefId;

    @Schema(description = "team id and full hierarchy team path name")
    private List<MemberTeamPathInfo> teamData;
}
