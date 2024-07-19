

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import lombok.Data;

/**
 * New user sets password request parameters.
 */
@Data
@Schema(description = "New user sets password request parameters")
public class NewUserSetPwdRo {

    @Schema(description = "Phone number", requiredMode = RequiredMode.REQUIRED,
        example = "135...")
    private String phone;

    @Schema(description = "New password", requiredMode = RequiredMode.REQUIRED,
        example = "qwer1234")
    private String newPassword;

    @Schema(description = "Confirm Password",
        requiredMode = RequiredMode.REQUIRED, example = "qwer1234")
    private String confirmPassword;
}
