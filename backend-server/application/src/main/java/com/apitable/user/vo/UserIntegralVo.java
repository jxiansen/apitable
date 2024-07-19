

package com.apitable.user.vo;

import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * User integral information view.
 * </p>
 */
@Data
@Schema(description = "User integral information view")
public class UserIntegralVo {

    @Schema(description = "Integral value (unit: minute)", example = "10000")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Integer totalIntegral;
}
