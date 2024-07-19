

package com.apitable.user.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Mobile verification code verification request parameters.
 */
@Data
@Schema(description = "Mobile phone verification code verification request parameters")
public class SmsCodeValidateRo {

    @NotBlank(message = "Mobile phone area code cannot be empty")
    @Schema(description = "Area code", requiredMode = RequiredMode.REQUIRED, example = "+86")
    private String areaCode;

    @Schema(description = "Phone number", requiredMode = RequiredMode.REQUIRED,
        example = "13411112222")
    @NotBlank(message = "Mobile number cannot be empty")
    private String phone;

    @Schema(description = "Mobile phone verification code",
        requiredMode = RequiredMode.REQUIRED, example = "123456")
    @NotBlank(message = "The verification code cannot be empty")
    private String code;
}
