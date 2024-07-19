

package com.apitable.user.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * <p>
 * Mailbox verification code verification request parameters.
 * </p>
 */
@Data
@Schema(description = "Mailbox verification code verification request parameters")
public class EmailCodeValidateRo {

    @Schema(description = "e-mail address",
        requiredMode = RequiredMode.REQUIRED, example = "xxxx@apitable.com")
    @NotBlank(message = "Email address cannot be empty")
    @Pattern(regexp = PatternConstants.EMAIL, flags = Pattern.Flag.CASE_INSENSITIVE,
        message = "Incorrect mailbox format")
    private String email;

    @Schema(description = "Email verification code",
        requiredMode = RequiredMode.REQUIRED, example = "123456")
    @NotBlank(message = "The verification code cannot be empty")
    private String code;
}
