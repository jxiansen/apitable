

package com.apitable.interfaces.automation.facede;

import java.util.Map;

/**
 * automation service facade.
 */
public interface AutomationServiceFacade {
    /**
     * publish schedule.
     *
     * @param scheduleId schedule id
     */
    void publishSchedule(Long scheduleId);

    /**
     * copy trigger schedule.
     *
     * @param newTriggerMap old triggerId -> new triggerId
     */
    void copy(Map<String, String> newTriggerMap);

    /**
     * create schedule.
     *
     * @param spaceId        space id
     * @param triggerId      trigger id
     * @param scheduleConfig config
     */
    void createSchedule(String spaceId, String triggerId, String scheduleConfig);

    /**
     * update schedule.
     *
     * @param triggerId      trigger id
     * @param scheduleConfig config
     */
    void updateSchedule(String triggerId, String scheduleConfig);

    /**
     * delete schedule.
     *
     * @param triggerId trigger id
     * @param userId user id
     */
    void deleteSchedule(String triggerId, Long userId);
}
