

package com.apitable.space.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * <p>
 * Email Invitation Resend request parameters.
 * </p>
 */
@Data
@Schema(description = "Email Invitation Resend request parameters")
public class EmailInvitationResendRo {

    @NotNull(message = "The mailbox does not exist, and the invitation cannot be sent again")
    @Schema(description = "Email address, strictly checked",
        requiredMode = RequiredMode.REQUIRED, example = "123456@qq.com")
    @Pattern(regexp = PatternConstants.EMAIL, flags = Pattern.Flag.CASE_INSENSITIVE,
        message = "Incorrect mailbox format")
    private String email;
}
