

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Widget Release Version History View.
 * </p>
 */
@Data
@Schema(description = "Widget Release Version History View")
public class WidgetReleaseListVo {

    @Schema(description = "Publish this Sha value")
    private String releaseSha;

    @Schema(description = "EDITION", example = "1.0.0")
    private String version;

    @Schema(description = "Status (0: to be approved, 1: approved, 2: rejected)", example = "1")
    private Integer status;

    @Schema(description = "Code Address", example = "https://aitable.ai/code/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String releaseCodeBundle;

    @Schema(description = "Source code address", example = "https://aitable.ai/code/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String sourceCodeBundle;

    @Schema(description = "Current release version")
    private Boolean currentVersion;

    @Schema(hidden = true)
    @JsonIgnore
    private Long releaseId;

}
