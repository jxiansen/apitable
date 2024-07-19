

package com.apitable.workspace.ro;

import cn.hutool.json.JSONObject;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * DataSheet record request parameters.
 * </p>
 */
@Schema(description = "DataSheet record request parameters")
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class RecordMapRo {

    @Schema(description = "Record ID")
    private String id;

    @Schema(description = "Data recorded in one row (corresponding to each field)")
    private JSONObject data;

    @Schema(description = "The historical version number sorted is the revision of the original "
        + "operation, and the array subscript is the revision of the current record")
    private String revisionHistory;

    @Schema(description = "Version No")
    private Long revision;

    @JsonIgnore
    @TableLogic
    @Schema(description = "Delete tag (0: No, 1: Yes)")
    private Boolean isDeleted;

    @Schema(description = "recordMeta fieldUpdatedMap")
    private JSONObject fieldUpdatedMap;
}
