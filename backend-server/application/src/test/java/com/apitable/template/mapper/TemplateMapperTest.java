

package com.apitable.template.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.collection.CollUtil;
import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.template.dto.TemplateDto;
import com.apitable.template.dto.TemplateInfo;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

/**
 * <p>
 * Template Mapper Test
 * </p>
 */
public class TemplateMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    TemplateMapper templateMapper;

    @Test
    @Sql("/sql/template-data.sql")
    void testCountByTypeId() {
        Integer count = templateMapper.countByTypeId("spc41");
        assertThat(count).isEqualTo(1);
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectIdByTypeIdAndName() {
        Long id = templateMapper.selectIdByTypeIdAndName("spc41", "name");
        assertThat(id).isEqualTo(41L);
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectNodeIdByTempId() {
        String id = templateMapper.selectNodeIdByTempId("tp41");
        assertThat(id).isEqualTo("ni45");
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectNameByTemplateIdIncludeDelete() {
        String name = templateMapper.selectNameByTemplateIdIncludeDelete("tp41");
        assertThat(name).isEqualTo("name");
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectUpdatersByTempId() {
        Long id = templateMapper.selectUpdatersByTempId("tp41");
        assertThat(id).isEqualTo(41L);
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectTypeIdByTempId() {
        String id = templateMapper.selectTypeIdByTempId("tp41");
        assertThat(id).isEqualTo("spc41");
    }


    @Test
    @Sql({"/sql/template-data.sql", "/sql/node-data.sql", "/sql/user-data.sql",
        "/sql/space-data.sql"})
    void testSelectDtoByTypeId() {
        List<TemplateDto> entities =
            templateMapper.selectDtoByTypeId("spc41", CollUtil.newArrayList("tp41"));
        assertThat(entities).isNotEmpty();
    }


    @Test
    @Sql({"/sql/template-data.sql", "/sql/node-data.sql", "/sql/user-data.sql",
        "/sql/space-data.sql"})
    void testSelectDtoByTempId() {
        TemplateDto entity = templateMapper.selectDtoByTempId("tp41");
        assertThat(entity).isNotNull();
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectInfoByTempId() {
        TemplateInfo entity = templateMapper.selectInfoByTempId("tp41");
        assertThat(entity).isNotNull();
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectInfoById() {
        TemplateInfo entity = templateMapper.selectInfoById(41L);
        assertThat(entity).isNotNull();
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectInfoByTypeId() {
        List<TemplateInfo> entities = templateMapper.selectInfoByTypeId("spc41");
        assertThat(entities).isNotEmpty();
    }


    @Test
    @Sql("/sql/template-data.sql")
    void testSelectNodeIdByTempIdAndType() {
        String id = templateMapper.selectNodeIdByTempIdAndType("tp41", 1);
        assertThat(id).isEqualTo("ni45");
    }

}
