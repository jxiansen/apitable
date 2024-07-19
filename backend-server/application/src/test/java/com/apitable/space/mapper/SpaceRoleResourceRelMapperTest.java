

package com.apitable.space.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.collection.CollUtil;
import com.apitable.AbstractMyBatisMapperTest;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

public class SpaceRoleResourceRelMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceRoleResourceRelMapper spaceRoleResourceRelMapper;

    @Test
    @Sql("/sql/space-role-resource-rel-data.sql")
    void testSelectRoleCodeByResourceCodes() {
        List<String> roles = spaceRoleResourceRelMapper.selectRoleCodeByResourceCodes(CollUtil.newArrayList("MANAGE_WORKBENCH_SETTING"));
        assertThat(roles).isNotEmpty();
    }

    @Test
    @Sql("/sql/space-role-resource-rel-data.sql")
    void testSelectResourceCodesByRoleCode() {
        List<String> resourceCodes = spaceRoleResourceRelMapper.selectResourceCodesByRoleCode("ROLE_SPCWYNIGV7BQF_95D9F5");
        assertThat(resourceCodes).isNotEmpty();
        assertThat(resourceCodes.size()).isEqualTo(1);
        assertThat(resourceCodes.get(0)).isEqualTo("MANAGE_WORKBENCH_SETTING");
    }

}
