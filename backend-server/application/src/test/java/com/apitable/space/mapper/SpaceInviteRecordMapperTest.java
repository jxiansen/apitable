

package com.apitable.space.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.space.entity.SpaceInviteRecordEntity;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

/**
 * @author wuyitao
 * @date 2022/4/5 1:14 AM
 */
public class SpaceInviteRecordMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceInviteRecordMapper spaceInviteRecordMapper;

    @Test
    @Sql("/sql/space-invite-record-data.sql")
    void testSelectByInviteToken() {
        SpaceInviteRecordEntity entity = spaceInviteRecordMapper.selectByInviteToken("token");
        assertThat(entity).isNotNull();
    }


    @Test
    @Sql("/sql/space-invite-record-data.sql")
    void testSelectCountBySpaceIdAndBetween() {
        LocalDateTime startAt = LocalDateTime.now().withHour(0).withMinute(0).withSecond(0);
        LocalDateTime endAt =
            LocalDateTime.now().plusDays(1).withHour(0).withMinute(0).withSecond(0);
        Integer count =
            spaceInviteRecordMapper.selectCountBySpaceIdAndBetween("spc41", startAt, endAt);
        assertThat(count).isEqualTo(1);
    }
}
