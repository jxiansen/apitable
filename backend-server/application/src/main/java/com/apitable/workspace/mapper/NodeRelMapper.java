

package com.apitable.workspace.mapper;

import com.apitable.workspace.dto.NodeRelDTO;
import com.apitable.workspace.entity.NodeRelEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * node relation mapper.
 */
public interface NodeRelMapper extends BaseMapper<NodeRelEntity> {

    /**
     * query main node ids by rel node ids.
     *
     * @param relNodeIds associated node ids
     * @return MainNodeIds
     */
    List<String> selectMainNodeIdsByRelNodeIds(@Param("list") List<String> relNodeIds);

    /**
     * query by rel node id.
     *
     * @param relNodeId rel node id
     * @return node rel
     */
    NodeRelEntity selectByRelNodeId(@Param("relNodeId") String relNodeId);

    /**
     * query by rel node ids.
     *
     * @param relNodeIds associated node ids
     * @return NodeRelEntity
     */
    List<NodeRelEntity> selectByRelNodeIds(@Param("list") Collection<String> relNodeIds);

    /**
     * query dto by main node id.
     *
     * @param mainNodeId main node id
     * @return BaseNodeInfo
     */
    List<NodeRelDTO> selectNodeRelDTO(@Param("mainNodeId") String mainNodeId);

    /**
     * add node association.
     *
     * @param entities node rels
     * @return affected rows
     */
    int insertBatch(@Param("entities") List<NodeRelEntity> entities);

    /**
     * get count by main node id.
     *
     * @param mainNodeIds main node id
     * @return total amount
     */
    List<String> selectRelNodeIdsByMainNodeIds(@Param("mainNodeIds") List<String> mainNodeIds);
}
