

package com.apitable;

import com.apitable.shared.config.MybatisPlusConfig;
import com.apitable.sql.script.enhance.ModifyBeforeSqlScriptsTestExecutionListener;
import com.baomidou.mybatisplus.autoconfigure.MybatisPlusProperties;
import com.baomidou.mybatisplus.test.autoconfigure.MybatisPlusTest;
import java.util.List;
import java.util.Objects;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.event.ApplicationEventsTestExecutionListener;
import org.springframework.test.context.event.EventPublishingTestExecutionListener;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.ServletTestExecutionListener;

/**
 * Quickly test Mapper and use Mybatis-Plus's illegal sql plug-in to achieve reasonable sql
 */
@MybatisPlusTest
@ContextConfiguration(classes = {MybatisPlusConfig.class, TestMybatisPlusConfig.class})
@AutoConfigureTestDatabase(replace = Replace.NONE)
@TestPropertySource(value = {
    "classpath:test.properties",
})
@TestExecutionListeners(value = {
    ServletTestExecutionListener.class,
    DirtiesContextBeforeModesTestExecutionListener.class,
    ApplicationEventsTestExecutionListener.class,
    DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class,
    ModifyBeforeSqlScriptsTestExecutionListener.class,
    EventPublishingTestExecutionListener.class
})
public abstract class AbstractMyBatisMapperTest {

    @BeforeAll
    static void setUp(@Autowired JdbcTemplate jdbcTemplate,
                      @Value("#{'${exclude}'.split(',')}") List<String> excludeTables,
                      @Autowired MybatisPlusProperties mybatisPlusProperties) {
        Object tablePrefixObj =
            mybatisPlusProperties.getConfigurationProperties().get("tablePrefix");
        String tablePrefix = Objects.isNull(tablePrefixObj) ? "" : tablePrefixObj.toString();
        UnitTestUtil.clearDB(jdbcTemplate, excludeTables, tablePrefix);
    }
}
