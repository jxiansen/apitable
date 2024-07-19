

package com.apitable.workspace.ro;

import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * DataSheet View Parameters.
 * </p>
 */
@Schema(description = "DataSheet View Map Parameter")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ViewMapRo {

    @Schema(description = "Custom View ID")
    private String id;

    @Schema(description = "View Name")
    private String name;

    @Schema(description = "View「row」")
    private JSONArray rows;

    @Schema(description = "View「columns」")
    private JSONArray columns;

    @Schema(description = "View Properties")
    private String property;

    @Schema(description = "View Type 1-DataSheet「Grid」")
    private Integer type;

    @Schema(description = "View Description")
    private String description;

    @Schema(description = "The number of frozen view columns, starting from the first column, is "
        + "1 by default")
    private Integer frozenColumnCount;

    @Schema(description = "View Hide Options")
    private Boolean hidden;

    @Schema(description = "Filter Items")
    private JSONObject filterInfo;

    @Schema(description = "Sort")
    private JSONArray sortInfo;

    @Schema(description = "Row height")
    private Integer rowHeightLevel;

    @Schema(description = "Group")
    private JSONArray groupInfo;

    @Schema(description = "Album View Style")
    private JSONObject style;
}
