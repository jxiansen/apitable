

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Label Unit View.
 * </p>
 */
@Data
@Schema(description = "Label Unit View")
public class UnitTagVo {

    @Schema(description = "Org Unit ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long unitId;

    @Schema(description = "Member ID", type = "java.lang.String", example = "1")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long tagId;

    @Schema(description = "Department name", example = "R&D Department ｜ Zhang San")
    private String tagName;

    @Schema(description = "Department abbreviation", example = "RESEARCH AND DEVELOPMENT")
    private String shortName;

    @Schema(description = "Number of members", example = "3")
    private Integer memberCount;
}
