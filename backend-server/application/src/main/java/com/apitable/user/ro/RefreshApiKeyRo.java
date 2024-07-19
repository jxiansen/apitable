

package com.apitable.user.ro;

import com.apitable.base.enums.ValidateType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Refresh developer access token request parameters.
 * </p>
 */
@Data
@Schema(description = "Refresh developer access token request parameters")
public class RefreshApiKeyRo {

    @Schema(description = "Check type", example = "sms_code")
    private ValidateType type;

    @Schema(description = "Verification Code", example = "125484")
    private String code;
}
