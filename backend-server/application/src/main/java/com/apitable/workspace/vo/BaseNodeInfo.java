

package com.apitable.workspace.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * Basic node information.
 */
@Data
public class BaseNodeInfo {

    @Schema(description = "Node ID", example = "nod10")
    protected String nodeId;

    @Schema(description = "Node Name", example = "This is a node")
    protected String nodeName;

    @Schema(description = "Node Type 0-ROOT（Root node） 1-folder（Folder） 2-file（Datasheet）",
        example = "1")
    private Integer type;
}
