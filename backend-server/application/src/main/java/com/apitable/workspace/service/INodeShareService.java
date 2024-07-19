

package com.apitable.workspace.service;

import com.apitable.workspace.dto.NodeSharePropsDTO;
import com.apitable.workspace.vo.NodeShareInfoVO;
import com.apitable.workspace.vo.NodeShareSettingInfoVO;
import java.util.Optional;

/**
 * node share service.
 */
public interface INodeShareService {

    /**
     * obtain node sharing settings.
     *
     * @param nodeId node id
     * @return NodeShareSettingsVo
     */
    NodeShareSettingInfoVO getNodeShareSettings(String nodeId);

    /**
     * change sharing settings.
     *
     * @param userId user id
     * @param nodeId node id
     * @param props  sharing props
     * @return id
     */
    String updateShareSetting(Long userId, String nodeId, NodeSharePropsDTO props);

    /**
     * get node share info.
     *
     * @param shareId shareId
     * @return NodeShareInfoVo
     */
    NodeShareInfoVO getNodeShareInfo(String shareId);

    /**
     * check share .
     *
     * @param shareId shareId
     */
    void checkShareIfExist(String shareId);

    /**
     * Check whether the number table and the parent node path are shared.
     *
     * @param dstId datasheet id
     */
    void checkNodeHasShare(String dstId);

    /**
     * Check whether the node is shared.
     *
     * @param nodeId node id
     */
    void checkNodeShareStatus(String nodeId);

    /**
     * get shared status of the node.
     *
     * @param nodeId node id
     */
    boolean isNodeShared(String nodeId);

    /**
     * turn off node sharing.
     *
     * @param userId user id
     * @param nodeId node id
     */
    void disableNodeShare(Long userId, String nodeId);

    /**
     * turn off all user node sharing.
     *
     * @param userId user id
     */
    void disableNodeSharesByUserId(Long userId);

    /**
     * Transfer shared node data to designated space station.
     *
     * @param userId  user id
     * @param spaceId space id
     * @param shareId shareId
     * @return new node id
     */
    String storeShareData(Long userId, String spaceId, String shareId);

    /**
     * get node name by shareId.
     *
     * @param shareId shareId
     * @return nodeName
     */
    Optional<String> getNodeNameByShareId(String shareId);
}
