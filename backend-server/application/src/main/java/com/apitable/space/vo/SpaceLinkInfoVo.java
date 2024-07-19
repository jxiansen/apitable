

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Space public invitation link information vo.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Space public invitation link information vo")
public class SpaceLinkInfoVo {

    @Schema(description = "Creator name", example = "Zhang San")
    private String memberName;

    @Schema(description = "Space name", example = "This is a space")
    private String spaceName;

    @Schema(description = "Space ID", example = "spc10")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String spaceId;

    @Schema(description = "Whether it is in login status, not logged in", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isLogin;

    @Schema(description = "Whether it already exists in the space, and directly call the "
        + "switching space interface in the existing space", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isExist;

    @Schema(description = "Inviter's personal invitation code", example = "test")
    private String inviteCode;

    @Schema(description = "Whether enough seats in the space", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean seatAvailable;
}
