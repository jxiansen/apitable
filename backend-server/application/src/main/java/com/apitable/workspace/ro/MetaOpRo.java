

package com.apitable.workspace.ro;

import cn.hutool.json.JSONObject;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DataSheet Meta Operation Request Parameters.
 */
@Schema(description = "DataSheet Meta Operation Request Parameters")
@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(toBuilder = true)
public class MetaOpRo {


    @Schema(description = "fieldMap and viewMap Data", example = "")
    private JSONObject meta;

    @Schema(description = "Version No", example = "0")
    private Long revision;

}
