

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Register operation request parameters.
 */
@Data
@Schema(description = "Register operation request parameters")
public class RegisterOpRo {

    @Schema(description = "Save the token of WeChat union ID and mobile phone number",
        requiredMode = RequiredMode.REQUIRED, example = "thisistoken")
    @NotBlank(message = "Token cannot be empty")
    private String token;

    @Schema(description = "Registration invitation code",
        requiredMode = RequiredMode.REQUIRED, example = "test")
    private String inviteCode;
}
