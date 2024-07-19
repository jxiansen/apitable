

package com.apitable.widget.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Widget Store List Extended Information View.
 * </p>
 */
@Data
@Schema(description = "Widget Store List Extended Information View")
public class WidgetStoreListExtraInfo {

    @Schema(description = "Widget official website address")
    private String website;

}
