

package com.apitable.internal.dto;

import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Table Meta Result Value.
 */
@Schema(description = "Data Table Meta Result Value")
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
public class SimpleDatasheetMetaDTO {

    @Schema(description = "Field Map and View Map Data")
    private JSONObject meta;
}
