

package com.apitable.interfaces.auth;

import com.apitable.interfaces.auth.facade.AuthServiceFacade;
import com.apitable.interfaces.auth.facade.DefaultAuthServiceFacadeImpl;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * auth context config.
 */
@Configuration(proxyBeanMethods = false)
public class AuthContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public AuthServiceFacade defaultAuthServiceFacade() {
        return new DefaultAuthServiceFacadeImpl();
    }
}
