

package com.apitable.automation.service;

import com.apitable.automation.entity.AutomationRobotEntity;
import com.apitable.automation.model.AutomationCopyOptions;
import com.apitable.automation.model.AutomationRobotDto;
import com.apitable.automation.model.AutomationSimpleVO;
import com.apitable.automation.model.AutomationVO;
import com.apitable.automation.model.TriggerCopyResultDto;
import com.apitable.automation.model.UpdateRobotRO;
import java.util.List;
import java.util.Map;

/**
 * automation robot service.
 */
public interface IAutomationRobotService {

    /**
     * Get the automation robot list by the resource id.
     *
     * @param resourceId resource id
     */
    List<AutomationRobotDto> getRobotListByResourceId(String resourceId);

    /**
     * create automation robot.
     *
     * @param robot robot entity
     */
    void create(AutomationRobotEntity robot);

    /**
     * copy automation.
     *
     * @param userId      user id
     * @param resourceIds resource ids
     * @param options     options
     * @param newNodeMap  new node map
     */
    TriggerCopyResultDto copy(Long userId, List<String> resourceIds,
                              AutomationCopyOptions options, Map<String, String> newNodeMap);

    /**
     * copy automation.
     *
     * @param userId      user id
     * @param resourceIds resource ids
     * @param options     options
     * @param newNodeMap  new node map
     */
    void copyByDatabus(Long userId, List<String> resourceIds,
                       AutomationCopyOptions options, Map<String, String> newNodeMap);

    /**
     * update automation robot name by resource id.
     *
     * @param resourceId resource id
     * @param name       name
     */
    void updateNameByResourceId(String resourceId, String name);

    /**
     * update automation robot by robot id.
     *
     * @param robot robot entity
     */
    void updateByRobotId(AutomationRobotEntity robot);

    /**
     * Update by robot id.
     *
     * @param robotId robot id
     */
    void updateUpdaterByRobotId(String robotId, Long updatedBy);

    /**
     * update automation robot by robot id.
     *
     * @param userId      user id
     * @param resourceIds resource ids
     * @param isDeleted   is deleted
     */
    void updateIsDeletedByResourceIds(Long userId, List<String> resourceIds, Boolean isDeleted);

    /**
     * Batch delete robot.
     *
     * @param robotIds robot ids
     */
    void delete(List<String> robotIds);

    /**
     * get robots introduction list.
     *
     * @param resourceId resource id
     */
    List<AutomationSimpleVO> getRobotsByResourceId(String resourceId);

    /**
     * get automation detail.
     *
     * @param robotId robot id
     */
    AutomationVO getRobotByRobotId(String robotId);

    void checkAutomationReference(List<String> subNodeIds, List<String> resourceIds);

    /**
     * Update automation robot.
     *
     * @param robotId robot id
     * @param data    ro data
     * @param updater update user id
     */
    boolean update(String robotId, Long updater, UpdateRobotRO data);

    /**
     * delete automation robot.
     *
     * @param robotId robot id
     * @param updater updater
     */
    void deleteRobot(String robotId, Long updater);

    /**
     * get robot runs count by space id.
     *
     * @param spaceId space id
     * @return robot runs count
     */
    long getRobotRunsCountBySpaceId(String spaceId);

    /**
     * check robot exists.
     *
     * @param robotId robot id
     */
    void checkRobotExists(String robotId);

    /**
     * get robot count.
     *
     * @param nodeIds dst id
     * @return count
     */
    boolean linkByOutsideAutomation(List<String> nodeIds);
}
