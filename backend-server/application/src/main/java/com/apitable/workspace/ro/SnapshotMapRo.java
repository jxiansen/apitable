

package com.apitable.workspace.ro;

import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DataSheet Snapshot Operation Request Parameters.
 */
@Schema(description = "DataSheet Snapshot Operation Request Parameters")
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
public class SnapshotMapRo {

    @Schema(description = "DataSheet meta set")
    private JSONObject meta;

    @Schema(description = "DataSheet record set")
    private JSONObject recordMap;
}
