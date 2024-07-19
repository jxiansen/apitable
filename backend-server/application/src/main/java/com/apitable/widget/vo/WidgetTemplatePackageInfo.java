

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Template Widget Package Information View.
 * </p>
 */
@Data
@Schema(description = "Template Widget Package Information View")
public class WidgetTemplatePackageInfo {

    @Schema(description = "Widget Package ID", example = "wpkABC")
    private String widgetPackageId;

    @Schema(description = "Widget package name", example = "Chart")
    private String name;

    @Schema(description = "Widget package icon",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String icon;

    @Schema(description = "Widget Package Cover",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String cover;

    @Schema(description = "Describe", example = "This is the description of a chart applet")
    private String description;

    @Schema(description = "Widget package version number", example = "1.0.0")
    private String version;

    @Schema(description = "Code Address", example = "https://apitable.com/code/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String releaseCodeBundle;

    @Schema(description = "Source code address",
        example = "https://apitable.com/code/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String sourceCodeBundle;

    @Schema(description = "Widget Package Extension Information")
    private WidgetTemplatePackageExtraInfo extras;

}
