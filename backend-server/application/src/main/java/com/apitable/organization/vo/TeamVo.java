

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Department View.
 * </p>
 */
@Data
@Deprecated
@Schema(description = "Department View")
public class TeamVo {

    @Schema(description = "Department ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long teamId;

    @Schema(description = "Department name", example = "R&D Department")
    private String teamName;

    public TeamVo() {
    }

    public TeamVo(Long teamId, String teamName) {
        this.teamId = teamId;
        this.teamName = teamName;
    }
}
