

package com.apitable.automation.mapper;

import com.apitable.automation.entity.AutomationTriggerTypeEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * AutomationTriggerTypeMapper.
 */
public interface AutomationTriggerTypeMapper extends BaseMapper<AutomationTriggerTypeEntity> {

    Long selectIdByTriggerTypeId(@Param("triggerTypeId") String triggerTypeId);

    String getTriggerTypeByEndpoint(String endpoint);
}
