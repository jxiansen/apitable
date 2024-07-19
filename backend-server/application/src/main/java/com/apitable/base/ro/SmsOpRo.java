

package com.apitable.base.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * Mobile verification code request parameters.
 */
@Data
@Schema(description = "Mobile verification code request parameters")
public class SmsOpRo {

    @Schema(description = "Area code", example = "+86", requiredMode = RequiredMode.REQUIRED)
    private String areaCode;

    @Schema(description = "cell-phone number", example = "131...",
        requiredMode = RequiredMode.REQUIRED)
    @NotBlank(message = "Mobile number cannot be empty")
    private String phone;

    @Schema(description = "SMS verification code type", type = "java.lang.Integer", example = "1",
        requiredMode = RequiredMode.REQUIRED)
    @NotNull(message = "Type cannot be empty")
    private Integer type;

    @Schema(description = "Man machine verification, the front end obtains the value of get NVC "
        + "Val function", example = "BornForFuture")
    private String data;
}
