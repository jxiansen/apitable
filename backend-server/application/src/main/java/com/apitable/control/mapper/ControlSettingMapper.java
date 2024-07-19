

package com.apitable.control.mapper;

import com.apitable.control.entity.ControlSettingEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import org.apache.ibatis.annotations.Param;


/**
 * Control Setting Mapper.
 *
 * @author Shawn Deng
 */
public interface ControlSettingMapper extends BaseMapper<ControlSettingEntity> {

    /**
     * Querying permission control unit settings.
     *
     * @param controlId Control unit ID
     * @return ControlSettingEntity
     */
    ControlSettingEntity selectByControlId(@Param("controlId") String controlId);

    /**
     * Find the deleted permission configuration.
     *
     * @param controlId Permission ID
     * @return ControlSettingEntity
     */
    ControlSettingEntity selectDeletedByControlId(@Param("controlId") String controlId);

    /**
     * Batch Query Permission Control Unit Settings.
     *
     * @param controlIds List of control unit IDs
     * @return ControlSettingEntities
     */
    List<ControlSettingEntity> selectBatchByControlIds(
        @Param("controlIds") List<String> controlIds);

    /**
     * Real batch addition.
     *
     * @param entities Entity Class Collection
     * @return Number of successful executions
     */
    int insertBatch(@Param("entities") List<ControlSettingEntity> entities);

    /**
     * Delete permission control unit settings.
     *
     * @param controlIds Control unit ID set
     * @return Number of execution results
     */
    int deleteByControlIds(@Param("userId") Long userId,
                           @Param("controlIds") List<String> controlIds);

    /**
     * Update deletion status.
     *
     * @param userId    Operation user ID
     * @param ids       Primary Key ID Collection
     * @param isDeleted Deleted state
     * @return Integer
     */
    Integer updateIsDeletedByIds(@Param("ids") List<Long> ids, @Param("userId") Long userId,
                                 @Param("isDeleted") Boolean isDeleted);
}
