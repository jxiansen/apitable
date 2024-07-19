

package com.apitable.widget.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Widget Create Result View.
 * </p>
 */
@Data
@Schema(description = "Widget Create Result View")
public class WidgetReleaseCreateVo {

    @Schema(description = "Package ID", example = "wpkABC")
    private String packageId;

}
