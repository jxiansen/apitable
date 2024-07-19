

package com.apitable.workspace.facade;

import com.apitable.workspace.dto.NodeBaseInfoDTO;
import java.util.List;

/**
 * Node Facade.
 *
 * @author Chambers
 */
public interface NodeFacade {

    /**
     * Check if the parent node contains node.
     *
     * @param parentNodeId  parent node id
     * @param nodeId        node id
     * @return contains status
     * @author Chambers
     */
    boolean contains(String parentNodeId, String nodeId);

    /**
     * Get parent path nodes.
     *
     * @param nodeIds           node ids
     * @param includeRootNode   whether include root node
     * @return NodeBaseInfoDTO List
     * @author Chambers
     */
    List<NodeBaseInfoDTO> getParentPathNodes(List<String> nodeIds, boolean includeRootNode);
}
