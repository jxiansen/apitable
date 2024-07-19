

package com.apitable.shared.component.adapter;

import com.apitable.workspace.enums.NodeType;
import java.util.List;

/**
 * datasource adapter.
 */
public interface DatasourceAdapter {

    /**
     * get recently visit node ids.
     *
     * @param memberId member id
     * @param nodeType node type
     * @return recently visit node ids
     */
    List<String> getRecentlyVisitNodeIds(Long memberId, NodeType nodeType);

    /**
     * save or update node visit record.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @param nodeId   node id
     * @param nodeType node type
     */
    void saveOrUpdateNodeVisitRecord(String spaceId, Long memberId, String nodeId,
                                     NodeType nodeType);
}
