

package com.apitable.space.mapper;

import java.util.List;

import cn.hutool.core.collection.CollUtil;
import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.space.dto.SpaceLinkDTO;
import com.apitable.space.vo.SpaceLinkVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class SpaceInviteLinkMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceInviteLinkMapper spaceInviteLinkMapper;

    @Test
    @Sql({ "/sql/space-invite-link-data.sql" })
    void testSelectLinkVo() {
        List<SpaceLinkVo> entities = spaceInviteLinkMapper.selectLinkVo(41L);
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/space-invite-link-data.sql")
    void testSelectIdByTeamIdAndMemberId() {
        Long id = spaceInviteLinkMapper.selectIdByTeamIdAndMemberId(41L, 41L);
        assertThat(id).isEqualTo(41L);
    }

    @Test
    @Sql("/sql/space-invite-link-data.sql")
    void testSelectDtoByToken() {
        SpaceLinkDTO entity = spaceInviteLinkMapper.selectDtoByToken("token");
        assertThat(entity).isNotNull();
    }

    @Test
    @Sql("/sql/space-invite-link-data.sql")
    void testSelectCreatorBySpaceId() {
        List<Long> ids = spaceInviteLinkMapper.selectCreatorBySpaceId("spc41");
        assertThat(ids).isNotEmpty();
    }

    @Test
    @Sql("/sql/space-invite-link-data.sql")
    void testSelectIdByTeamId() {
        Long id = spaceInviteLinkMapper.selectIdByTeamId(41L);
        assertThat(id).isEqualTo(41L);
    }

    @Test
    @Sql("/sql/space-invite-link-data.sql")
    void testSelectIdByTeamIds() {
        List<Long> ids = spaceInviteLinkMapper.selectIdByTeamIds(CollUtil.newArrayList(41L));
        assertThat(ids).isNotEmpty();
    }

}
