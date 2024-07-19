

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * <p>
 * Verification code verification request parameters.
 * </p>
 */
@Data
@Schema(description = "Verification code verification request parameters")
public class CodeValidateRo {

    @Schema(description = "Verification Code",
        requiredMode = RequiredMode.REQUIRED, example = "123456")
    @NotBlank(message = "The verification code cannot be empty")
    private String code;

}
