

package com.apitable.workspace.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Role Member View.
 * </p>
 */
@Data
@Schema(description = "Role Member View")
public class ControlRoleMemberVo {

    @Schema(description = "Member ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long memberId;

    @Schema(description = "Member Name", example = "R&D Department ｜ Zhang San")
    private String memberName;

    @JsonIgnore
    private String uuid;

    @Schema(description = "Nick Name", example = "Zhang San")
    private String nickName;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "Member avatar", example = "http://www.apitable.com/image.png")
    private String avatar;

    @Schema(description = "default avatar color number", example = "1")
    private Integer avatarColor;

    @Schema(description = "Member's Department",
        example = "Operation Department | Product Department | R&D Department")
    private String teams;

    @Schema(description = "Role", example = "manager")
    private String role;

    @Schema(description = "Whether the member is the Workbench admin")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isWorkbenchAdmin;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

}
