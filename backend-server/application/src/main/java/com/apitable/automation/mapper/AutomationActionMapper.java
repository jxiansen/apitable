

package com.apitable.automation.mapper;

import com.apitable.automation.entity.AutomationActionEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.Collection;
import java.util.List;
import org.apache.ibatis.annotations.Param;

/**
 * automation action mapper.
 */
public interface AutomationActionMapper extends BaseMapper<AutomationActionEntity> {

    /**
     * query by robot id list.
     *
     * @param robotIds robot id list
     * @return action list
     */
    List<AutomationActionEntity> selectByRobotIdIds(
        @Param("robotIds") Collection<String> robotIds);

    /**
     * insert batch.
     *
     * @param entities entity list
     */
    void insertList(@Param("entities") Collection<AutomationActionEntity> entities);

    /**
     * update action type id and input by robot id.
     *
     * @param robotId             robot id
     * @param updatedActionTypeId updated action type id
     * @param updatedInput        updated input
     * @return affected rows
     */
    int updateActionTypeIdAndInputByRobotId(@Param("robotId") String robotId,
                                            @Param("updatedActionTypeId")
                                            String updatedActionTypeId,
                                            @Param("updatedInput") String updatedInput);

    /**
     * query by action id.
     *
     * @param actionId action id
     * @return AutomationActionEntity
     */
    AutomationActionEntity selectByActionId(@Param("actionId") String actionId);
}
