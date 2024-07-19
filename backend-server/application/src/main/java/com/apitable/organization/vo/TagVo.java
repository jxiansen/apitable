

package com.apitable.organization.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Label View.
 * </p>
 */
@Data
@Deprecated
@Schema(description = "Label View")
public class TagVo {

    @Schema(description = "Tag ID", type = "java.lang.String", example = "2")
    @JsonSerialize(using = ToStringSerializer.class)
    private Long tagId;

    @Schema(description = "Label Name", example = "Product")
    private String tagName;
}
