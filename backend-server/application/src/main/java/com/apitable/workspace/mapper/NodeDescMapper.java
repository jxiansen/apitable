

package com.apitable.workspace.mapper;

import com.apitable.workspace.dto.NodeDescDTO;
import com.apitable.workspace.entity.NodeDescEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * node description mapper.
 */
public interface NodeDescMapper extends BaseMapper<NodeDescEntity> {

    /**
     * query id by node id.
     *
     * @param nodeId node id
     * @return datasheet id
     */
    Long selectIdByNodeId(@Param("nodeId") String nodeId);

    /**
     * query description by node id.
     *
     * @param nodeId node id
     * @return the node's description
     */
    String selectDescriptionByNodeId(@Param("nodeId") String nodeId);

    /**
     * query node description by node ids.
     *
     * @param nodeIds node ids
     * @return node descriptions
     */
    List<NodeDescDTO> selectByNodeIds(@Param("list") Collection<String> nodeIds);

    /**
     * update description by node id.
     *
     * @param nodeId node id
     * @param desc   description
     * @return affected rows
     */
    int updateDescByNodeId(@Param("nodeId") String nodeId, @Param("desc") String desc);

    /**
     * batch insert.
     *
     * @param entities node descriptions
     * @return affected rows
     */
    int insertBatch(@Param("entities") List<NodeDescEntity> entities);
}
