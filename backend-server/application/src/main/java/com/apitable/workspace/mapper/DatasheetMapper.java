

package com.apitable.workspace.mapper;

import com.apitable.workspace.entity.DatasheetEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * datasheet mapper.
 */
public interface DatasheetMapper extends BaseMapper<DatasheetEntity> {

    /**
     * insert batch.
     *
     * @param entities datasheets
     * @return affected rows
     */
    int insertBatch(@Param("entities") List<DatasheetEntity> entities);

    /**
     * update name by dst id.
     *
     * @param userId  user id
     * @param dstId   datasheet id
     * @param dstName new datasheet name
     * @return affected rows
     */
    int updateNameByDstId(@Param("userId") Long userId, @Param("dstId") String dstId,
                          @Param("dstName") String dstName);

    /**
     * update is deleted by dst id.
     *
     * @param userId  user id
     * @param nodeIds node ids
     * @param isDel   logical delete status
     * @return affected rows
     */
    int updateIsDeletedByNodeIds(@Param("userId") Long userId,
                                 @Param("nodeIds") Collection<String> nodeIds,
                                 @Param("isDel") Boolean isDel);

    /**
     * query by datasheet id.
     *
     * @param nodeId datasheet id
     * @return DatasheetEntity
     */
    DatasheetEntity selectByDstId(@Param("nodeId") String nodeId);

    /**
     * query space dst id.
     *
     * @param spaceId space id
     * @return list of dst id
     */
    List<String> selectDstIdBySpaceId(@Param("spaceId") String spaceId);

    /**
     * query space id by dst id.
     */
    String selectSpaceIdByDstId(@Param("dstId") String dstId);
}
