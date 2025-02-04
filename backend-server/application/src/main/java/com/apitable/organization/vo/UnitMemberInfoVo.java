

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullObjectSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Member part View.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@Schema(description = "Member Part View")
public class UnitMemberInfoVo {

    @Schema(description = "Org Unit ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private String unitId;

    @Schema(description = "Member Name", example = "R&D Department｜Zhang San")
    private String name;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Member avatar", example = "http://www.apitable.com/image.png")
    private String avatar;

    @Schema(description = "Member Email Address", example = "123456@apitable.com")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String email;

    @Schema(description = "Member mobile")
    @JsonSerialize(nullsUsing = NullObjectSerializer.class)
    private MemberMobile mobile;

    @Schema(description = "1: joined, 0: not joined", example = "1")
    private Integer status;

    @Schema(description = "Member’s type such as PrimaryAdmin, SubAdmin, Member", example = "SubAdmin")
    private String type;

    @Schema(description = "member teams", example = "false")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitTeamInfoVo> teams;

    @Schema(description = "member roles", example = "false")
    @JsonSerialize(nullsUsing = NullArraySerializer.class)
    private List<UnitRoleInfoVo> roles;

    /**
     * member's mobile.
     */
    @Data
    public static class MemberMobile {
        @Schema(description = "mobile  number", example = "123")
        private String number;

        @Schema(description = "The area code of the member's mobile", example = "+86")
        private String areaCode;
    }
}
