

package com.apitable.control.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.collection.CollUtil;
import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.control.entity.ControlSettingEntity;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

/**
 * <p>
 *     Data access layer test: workbench permission control unit setting table test
 * </p>
 */
public class ControlSettingMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    ControlSettingMapper controlSettingMapper;

    @Test
    @Sql("/sql/control-setting-data.sql")
    void testSelectByControlId() {
        ControlSettingEntity entity = controlSettingMapper.selectByControlId("dsto4uywza5GtqbVXC-fldANfgcPuGVS");
        assertThat(entity).isNotNull();
        assertThat(entity.getId()).isEqualTo(1387315293590966274L);
    }

    @Test
    @Sql("/sql/control-setting-data.sql")
    void testSelectBatchByControlIds() {
        List<ControlSettingEntity> entities = controlSettingMapper.selectBatchByControlIds(CollUtil.newArrayList("dsto4uywza5GtqbVXC-fldANfgcPuGVS"));
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/control-setting-data.sql")
    void testSelectDeletedByControlId() {
        ControlSettingEntity entity = controlSettingMapper.selectDeletedByControlId("dstYC0guLbv91jawRb-fld4c0bJCN4Cz");
        assertThat(entity).isNotNull();
        assertThat(entity.getId()).isEqualTo(1387695187619319809L);
    }
}
