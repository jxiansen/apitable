

package com.apitable.workspace.facade;

import com.apitable.shared.util.CollectionUtil;
import com.apitable.shared.util.DBUtil;
import com.apitable.workspace.dto.NodeBaseInfoDTO;
import com.apitable.workspace.mapper.NodeMapper;
import java.util.Collections;
import java.util.List;

/**
 * Default CTE node facade implement class.
 */
public class DefaultCTENodeFacadeImpl implements NodeFacade {

    private final NodeMapper nodeMapper;

    public DefaultCTENodeFacadeImpl(NodeMapper nodeMapper) {
        this.nodeMapper = nodeMapper;
    }

    @Override
    public boolean contains(String parentNodeId, String nodeId) {
        if (nodeId == null) {
            return false;
        }
        if (parentNodeId.equals(nodeId)) {
            return true;
        }
        List<NodeBaseInfoDTO> parentPathNodes =
            this.getParentPathNodes(Collections.singletonList(nodeId), true);
        return parentPathNodes.stream()
            .map(NodeBaseInfoDTO::getNodeId)
            .anyMatch(i -> i.equals(parentNodeId));
    }

    @Override
    public List<NodeBaseInfoDTO> getParentPathNodes(List<String> nodeIds, boolean includeRootNode) {
        List<NodeBaseInfoDTO> nodes = DBUtil.batchSelectByFieldIn(nodeIds,
                (ids) -> nodeMapper.selectAllParentNodeIds(ids, includeRootNode));
        return CollectionUtil.distinctByProperty(nodes, NodeBaseInfoDTO::getNodeId);
    }
}
