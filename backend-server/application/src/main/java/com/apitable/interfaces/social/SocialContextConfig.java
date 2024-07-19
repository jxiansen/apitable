

package com.apitable.interfaces.social;

import com.apitable.interfaces.social.facade.DefaultSocialServiceFacade;
import com.apitable.interfaces.social.facade.SocialServiceFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * social context config.
 */
@Configuration(proxyBeanMethods = false)
public class SocialContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public SocialServiceFacade defaultSocialServiceFacade() {
        return new DefaultSocialServiceFacade();
    }
}
