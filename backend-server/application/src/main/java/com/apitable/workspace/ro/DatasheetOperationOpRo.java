

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * DataSheet Operation Request Parameters.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Schema(description = "DataSheet Operation Request Parameters")
public class DatasheetOperationOpRo {


    @Schema(description = "Operation ID")
    private String opId;

    @Schema(description = "Meter ID")
    private String dstId;

    @Schema(description = "Operation name")
    private String actionName;

    @Schema(description = "Collection of operations")
    private String actions;

    @Schema(description = "Type 1-JOT 2-COT")
    private Integer type;

    @Schema(description = "Action member ID")
    private Long memberId;

    @Schema(description = "Version")
    private Long revision;


}
