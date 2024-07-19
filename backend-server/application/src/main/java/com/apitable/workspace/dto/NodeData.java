

package com.apitable.workspace.dto;

import com.apitable.workspace.enums.NodeType;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * node data.
 */
@Data
@AllArgsConstructor
public class NodeData {

    private NodeType type;

    private String nodeId;

    private String nodeName;

    private String preNodeId;

    private String parentId;
}
