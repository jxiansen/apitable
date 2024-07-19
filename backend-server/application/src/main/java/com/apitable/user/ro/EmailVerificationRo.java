

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * user email verification ro.
 * </p>
 */
@Data
@Schema(description = "verify email parameters")
public class EmailVerificationRo {

    @Schema(description = "email", requiredMode = Schema.RequiredMode.REQUIRED,
        example = "123456@**")
    @NotBlank(message = "email")
    private String email;
}