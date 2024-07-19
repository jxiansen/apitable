

package com.apitable.organization.vo;

import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * <p>
 * role's info.
 * </p>
 */
@Data
@Builder
@Schema(description = "role's info")
public class RoleInfoVo {

    @Schema(description = "unit id", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "role id", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long roleId;

    @Schema(description = "role name", example = "Finance")
    private String roleName;

    @Schema(description = "role's member amount", example = "1")
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    private Long memberCount;

    @Schema(description = "the role's position in role list", example = "1")
    private Integer position;
}
