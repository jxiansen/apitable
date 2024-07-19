

package com.apitable.workspace.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Active node request parameters.
 * </p>
 */
@Data
@Schema(description = "Active node request parameters")
public class ActiveSheetsOpRo {

    @Schema(description = "Active node id", example = "dst15")
    private String nodeId;

    @Schema(description = "View ID of active number table", example = "views135")
    private String viewId;

    @Schema(description = "Location (0: working directory; 1: star)", example = "1")
    private Integer position;

}
