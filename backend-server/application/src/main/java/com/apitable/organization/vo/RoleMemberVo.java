

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Member list of the role.
 * </p>
 *
 * @author tao
 */
@Data
@Builder
@Schema(description = "role's members")
public class RoleMemberVo {

    @Schema(description = "unit id", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "unit type：1-team，3-member", example = "1")
    private Integer unitType;

    @Schema(description = "role member's unit id", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitRefId;

    @Schema(description = "team/member name", example = "1234")
    private String unitName;

    @Schema(description = "unit type is team, team's member", example = "3")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long memberCount;

    @Schema(description = "unit type is member, team's avatar",
        example = "https://www.apitable.com/image.png")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String avatar;

    @Schema(description = "unit type is member, member's teams", example = "Business "
        + "Department｜Product Department")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String teams;

    @Schema(description = "unit type is member，member whether is admin", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isAdmin;

    @Schema(description = "unit type is member，member whether is main admin", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isMainAdmin;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;
}
