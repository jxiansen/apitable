

package com.apitable.workspace.service;

import com.apitable.workspace.vo.RubbishNodeVo;
import java.util.List;

/**
 * node rubbish service.
 */
public interface INodeRubbishService {

    /**
     * get the list of rubbish node.
     *
     * @param spaceId    space id
     * @param memberId   member id
     * @param size       expected load quantity（May be because the total number or permissions are not enough）
     * @param lastNodeId id of the last node in the loaded list
     * @return DeletedNodeVo
     */
    List<RubbishNodeVo> getRubbishNodeList(String spaceId, Long memberId, Integer size,
                                           String lastNodeId);

    /**
     * Check whether the rubbish node exists and whether the members have permissions.
     *
     * @param spaceId  space id
     * @param memberId member id
     * @param nodeId   node id
     */
    void checkRubbishNode(String spaceId, Long memberId, String nodeId);

    /**
     * restore the node of the rubbish.
     *
     * @param userId   user id
     * @param nodeId   the id of the restored node
     * @param parentId parent node of recovery location
     */
    void recoverRubbishNode(Long userId, String nodeId, String parentId);

    /**
     * delete rubbish node.
     *
     * @param userId user id
     * @param nodeId the id of the cleared node
     */
    void delRubbishNode(Long userId, String nodeId);
}
