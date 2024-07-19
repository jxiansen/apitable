

package com.apitable.base.ro;

import com.apitable.shared.constants.PatternConstants;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

/**
 * Mailbox verification code request parameters.
 */
@Data
@Schema(description = "Mailbox verification code request parameters")
public class EmailOpRo {

    @Schema(description = "Email", example = "...@apitable.com",
        requiredMode = RequiredMode.REQUIRED)
    @NotBlank(message = "Email cannot be empty")
    @Pattern(regexp = PatternConstants.EMAIL, message = "Incorrect email format", flags =
        Pattern.Flag.CASE_INSENSITIVE)
    private String email;

    @Schema(description = "SMS verification code type", type = "java.lang.Integer", example = "1",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Type cannot be empty")
    private Integer type;
}
