

package com.apitable.workspace.facade;

import com.apitable.workspace.dto.NodeBaseInfoDTO;
import com.apitable.workspace.enums.NodeType;
import com.apitable.workspace.mapper.NodeMapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Non-CTE node facade implement class.
 */
public class NonCTENodeFacadeImpl implements NodeFacade {

    private final NodeMapper nodeMapper;

    public NonCTENodeFacadeImpl(NodeMapper nodeMapper) {
        this.nodeMapper = nodeMapper;
    }

    @Override
    public boolean contains(String parentNodeId, String nodeId) {
        if (nodeId == null) {
            return false;
        }
        while (!parentNodeId.equals(nodeId)) {
            NodeBaseInfoDTO baseNodeInfo = nodeMapper.selectNodeBaseInfoByNodeId(nodeId);
            if (baseNodeInfo == null || NodeType.ROOT.getNodeType() == baseNodeInfo.getType()) {
                return false;
            }
            nodeId = baseNodeInfo.getParentId();
        }
        return true;
    }

    @Override
    public List<NodeBaseInfoDTO> getParentPathNodes(List<String> nodeIds, boolean includeRootNode) {
        Map<String, NodeBaseInfoDTO> nodeIdToNodeMap = new HashMap<>();
        Set<String> parentIds = new HashSet<>(nodeIds);
        while (parentIds.size() > 0) {
            List<NodeBaseInfoDTO> nodes =
                nodeMapper.selectNodeBaseInfosByNodeIds(parentIds, false);
            parentIds = new HashSet<>();
            for (NodeBaseInfoDTO node : nodes) {
                if (nodeIdToNodeMap.containsKey(node.getNodeId())
                    || (!includeRootNode && node.getType().equals(NodeType.ROOT.getNodeType()))) {
                    continue;
                }
                if (!nodeIdToNodeMap.containsKey(node.getParentId())) {
                    parentIds.add(node.getParentId());
                }
                nodeIdToNodeMap.put(node.getNodeId(), node);
            }
        }
        return new ArrayList<>(nodeIdToNodeMap.values());
    }
}
