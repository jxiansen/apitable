

package com.apitable.widget.vo;

import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.HashMap;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Widget snapshot information (alignment with front-end structure requirements).
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Widget snapshot information")
@Builder(toBuilder = true)
public class WidgetSnapshot {

    @Schema(description = "Widget Name", example = "Widget instance name")
    private String widgetName;

    @Schema(description = "Data source table ID", example = "dst123")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String datasheetId;

    @Schema(description = "Storage configuration")
    private HashMap<Object, Object> storage;

    @Schema(description = "Data source reference source ID", example = "mir123")
    @JsonSerialize(nullsUsing = NullStringSerializer.class)
    private String sourceId;
}
