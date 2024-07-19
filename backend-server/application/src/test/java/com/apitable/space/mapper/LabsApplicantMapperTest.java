

package com.apitable.space.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.collection.CollUtil;
import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.space.entity.LabsApplicantEntity;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

/**
 * <p>
 * Data access layer test: experimental function internal test application form test
 * </p>
 */
public class LabsApplicantMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    LabsApplicantMapper labsApplicantMapper;

    @Test
    @Sql("/sql/labs-applicant-data.sql")
    void testSelectUserFeaturesByApplicant() {
        List<String> entities = labsApplicantMapper.selectUserFeaturesByApplicant(
            CollUtil.newArrayList("spca33AJDEVhL"));
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/labs-features-data.sql")
    void testSelectFeatureKeyByType() {
        List<String> entities = labsApplicantMapper.selectFeatureKeyByType(3);
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/labs-applicant-data.sql")
    void testSelectApplicantAndFeatureKey() {
        LabsApplicantEntity entity =
            labsApplicantMapper.selectApplicantAndFeatureKey("spca33AJDEVhL", "ROBOT");
        assertThat(entity).isNotNull();
    }

}
