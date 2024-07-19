

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Applet Package Information View.
 * </p>
 */
@Data
@Schema(description = "Applet Package Information View")
public class WidgetPackageInfoVo {

    @Schema(description = "Package ID", example = "wpkABC")
    private String packageId;

    @Schema(description = "Widget name - returned according to the request Accept Language. "
        + "Default:zh-CN，Current Support List：「en-US/zh-CN」", example = "Chart")
    private String name;

    @Schema(description = "Widget package icon",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String icon;

    @Schema(description = "Cover drawing of component package",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(using = ImageSerializer.class)
    private String cover;

    @Schema(description = "Widget description - returned according to the request Accept "
        + "Language, default: zh CN, current support list:「en-US/zh-CN」",
        example = "This is the description of a chart applet")
    private String description;

    @Schema(description = "Widget package version number", example = "1.0.0")
    private String version;

    @Schema(description = "Widget package status (0: under development; 1: banned; 2: to be "
        + "published; 3: published; 4: off the shelf)", example = "3")
    private Integer status;

    @Schema(description = "Author Name")
    private String authorName;

    @Schema(description = "Author icon")
    @JsonSerialize(using = ImageSerializer.class)
    private String authorIcon;

    @Schema(description = "Author Email")
    private String authorEmail;

    @Schema(description = "Author website address")
    private String authorLink;

    @Schema(description = "Widget package type (0: third party, 1: official)")
    private Integer packageType;

    @Schema(description = "0: Publish to the component store in the space station, 1: Publish to "
        + "the global app store")
    private Integer releaseType;

}
