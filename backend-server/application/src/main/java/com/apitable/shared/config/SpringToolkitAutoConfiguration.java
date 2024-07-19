

package com.apitable.shared.config;

import com.apitable.core.util.SpringContextHolder;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * autoconfiguration of Spring FrameWork toolkit.
 *
 * @author Shawn Deng
 */
@Configuration(proxyBeanMethods = false)
@ConditionalOnWebApplication
public class SpringToolkitAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public SpringContextHolder springContextHolder() {
        return new SpringContextHolder();
    }
}
