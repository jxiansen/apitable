

package com.apitable.template.mapper;

import java.util.List;

import cn.hutool.core.collection.CollUtil;
import org.junit.jupiter.api.Test;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.template.model.TemplatePropertyRelDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import static org.assertj.core.api.Assertions.assertThat;

public class TemplatePropertyRelMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    private TemplatePropertyRelMapper templatePropertyRelMapper;

    @Test
    @Sql("/sql/template-property-rel-data.sql")
    void testSelectTemplateIdsByPropertyIds() {
        List<String> propertyCodes = CollUtil.newArrayList("pc1", "pc2", "pc3");
        List<TemplatePropertyRelDto> templatePropertyRelDtoList = templatePropertyRelMapper.selectTemplateIdsByPropertyIds(propertyCodes);
        assertThat(templatePropertyRelDtoList).isNotNull();
        assertThat(templatePropertyRelDtoList.size()).isEqualTo(3);
    }

}