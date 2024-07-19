

package com.apitable.workspace.mapper;

import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.workspace.entity.DatasheetEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class DatasheetMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    DatasheetMapper datasheetMapper;

    @Test
    @Sql("/sql/datasheet-data.sql")
    void testSelectByDstId() {
        DatasheetEntity entity = datasheetMapper.selectByDstId("ni41");
        assertThat(entity).isNotNull();
    }

}
