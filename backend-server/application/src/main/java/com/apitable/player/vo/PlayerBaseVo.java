

package com.apitable.player.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Basic user information.
 * </p>
 */
@Data
@Schema(description = "Basic user information")
@Builder
public class PlayerBaseVo {

    @Schema(description = "User's Uuid", example = "aadddbccc")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String uuid;

    @Schema(description = "Member ID", example = "1261273764218")
    @JsonSerialize(using = ToStringSerializer.class, nullsUsing = NullStringSerializer.class)
    private Long memberId;

    @Schema(description = "User Name", example = "zoe")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String userName;

    @Schema(description = "Member Name", example = "zoe zheng")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String memberName;

    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    @Schema(description = "HEAD PORTRAIT", example = "zoe zheng")
    private String avatar;

    @Schema(description = "DEPARTMENT", example = "Operation Department｜Planning Department")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String team;

    @Schema(description = "Whether the user has modified the nickname")
    private Boolean isNickNameModified;

    @Schema(description = "Whether the member has modified the nickname")
    private Boolean isMemberNameModified;

    @Schema(description = "Email", example = "52906715@qq.com")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String email;

    @Deprecated
    @Schema(description = "Whether the space station has been removed",
        example = "true", hidden = true)
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isDeleted;

    @Schema(description = "User player type 1: members in the space have not been removed, 2 "
        + "members outside the space have been removed, and 3 visitors (non space registered "
        + "users)", example = "1")
    private Integer playerType;

    @Schema(description = "default avatar color number", example = "1")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private Integer avatarColor;

    @Schema(description = "Nick Name", example = "Zhang San")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String nickName;
}
