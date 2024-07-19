

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullArraySerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

/**
 * <p>
 * Widget Store List Information View.
 * </p>
 */
@Data
@Schema(description = "Widget Store List Information View")
public class WidgetStoreListInfo {

    @Schema(description = "Package ID", example = "wpkABC")
    private String widgetPackageId;

    @Schema(description = "Widget package name", example = "Chart")
    private String name;

    @Schema(description = "Widget package icon",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String icon;

    @Schema(description = "Cover drawing of component package",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String cover;

    @Schema(description = "DESCRIBE", example = "This is the description of a chart applet")
    private String description;

    @Schema(description = "Widget package version number", example = "1.0.0")
    private String version;

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

    @Schema(description = "Widget package status (0: to be approved; 1: not passed; 2: to be "
        + "released; 3: online; 4: offline)", example = "3")
    private Integer status;

    @Schema(description = "Whether the applet is authorized by others (false: no, true: yes)",
        example = "false")
    private Boolean isEmpower;

    @Schema(description = "Widget Owner UUID")
    private String ownerUuid;

    @Schema(description = "Widget Owner Member Id")
    private String ownerMemberId;

    @Schema(description = "Widget Store List Extension Information")
    private WidgetStoreListExtraInfo extras;

    @JsonIgnore
    @Schema(description = "Installation environment code", example = "01")
    private String installEnvCode;

    @JsonIgnore
    @Schema(description = "Operating environment code", example = "01")
    private String runtimeEnvCode;

    @Schema(description = "Installation environment", example = "panel")
    private List<String> installEnv;

    @Schema(description = "Operating environment", example = "mobile")
    private List<String> runtimeEnv;

    @Deprecated
    @Schema(description = "Permission - Obsolete, unified to resource for judgment",
        example = "[\"UNPUBLISH_WIDGET\",\"TRANSFER_WIDGET\"]", hidden = true)
    @JsonSerialize(using = NullArraySerializer.class, nullsUsing = NullArraySerializer.class)
    private List<String> permissions;

}
