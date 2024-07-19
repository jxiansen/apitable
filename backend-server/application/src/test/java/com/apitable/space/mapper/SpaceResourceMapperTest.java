

package com.apitable.space.mapper;

import java.util.List;

import cn.hutool.core.collection.CollUtil;
import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.shared.cache.bean.SpaceResourceDto;
import com.apitable.space.dto.SpaceGroupResourceDto;
import com.apitable.space.dto.SpaceMemberResourceDto;
import com.apitable.space.dto.SpaceMenuResourceDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class SpaceResourceMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceResourceMapper spaceResourceMapper;

    @Test
    @Sql({ "/sql/space-resource-data.sql", "/sql/space-resource-group-data.sql" })
    void testSelectAllResource() {
        List<SpaceResourceDto> entities = spaceResourceMapper.selectAllResource();
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql({ "/sql/space-resource-data.sql", "/sql/space-resource-group-data.sql",
            "/sql/space-role-resource-rel-data.sql", "/sql/space-role-data.sql",
            "/sql/space-member-role-rel-data.sql"})
    void testSelectResourceByMemberId() {
        List<SpaceResourceDto> entities = spaceResourceMapper.selectResourceByMemberId(41L);
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/space-resource-data.sql")
    void testSelectAssignableCountInResourceCode() {
        Integer count = spaceResourceMapper.selectAssignableCountInResourceCode(CollUtil.newArrayList("MANAGE_WORKBENCH_SETTING"));
        assertThat(count).isEqualTo(1);
    }

    @Test
    @Sql({ "/sql/space-resource-data.sql", "/sql/space-resource-group-data.sql" })
    void testSelectGroupResource() {
        List<SpaceGroupResourceDto> entities = spaceResourceMapper.selectGroupResource();
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql({ "/sql/space-resource-data.sql", "/sql/space-menu-resource-rel-data.sql",
            "/sql/space-menu-data.sql"})
    void testSelectMenuResource() {
        List<SpaceMenuResourceDto> entities = spaceResourceMapper.selectMenuResource();
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/space-resource-data.sql")
    void testSelectResourceCodesByGroupCode() {
        List<String> entities = spaceResourceMapper.selectResourceCodesByGroupCode(CollUtil.newArrayList("MANAGE_SPACE"));
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql({ "/sql/space-member-role-rel-data.sql", "/sql/space-role-resource-rel-data.sql" })
    void testSelectResourceCodesByMemberId() {
        List<String> codes = spaceResourceMapper.selectResourceCodesByMemberId(41L);
        assertThat(codes).isNotEmpty();
    }

    @Test
    @Sql({ "/sql/space-member-role-rel-data.sql", "/sql/space-role-resource-rel-data.sql" })
    void testSelectMemberResource() {
        List<SpaceMemberResourceDto> entities = spaceResourceMapper.selectMemberResource(CollUtil.newArrayList(41L));
        assertThat(entities).isNotEmpty();
    }

}
