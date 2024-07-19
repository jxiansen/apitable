

package com.apitable.workspace.service;

import com.apitable.workspace.vo.FavoriteNodeInfo;
import java.util.List;

/**
 * node favorite service.
 */
public interface INodeFavoriteService {

    /**
     * get the favorite node ids by member id.
     *
     * @param memberId member id
     * @return FavoriteNodeIds
     */
    List<String> getFavoriteNodeIdsByMemberId(Long memberId);

    /**
     * get favorite node list of space.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @return FavoriteNodeInfos
     */
    List<FavoriteNodeInfo> getFavoriteNodeList(String spaceId, Long memberId);

    /**
     * move the location of the favorite node.
     *
     * @param memberId  member id
     * @param nodeId    node id
     * @param preNodeId the front node of the target position
     */
    void move(Long memberId, String nodeId, String preNodeId);

    /**
     * change the favorite status of the node.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @param nodeId   node id
     */
    void updateFavoriteStatus(String spaceId, Long memberId, String nodeId);
}
