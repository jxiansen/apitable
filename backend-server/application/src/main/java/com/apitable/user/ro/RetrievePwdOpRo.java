

package com.apitable.user.ro;

import com.apitable.base.enums.ValidateType;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import lombok.Data;

/**
 * Retrieve password request parameters.
 */
@Data
@Schema(description = "Retrieve password request parameters")
public class RetrievePwdOpRo {

    @Schema(description = "Check type", example = "sms_code")
    private ValidateType type;

    @Schema(description = "Area code（Required for SMS verification code）", example = "+86")
    private String areaCode;

    @Schema(description = "Login Name（Phone number/Email）",
        requiredMode = RequiredMode.REQUIRED, example = "13829291111 ｜ xxx@xx.com")
    private String username;

    @Schema(description = "Phone number/Email Verification Code",
        requiredMode = RequiredMode.REQUIRED, example = "123456")
    private String code;

    @Schema(description = "Password", requiredMode = RequiredMode.REQUIRED,
        example = "qwer1234")
    private String password;

}
