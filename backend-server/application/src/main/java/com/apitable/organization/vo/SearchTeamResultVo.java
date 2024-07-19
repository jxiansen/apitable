

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Search Department Results View.
 * </p>
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Search Department Results View")
public class SearchTeamResultVo {

    @Schema(description = "Department ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long teamId;

    @Schema(description = "Department name", example = "Technical team")
    private String teamName;

    @Schema(description = "Department name (not highlighted)", example = "Technical team")
    private String originName;

    @Schema(description = "Parent Name", example = "R&D Department")
    private String parentName;

    @Schema(description = "Abbreviation", example = "Technology")
    private String shortName;

    @Schema(description = "Number of department members", example = "3")
    private Integer memberCount;

    @Schema(description = "Whether there are sub departments", example = "true")
    private Boolean hasChildren;
}
