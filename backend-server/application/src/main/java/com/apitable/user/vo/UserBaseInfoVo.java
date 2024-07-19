

package com.apitable.user.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Basic user information.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Basic user information")
public class UserBaseInfoVo {

    @Schema(description = "Current user ID", example = "123")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long userId;

    @Schema(description = "Unique ID of the current user", example = "123")
    private String uuid;
}
