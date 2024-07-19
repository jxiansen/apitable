

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * role's info.
 * </p>
 *
 * @author tao
 */
@Data
@Builder
@Schema(description = "role's info")
public class RoleVo {

    @Schema(description = "role id", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long roleId;

    @Schema(description = "role's name", example = "Finance")
    private String roleName;

}
