

package com.apitable.workspace.ro;

import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * DataSheet field request parameters.
 * </p>
 */
@Schema(description = "DataSheet field request parameters")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class FieldMapRo {

    @Schema(description = "Field Custom Id")
    private String id;

    @Schema(description = "Field Name")
    private String name;

    @Schema(description = "Describe")
    private String desc;

    @Schema(description = "Field Type 1-Text「Text」2-Number「NUMBER」 3-Single choice "
        + "「SINGLESELECT」4-Multiple choice「MULTISELECT」 5-Date「DATETIME」 6-Enclosure「ATTACHMENT」 "
        + "7-Relation「LINK」")
    private Integer type;

    @Schema(description = "Attribute")
    private JSONObject property;

    @Schema(description = "Set as required in the form")
    private Boolean required;
}
