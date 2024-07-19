

package com.apitable.automation.mapper;

import com.apitable.automation.entity.AutomationRunHistoryEntity;
import com.apitable.automation.model.AutomationRunHistoryDTO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import java.time.LocalDate;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * automation history mapper.
 */
public interface AutomationRunHistoryMapper extends BaseMapper<AutomationRunHistoryEntity> {
    /**
     * query id by robot id and created at.
     *
     * @param spaceId space id
     * @param robotId robot id
     * @param startAt start times
     * @param endAt   end times
     * @param page    page
     * @return IPage NodeStatisticsDTO
     */
    IPage<Long> selectIdByRobotIdAndSpaceIdAndBetweenWithPage(@Param("robotId") String robotId,
                                                              @Param("spaceId") String spaceId,
                                                              @Param("startAt") LocalDate startAt,
                                                              @Param("endAt") LocalDate endAt,
                                                              Page<Void> page);

    /**
     * query base info.
     *
     * @param ids primary keys
     * @return AutomationRunHistoryDTO
     */
    List<AutomationRunHistoryDTO> selectByIds(@Param("ids") List<Long> ids);

    /**
     * query detail.
     *
     * @param taskId task id
     * @return AutomationRunHistoryEntity
     */
    AutomationRunHistoryEntity selectByTaskId(@Param("taskId") String taskId);
}
