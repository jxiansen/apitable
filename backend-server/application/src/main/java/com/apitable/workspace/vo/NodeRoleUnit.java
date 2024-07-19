

package com.apitable.workspace.vo;

import com.apitable.organization.vo.MemberTeamPathInfo;
import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Organization unit of the node role.
 * </p>
 */
@Data
@Schema(description = "Organization unit of the node role")
public class NodeRoleUnit {

    @Schema(description = "Org Unit ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "Organization Unit Name", example = "R&D Department ｜ Zhang San")
    private String unitName;

    @Schema(description = "Type: 1-Department, 2-Label, 3-Member", example = "1")
    private Integer unitType;

    @Schema(description = "The number of members of the department. It is returned when the type "
        + "is department", example = "3")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long memberCount;

    @Schema(description = "Head portrait, returned when the type is member",
        example = "http://www.apitable.com/image.png")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String avatar;

    @Schema(description = "Department, returned when the type is member",
        example = "Operation Department | Product Department | R&D Department")
    private String teams;

    @Schema(description = "Role", example = "manager")
    private String role;

    @Schema(description = "team id and full hierarchy team path name")
    private List<MemberTeamPathInfo> teamData;

    @Schema(description = "memberId / teamId", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitRefId;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;
}
