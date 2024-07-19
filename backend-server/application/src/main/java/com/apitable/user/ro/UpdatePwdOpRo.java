

package com.apitable.user.ro;

import com.apitable.base.enums.ValidateType;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import lombok.Data;

/**
 * <p>
 * Modify password request parameters.
 * </p>
 */
@Data
@Schema(description = "Modify password request parameters")
public class UpdatePwdOpRo {

    @Schema(description = "Check Type", example = "sms_code")
    private ValidateType type;

    @Schema(description = "Phone number/Email Verification Code", example = "123456")
    private String code;

    @Schema(description = "Password", requiredMode = RequiredMode.REQUIRED,
        example = "qwer1234")
    private String password;
}
