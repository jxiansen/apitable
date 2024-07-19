

package com.apitable.automation.mapper;

import com.apitable.automation.entity.AutomationActionTypeEntity;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

/**
 * action type mapping.
 */
public interface AutomationActionTypeMapper extends BaseMapper<AutomationActionTypeEntity> {

    /**
     * Get action type by endpoint.
     *
     * @param endpoint  invocation interface
     * @return action type
     */
    String getActionTypeIdByEndpoint(@Param("endpoint") String endpoint);

    Long selectIdByActionTypeId(@Param("actionTypeId") String actionTypeId);

    /**
     * query endpoint.
     *
     * @param actionTypeId action type id
     * @return endpoint
     */
    String selectEndpointByActionTypeId(@Param("actionTypeId") String actionTypeId);
}
