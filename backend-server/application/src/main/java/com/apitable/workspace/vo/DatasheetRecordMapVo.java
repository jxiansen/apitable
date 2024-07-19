

package com.apitable.workspace.vo;

import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * <p>
 * Record Map returns the result value of multiple records in the data table.
 * </p>
 */
@Schema(description = "Record Map returns the result value of multiple records in the data table")
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class DatasheetRecordMapVo {

    @Schema(description = "Datasheet ID", hidden = true)
    String dstId;

    @Schema(description = "Record Map Collection")
    JSONObject recordMap;

}
