

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.NullBooleanSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Widget Information View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Schema(description = "Widget Information View")
public class WidgetInfo {

    @Schema(description = "Widget ID", example = "wdt123")
    private String widgetId;

    @Schema(description = "Widget Name", example = "Widget instance name")
    private String widgetName;

    @Schema(description = "Cover drawing of component package",
        example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String widgetPackageCover;

    @Schema(description = "Data source table ID", example = "dst123")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String datasheetId;

    @Schema(description = "Data source data table name", example = "wpkABC")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String datasheetName;

    @Schema(description = "Package Icon", example = "https://apitable.com/space/2020/12/23/aqa")
    @JsonSerialize(nullsUsing = NullStringSerializer.class, using = ImageSerializer.class)
    private String widgetPackageIcon;

    @Schema(description = "Whether it belongs to the private area")
    @JsonSerialize(nullsUsing = NullBooleanSerializer.class)
    private Boolean nodePrivate;
}
