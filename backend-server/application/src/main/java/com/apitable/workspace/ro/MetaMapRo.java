

package com.apitable.workspace.ro;

import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * DataSheet meta set parameter.
 * </p>
 */
@Schema(description = "DataSheet meta set parameter")
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
public class MetaMapRo {

    @Schema(description = "DataSheet field set")
    private JSONObject fieldMap;

    @Schema(description = "View array（Save viewId）")
    private JSONArray views;

    @Schema(description = "Component panel")
    private JSONArray widgetPanels;
}
