

package com.apitable.template.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.template.model.TemplatePropertyDto;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

/**
 * <p>
 * Template Property Mapper Test
 * </p>
 */
public class TemplatePropertyMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    TemplatePropertyMapper templatePropertyMapper;

    @Test
    @Sql("/sql/template-property-data.sql")
    void testSelectTemplateProperties() {
        List<TemplatePropertyDto> entities =
            templatePropertyMapper.selectTemplatePropertiesWithI18n("zh_CN");
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/template-property-data.sql")
    void testSelectIdByCodeAndType() {
        Long id = templatePropertyMapper.selectIdByCodeAndType("property code", 1);
        assertThat(id).isEqualTo(41L);
    }
}
