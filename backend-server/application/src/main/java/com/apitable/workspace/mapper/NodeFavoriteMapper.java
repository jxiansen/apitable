

package com.apitable.workspace.mapper;

import com.apitable.workspace.dto.NodeTreeDTO;
import com.apitable.workspace.entity.NodeFavoriteEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * node favorite mapper.
 */
public interface NodeFavoriteMapper extends BaseMapper<NodeFavoriteEntity> {

    /**
     * query node ids by member id.
     *
     * @param memberId member id
     * @return node ids
     */
    List<String> selectNodeIdByMemberId(@Param("memberId") Long memberId);

    /**
     * Query node tree information.
     *
     * @param memberId member id
     * @return List of NodeTreeDTO
     */
    List<NodeTreeDTO> selectNodeTreeDTOByMemberId(@Param("memberId") Long memberId);

    /**
     * query count by member id and node id.
     *
     * @param memberId member id
     * @param nodeId   node id
     * @return count
     */
    Integer countByMemberIdAndNodeId(@Param("memberId") Long memberId,
                                     @Param("nodeId") String nodeId);

    /**
     * query pre node id by member id and node id.
     *
     * @param memberId member id
     * @param nodeId   node id
     * @return preNodeId
     */
    String selectPreNodeIdByMemberIdAndNodeId(@Param("memberId") Long memberId,
                                              @Param("nodeId") String nodeId);

    /**
     * change pre node id to other value.
     *
     * @param newPreNodeId    new pre node id
     * @param originPreNodeId origin pre node id
     * @param memberId        member id
     * @return affected rows
     */
    int updatePreNodeIdByMemberIdAndPreNodeId(@Param("newPreNodeId") String newPreNodeId,
                                              @Param("originPreNodeId") String originPreNodeId,
                                              @Param("memberId") Long memberId);

    /**
     * change the node's pre node id.
     *
     * @param preNodeId new pre node id
     * @param memberId  member id
     * @param nodeId    node id
     * @return affected rows
     */
    int updatePreNodeIdByMemberIdAndNodeId(@Param("preNodeId") String preNodeId,
                                           @Param("memberId") Long memberId,
                                           @Param("nodeId") String nodeId);

    /**
     * cancel favorite（hard delete）.
     *
     * @param memberId member id
     * @param nodeId   node id
     * @return affected rows
     */
    int deleteByMemberIdAndNodeId(@Param("memberId") Long memberId, @Param("nodeId") String nodeId);
}
