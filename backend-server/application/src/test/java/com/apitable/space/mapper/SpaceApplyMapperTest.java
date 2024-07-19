

package com.apitable.space.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.space.dto.SpaceApplyDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

public class SpaceApplyMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    SpaceApplyMapper spaceApplyMapper;

    @Test
    @Sql("/sql/space-apply-data.sql")
    void testCountBySpaceIdAndCreatedByAndStatus() {
        Integer count = spaceApplyMapper.countBySpaceIdAndCreatedByAndStatus(45L, "spc41", 0);
        assertThat(count).isEqualTo(1);
    }

    @Test
    @Sql({"/sql/space-apply-data.sql", "/sql/player-notification-data.sql"})
    void testSelectSpaceApplyDto() {
        SpaceApplyDTO entity =
            spaceApplyMapper.selectSpaceApplyDto(45L, 41L, "assigned_to_group", "\"id\"",
                "\"status\"");
        assertThat(entity).isNotNull();
    }

}
