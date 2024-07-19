

package com.apitable.space.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Space public invitation link vo.
 * </p>
 */
@Data
@Schema(description = "Space public invitation link vo")
public class SpaceLinkVo {

    @Schema(description = "Department ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long teamId;

    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    @Schema(description = "Name of superior department", example = "R&D Department")
    private String parentTeamName;

    @Schema(description = "Department name", example = "Front end group")
    private String teamName;

    @Schema(description = "Invitation Token", example = "qwe31")
    private String token;
}
