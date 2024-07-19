

package com.apitable.shared.config;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.annotation.FieldStrategy;
import com.baomidou.mybatisplus.autoconfigure.ConfigurationCustomizer;
import com.baomidou.mybatisplus.autoconfigure.MybatisPlusPropertiesCustomizer;
import com.baomidou.mybatisplus.core.injector.AbstractMethod;
import com.baomidou.mybatisplus.core.injector.DefaultSqlInjector;
import com.baomidou.mybatisplus.core.metadata.TableInfo;
import com.baomidou.mybatisplus.extension.MybatisMapWrapperFactory;
import com.baomidou.mybatisplus.extension.injector.methods.InsertBatchSomeColumn;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.OptimisticLockerInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import java.util.List;
import java.util.Properties;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * <p>
 * Mybatis-plus Config.
 * </p>
 *
 * @author Shawn Deng
 */
@Configuration(proxyBeanMethods = false)
@EnableTransactionManagement
@MapperScan(basePackages = {"com.apitable.enterprise.*.mapper", "com.apitable.*.mapper"})
@Slf4j
public class MybatisPlusConfig {

    @Value("${DATABASE_TABLE_PREFIX:apitable_}")
    private String dbTablePrefix;

    /**
     * config mybatis-plus interceptor.
     *
     * @return MybatisPlusInterceptor
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor());
        interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
        return interceptor;
    }

    /**
     * mybatis configuration customizer.
     *
     * @return ConfigurationCustomizer
     */
    @Bean
    public ConfigurationCustomizer configurationCustomizer() {
        return configuration -> {
            configuration.setObjectWrapperFactory(new MybatisMapWrapperFactory());
            configuration.setCacheEnabled(false);
        };
    }

    /**
     * mybatis-plus properties customizer.
     *
     * @return MybatisPlusPropertiesCustomizer
     */
    @Bean
    public MybatisPlusPropertiesCustomizer mybatisPlusPropertiesCustomizer() {
        return properties -> {
            properties.getGlobalConfig().setBanner(false);
            properties.getGlobalConfig().getDbConfig().setTablePrefix(dbTablePrefix);
            Properties customProperties = new Properties();
            customProperties.setProperty("tablePrefix", dbTablePrefix);
            properties.setConfigurationProperties(customProperties);
            properties.setCheckConfigLocation(true);
            properties.getGlobalConfig().getDbConfig().setUpdateStrategy(FieldStrategy.NOT_EMPTY);
            properties.setMapperLocations(new String[] {"classpath*:/mapper/**/*.xml",
                "classpath*:/enterprise/mapper/**/*.xml"});
        };
    }

    /**
     * customizer sql injector.
     *
     * @return sql injector
     */
    @Bean
    public DefaultSqlInjector expandSqlInjector() {
        // Support batch insertion
        return new DefaultSqlInjector() {
            @Override
            public List<AbstractMethod> getMethodList(Class<?> mapperClass, TableInfo tableInfo) {
                List<AbstractMethod> methodList = super.getMethodList(mapperClass, tableInfo);
                InsertBatchSomeColumn insertBatchSomeColumn = new InsertBatchSomeColumn(
                    t -> !StrUtil.equalsAny(t.getProperty(), "createdAt", "updatedAt",
                        "isDeleted"));
                methodList.add(insertBatchSomeColumn);
                return methodList;
            }
        };
    }
}
