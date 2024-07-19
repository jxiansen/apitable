

package com.apitable.workspace.mapper;

import java.util.List;

import cn.hutool.core.collection.CollUtil;
import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.workspace.dto.DataSheetRecordDTO;
import com.apitable.workspace.dto.DataSheetRecordGroupDTO;
import com.apitable.workspace.vo.DatasheetRecordVo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class DatasheetRecordMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    DatasheetRecordMapper datasheetRecordMapper;

    @Test
    @Sql("/sql/datasheet-record-data.sql")
    void testSelectListByDstId() {
        List<DatasheetRecordVo> entities = datasheetRecordMapper.selectListByDstId("dst0ZDEBxQPJxoaQ1h");
        assertThat(entities).isNotNull();
    }

    @Test
    @Sql("/sql/datasheet-record-data.sql")
    void testSelectDtoByDstId() {
        List<DataSheetRecordDTO> entities = datasheetRecordMapper.selectDtoByDstId("dst0ZDEBxQPJxoaQ1h");
        assertThat(entities).isNotEmpty();
    }


    @Test
    @Sql("/sql/datasheet-record-data.sql")
    void testSelectDtoByDstIds() {
        List<DataSheetRecordDTO> entities = datasheetRecordMapper.selectDtoByDstIds(CollUtil.newArrayList("dst0ZDEBxQPJxoaQ1h"));
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/datasheet-record-data.sql")
    void testSelectGroupDtoByDstIds() {
        List<DataSheetRecordGroupDTO> entities = datasheetRecordMapper.selectGroupDtoByDstIds(CollUtil.newArrayList("dst0ZDEBxQPJxoaQ1h"));
        assertThat(entities);
    }

}
