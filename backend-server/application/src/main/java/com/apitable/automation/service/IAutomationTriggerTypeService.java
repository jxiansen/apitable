

package com.apitable.automation.service;

import com.apitable.automation.entity.AutomationTriggerTypeEntity;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * IAutomationTriggerTypeService.
 */
public interface IAutomationTriggerTypeService extends IService<AutomationTriggerTypeEntity> {

    String getTriggerTypeByEndpoint(String endpoint);
}
