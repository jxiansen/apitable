

package com.apitable.automation.service.impl;

import cn.hutool.core.util.StrUtil;
import com.apitable.automation.enums.AutomationActionType;
import com.apitable.automation.mapper.AutomationActionTypeMapper;
import com.apitable.automation.service.IAutomationActionTypeService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * action type service implementation.
 */
@Slf4j
@Service
public class AutomationActionTypeServiceImpl implements IAutomationActionTypeService {

    @Resource
    private AutomationActionTypeMapper actionTypeMapper;

    @Override
    public String getActionTypeIdByEndpoint(String endpoint) {
        return actionTypeMapper.getActionTypeIdByEndpoint(endpoint);
    }

    @Override
    public boolean isSendEmailAction(String actionTypeId) {
        String endpoint = actionTypeMapper.selectEndpointByActionTypeId(actionTypeId);
        return StrUtil.equals(endpoint, AutomationActionType.SEND_MAIL.getType());
    }

}
