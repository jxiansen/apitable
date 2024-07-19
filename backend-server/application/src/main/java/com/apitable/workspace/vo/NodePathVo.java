

package com.apitable.workspace.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * Node Path View.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Node Path View")
public class NodePathVo {

    @Schema(description = "Node ID", example = "nod10")
    private String nodeId;

    @Schema(description = "Node Name", example = "This is a node")
    private String nodeName;
}
