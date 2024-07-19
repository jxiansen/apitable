

package com.apitable.workspace.ro;

import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DataSheet Snapshot OP Operation Request Parameters.
 */
@Schema(description = "DataSheet Snapshot OP Operation Request Parameters")
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
public class OperationMapRo {

    @Schema(description = "Operation instruction")
    private String cmd;

    @Schema(description = "DataSheet record set")
    private List<JSONObject> actions;
}
