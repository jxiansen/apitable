

package com.apitable.automation.service;

import com.apitable.automation.entity.AutomationRunHistoryEntity;
import com.apitable.automation.model.AutomationRunTaskVO;
import com.apitable.automation.model.AutomationTaskSimpleVO;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import java.util.List;

/**
 * Automation run history service interface.
 */
public interface IAutomationRunHistoryService extends IService<AutomationRunHistoryEntity> {

    /**
     * query the history with page.
     *
     * @param spaceId space id
     * @param robotId robot id
     * @param page    page
     * @return AutomationTaskSimpleVO
     */
    List<AutomationTaskSimpleVO> getRobotRunHistory(String spaceId, String robotId,
                                                    Page<Void> page);

    /**
     * query the history with task id.
     *
     * @param taskId task id
     * @return AutomationTriggerEntity
     */
    AutomationRunTaskVO getByTaskDetail(String taskId);
}
