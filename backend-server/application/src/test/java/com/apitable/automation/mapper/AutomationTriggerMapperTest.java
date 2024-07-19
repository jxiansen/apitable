

package com.apitable.automation.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractMyBatisMapperTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class AutomationTriggerMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    private AutomationTriggerMapper automationTriggerMapper;

    @Test
    void testSelectCountByRobotIdWithZero() {
        Integer count = automationTriggerMapper.selectCountByRobotId("test_robot_id");
        assertThat(count).isNotNull();
    }
}
