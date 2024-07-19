

package com.apitable.workspace.vo;

import cn.hutool.json.JSONObject;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 * <p>
 * Data Table Record Return Parameter.
 * </p>
 */
@Schema(description = "Data Table Record Return Parameter")
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class DatasheetRecordVo {

    @Schema(description = "Record ID")
    private String id;

    @Schema(description = "Data recorded in one row (corresponding to each field)")
    private JSONObject data;

    @Schema(description = "The historical version number sorted is the revision of the original "
        + "operation, and the array subscript is the revision of the current record")
    private int[] revisionHistory;

    @Schema(description = "Version No")
    private Long revision;

    @Schema(description = "recordMeta", hidden = true)
    @JsonIgnore
    private String recordMeta;
}
