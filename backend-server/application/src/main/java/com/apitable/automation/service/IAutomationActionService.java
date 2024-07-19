

package com.apitable.automation.service;

import cn.hutool.json.JSON;
import com.apitable.automation.entity.AutomationActionEntity;
import com.apitable.automation.model.ActionVO;
import com.apitable.automation.model.CreateActionRO;
import com.apitable.automation.model.TriggerCopyResultDto;
import com.apitable.automation.model.UpdateActionRO;
import java.util.List;
import java.util.Map;

/**
 * automation action service.
 */
public interface IAutomationActionService {

    /**
     * create action.
     *
     * @param action entity
     */
    void create(AutomationActionEntity action);

    /**
     * copy action.
     *
     * @param userId      user id
     * @param newRobotMap new robot map
     * @param resultDto   result dto
     */
    void copy(Long userId, Map<String, String> newRobotMap, TriggerCopyResultDto resultDto);

    /**
     * update action type id and input by robot id.
     *
     * @param robotId      robot id
     * @param actionTypeId action type id
     * @param input        input
     */
    void updateActionTypeIdAndInputByRobotId(String robotId, String actionTypeId, String input);

    /**
     * Create trigger.
     *
     * @param userId creator's user id
     * @param data   data
     * @return ActionVO
     */
    List<ActionVO> createByDatabus(Long userId, CreateActionRO data);

    /**
     * Update trigger.
     *
     * @param userId   creator's user id
     * @param actionId action id
     * @param data     data
     * @return ActionVO
     */
    List<ActionVO> updateByDatabus(String actionId, Long userId, UpdateActionRO data);

    /**
     * Delete trigger.
     *
     * @param robotId  robot id
     * @param actionId action id
     * @param userId   operator user id
     */
    void deleteByDatabus(String robotId, String actionId, Long userId);

    /**
     * handle action input, replace password.
     *
     * @param input input
     * @return input
     */
    JSON handleActionInput(String input);
}