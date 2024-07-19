

package com.apitable.space.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractMyBatisMapperTest;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

public class SpaceRoleMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceRoleMapper spaceRoleMapper;

    @Test
    @Sql({"/sql/space-member-role-rel-data.sql", "/sql/space-role-resource-rel-data.sql"})
    void testSelectResourceCodesById() {
        List<String> roles = spaceRoleMapper.selectResourceCodesById(41L);
        assertThat(roles).isNotEmpty();
    }

}
