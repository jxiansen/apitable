

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

/**
 * role's info.
 */
@Data
@Builder
@Schema(description = "role's info")
public class UnitRoleInfoVo {

    @Schema(description = "unit id", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private String unitId;

    @Schema(description = "role name", example = "Finance")
    private String name;

    @Schema(description = "the role's sequence in role list", example = "1")
    private Integer sequence;
}
