

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Organization Unit Information View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Organization Unit Information View")
public class UnitInfoVo {

    @Schema(description = "Org Unit ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "Classification: 1-department, 3-member", example = "1")
    private Integer type;

    @Schema(description = "Organization unit association ID (may be team ID or member ID "
        + "according to the type)", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitRefId;

    @Schema(description = "Department/Member Name", example = "R&D Department｜Zhang San")
    private String name;

    @Schema(description = "User ID (the actual return is uuid)", type = "java.lang.String",
        example = "1")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String userId;

    @Deprecated
    @Schema(description = "User UUID corresponding to the member", hidden = true)
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String uuid;

    @Schema(description = "Member avatar", example = "http://www.apitable.com/image.png")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String avatar;

    @Schema(description = "Whether the member has been activated", example = "true")
    private Boolean isActive;

    @Schema(description = "Whether the organization unit is deleted", example = "false")
    private Boolean isDeleted;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

    @Schema(description = "email", example = "test@apitable.com")
    private String email;

    @Schema(description = "team id and full hierarchy team path name")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<MemberTeamPathInfo> teamData;

    @Schema(description = "default avatar color number")
    private Integer avatarColor;

    @Schema(description = "nick name")
    private String nickName;
}
