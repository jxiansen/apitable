

package com.apitable.automation.service.impl;

import com.apitable.automation.entity.AutomationTriggerTypeEntity;
import com.apitable.automation.mapper.AutomationTriggerTypeMapper;
import com.apitable.automation.service.IAutomationTriggerTypeService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * AutomationTriggerTypeServiceImpl.
 */
@Slf4j
@Service
public class AutomationTriggerTypeServiceImpl
    extends ServiceImpl<AutomationTriggerTypeMapper, AutomationTriggerTypeEntity>
    implements IAutomationTriggerTypeService {

    @Resource
    private AutomationTriggerTypeMapper triggerTypeMapper;

    @Override
    public String getTriggerTypeByEndpoint(String endpoint) {
        return triggerTypeMapper.getTriggerTypeByEndpoint(endpoint);
    }
}
