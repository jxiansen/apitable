

package com.apitable.workspace.mapper;

import java.util.List;

import cn.hutool.core.collection.CollUtil;
import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.workspace.dto.DatasheetMetaDTO;
import com.apitable.workspace.dto.DatasheetSnapshot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class DatasheetMetaMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    DatasheetMetaMapper datasheetMetaMapper;

    @Test
    @Sql("/sql/datasheet-meta-data.sql")
    void testSelectByDstId() {
        DatasheetSnapshot entity = datasheetMetaMapper.selectByDstId("ni41");
        assertThat(entity).isNotNull();
    }

    @Test
    @Sql("/sql/datasheet-meta-data.sql")
    void testSelectDtoByDstIds() {
        List<DatasheetMetaDTO> entities = datasheetMetaMapper.selectDtoByDstIds(CollUtil.newArrayList("ni41"));
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/datasheet-meta-data.sql")
    void testCountByMetaData() {
        Integer count = datasheetMetaMapper.countByMetaData(CollUtil.newArrayList("ni41"), "view");
        assertThat(count).isEqualTo(1);
    }

}
