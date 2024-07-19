

package com.apitable.interfaces.automation.facede;

import java.util.Map;

/**
 * default automation service facade implement.
 */
public class DefaultAutomationServiceFacadeImpl implements AutomationServiceFacade {

    @Override
    public void publishSchedule(Long scheduleId) {
        // do nothing
    }

    @Override
    public void copy(Map<String, String> newTriggerMap) {

    }

    @Override
    public void createSchedule(String spaceId, String triggerId, String scheduleConfig) {
    }

    @Override
    public void updateSchedule(String triggerId, String scheduleConfig) {
        
    }

    @Override
    public void deleteSchedule(String triggerId, Long userId) {

    }
}
