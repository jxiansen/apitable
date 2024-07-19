

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Email Invitation Validate View.
 * </p>
 */
@Data
@Schema(description = "Email Invitation Validate View")
public class EmailInvitationValidateVO {

    @Schema(description = "Space ID", example = "spcyQkKp9XJEl")
    private String spaceId;

    @Schema(description = "Space name", example = "Work space")
    private String spaceName;

    @Schema(description = "Invite Users", example = "Zhang San")
    private String inviter;

    @Schema(description = "Invited Email", example = "xxxx@apitable.com")
    private String inviteEmail;

    @Schema(description = "Whether it is in login status", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isLogin;

    @Schema(description = "Whether the user's email matches the invitation email", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isMatch;

    @Schema(description = "Whether the invited mailbox has an account bound", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isBound;

    @Schema(description = "Inviter's personal invitation code", example = "test")
    private String inviteCode;
}
