

package com.apitable.space.ro;

import com.apitable.base.enums.ValidateType;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Space deletion request parameters.
 * </p>
 */
@Data
@Schema(description = "Space deletion request parameters")
public class SpaceDeleteRo {

    @Schema(description = "Check type", example = "sms_code")
    private ValidateType type;

    @Schema(description = "Phone/email verification code", example = "123456")
    private String code;

}
