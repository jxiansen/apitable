

package com.apitable.auth.vo;

import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * Login result VO.
 * </p>
 *
 * @author Chambers
 */
@Data
@Builder(toBuilder = true)
@Schema(description = "Login result VO")
public class LoginResultVO {

    @JsonIgnore
    private Long userId;

    @Schema(description = "User registration sign", example = "true")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean isNewUser;
}
