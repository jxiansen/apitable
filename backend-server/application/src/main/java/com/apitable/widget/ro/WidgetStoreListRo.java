

package com.apitable.widget.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * <p>
 * Get the widget store list parameter.
 * </p>
 */
@Data
@Schema(description = "Widget Store List Please Parameter")
public class WidgetStoreListRo {

    @Schema(description = "Whether to filter unpublished widget (true: filter, false: not filter)",
        example = "false")
    private Boolean filter;

    @NotNull
    @Schema(description = "Get widget type (0: space station, 1: global, 10: to be approved)",
        example = "1")
    private Integer type;

    @Schema(description = "Specify the return language", example = "en-US", hidden = true)
    private String language;

    @Schema(description = "Global widget search keywords to be audited")
    private String previewSearchKeyword;

}
