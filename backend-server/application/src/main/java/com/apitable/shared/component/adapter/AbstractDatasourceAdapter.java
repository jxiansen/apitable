

package com.apitable.shared.component.adapter;

import java.util.List;
import java.util.stream.Collectors;

/**
 * abstract datasource adapter.
 */
public abstract class AbstractDatasourceAdapter implements DatasourceAdapter {

    private static final int RECENTLY_NODE_ID_LENGTH = 10;

    protected List<String> getTheLatestVisitedNodeIds(List<String> originNodeIds, String nodeId) {
        // filter current node id
        List<String> nodeIds =
            originNodeIds.stream().filter(i -> !nodeId.equals(i)).collect(Collectors.toList());
        if (nodeIds.size() >= RECENTLY_NODE_ID_LENGTH) {
            nodeIds.remove(0);
        }
        nodeIds.add(nodeId);
        return nodeIds;
    }
}
