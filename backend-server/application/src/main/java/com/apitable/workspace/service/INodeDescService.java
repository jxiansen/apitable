

package com.apitable.workspace.service;

import com.apitable.workspace.entity.NodeDescEntity;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;
import java.util.Map;

/**
 * node description service interface.
 */
public interface INodeDescService extends IService<NodeDescEntity> {

    /**
     * edit node description.
     *
     * @param nodeId node id
     * @param desc   node description
     */
    void edit(String nodeId, String desc);

    /**
     * copy node description.
     *
     * @param newNodeMap original node id - new created node id map
     */
    void copyBatch(Map<String, String> newNodeMap);

    /**
     * get node description map.
     *
     * @param nodeIds node id
     * @return map
     */
    Map<String, String> getNodeIdToDescMap(List<String> nodeIds);

    /**
     * insert batch node description.
     *
     * @param nodeDescList node description
     */
    void insertBatch(List<NodeDescEntity> nodeDescList);
}
