

package com.apitable.shared.config;

import static com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_UNESCAPED_CONTROL_CHARS;

import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * <p>
 * Jackson config.
 * </p>
 *
 * @author Shawn Deng
 */
@Configuration(proxyBeanMethods = false)
public class JacksonConfig {

    /**
     * jackson customizer.
     *
     * @return Jackson2ObjectMapperBuilderCustomizer
     */
    @Bean
    public Jackson2ObjectMapperBuilderCustomizer jackson2ObjectMapperBuilderCustomizer() {
        return builder -> {
            builder.failOnEmptyBeans(false);
            builder.failOnUnknownProperties(false);
            builder.featuresToEnable(ALLOW_UNESCAPED_CONTROL_CHARS.mappedFeature());
        };
    }
}
