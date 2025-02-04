

package com.apitable.workspace.mapper;

import com.apitable.workspace.dto.NodeShareDTO;
import com.apitable.workspace.entity.NodeShareSettingEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * node share setting mapper.
 */
public interface NodeShareSettingMapper extends BaseMapper<NodeShareSettingEntity> {

    /**
     * query by share id.
     *
     * @param shareId sharing node id
     * @return NodeShareSettingEntity
     */
    NodeShareSettingEntity selectByShareId(@Param("shareId") String shareId);

    /**
     * query enabled by yser id.
     *
     * @param userId user id
     * @return NodeShareSettingEntity
     */
    List<NodeShareSettingEntity> selectEnabledByUserId(@Param("userId") Long userId);

    /**
     * query sharing settings.
     *
     * @param nodeId node id
     * @return NodeShareSettingEntity
     */
    NodeShareSettingEntity selectByNodeId(@Param("nodeId") String nodeId);

    /**
     * query node id by share id.
     *
     * @param shareId share id
     * @return node id
     */
    String selectNodeIdByShareId(@Param("shareId") String shareId);

    /**
     * find the last editor according to the shareid.
     *
     * @param shareId shareId
     * @return last editor
     */
    Long selectUpdatedByByShareId(@Param("shareId") String shareId);

    /**
     * batch prohibition of node sharing.
     *
     * @param nodeIds node ids
     * @return affected nodes
     */
    int disableByNodeIds(@Param("nodeIds") List<String> nodeIds);

    /**
     * query space id exclude deleted.
     *
     * @param shareId sharing node id
     * @return space id
     */
    String selectSpaceIdByShareId(@Param("shareId") String shareId);

    /**
     * query space id include deleted.
     *
     * @param shareId sharing node id
     * @return space id
     */
    String selectSpaceIdByShareIdIncludeDeleted(@Param("shareId") String shareId);

    /**
     * query setting info.
     *
     * @param shareId sharing id
     * @return NodeShareDTO
     */
    NodeShareDTO selectDtoByShareId(@Param("shareId") String shareId);

    /**
     * query setting info.
     *
     * @param nodeIds node ids
     * @return NodeShareDTOs
     */
    List<NodeShareDTO> selectDtoByNodeIds(@Param("nodeIds") List<String> nodeIds);

    /**
     * Find the list of shared node IDs last modified by the specified member.
     *
     * @param updaters last modifier list
     * @param spaceId  space id
     * @return node ids
     */
    List<String> selectNodeIdsByUpdatersAndSpaceId(@Param("updaters") List<Long> updaters,
                                                   @Param("spaceId") String spaceId);

    /**
     * query nodeId and isEnabled.
     *
     * @param shareId share id
     * @return NodeShareSettingEntity
     */
    NodeShareSettingEntity selectNodeIdAndEnabledByShareId(@Param("shareId") String shareId);

    /**
     * query is_enabled by node id.
     *
     * @param nodeId node id
     * @return Boolean
     */
    Boolean selectIsEnabledByNodeId(@Param("nodeId") String nodeId);

    /**
     * get share permission.
     *
     * @param shareId share id
     * @return NodeShareSettingEntity
     */
    NodeShareSettingEntity selectAllowSaveAndAllowEditByShareId(@Param("shareId") String shareId);
}
