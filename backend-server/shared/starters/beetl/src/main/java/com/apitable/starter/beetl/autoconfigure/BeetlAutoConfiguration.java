

package com.apitable.starter.beetl.autoconfigure;

import org.beetl.core.GroupTemplate;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

/**
 * beetl render template autoconfiguration.
 *
 * @author Shawn Deng
 */
@AutoConfiguration
@ConditionalOnClass(GroupTemplate.class)
@EnableConfigurationProperties(BeetlProperties.class)
public class BeetlAutoConfiguration {

    private final BeetlProperties properties;

    public BeetlAutoConfiguration(BeetlProperties properties) {
        this.properties = properties;
    }

    @Bean
    @ConditionalOnMissingBean
    public BeetlTemplate beetlTemplate() {
        return new BeetlTemplate(properties.getClassPath(), properties.getCharset(),
            properties.getPlaceholderStart(), properties.getPlaceholderEnd());
    }
}
