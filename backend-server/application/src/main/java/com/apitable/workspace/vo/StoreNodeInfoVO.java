

package com.apitable.workspace.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * Node Transfer Result View.
 * </p>
 */
@Data
@Schema(description = "Node Transfer Result View")
public class StoreNodeInfoVO {

    @Schema(description = "New Node ID", example = "nod2818jsak")
    private String nodeId;
}
