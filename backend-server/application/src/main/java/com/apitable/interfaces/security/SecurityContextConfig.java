

package com.apitable.interfaces.security;

import com.apitable.interfaces.security.facade.BlackListServiceFacade;
import com.apitable.interfaces.security.facade.CaptchaServiceFacade;
import com.apitable.interfaces.security.facade.DefaultBlackListServiceFacadeImpl;
import com.apitable.interfaces.security.facade.DefaultCaptchaServiceFacadeImpl;
import com.apitable.interfaces.security.facade.DefaultHumanVerificationServiceFacadeImpl;
import com.apitable.interfaces.security.facade.DefaultWhiteListServiceFacadeImpl;
import com.apitable.interfaces.security.facade.HumanVerificationServiceFacade;
import com.apitable.interfaces.security.facade.WhiteListServiceFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * security context config.
 */
@Configuration(proxyBeanMethods = false)
public class SecurityContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public BlackListServiceFacade defaultBlackListServiceFacade() {
        return new DefaultBlackListServiceFacadeImpl();
    }

    @Bean
    @ConditionalOnMissingBean
    public WhiteListServiceFacade defaultWhiteListServiceFacadeImpl() {
        return new DefaultWhiteListServiceFacadeImpl();
    }

    @Bean
    @ConditionalOnMissingBean
    public HumanVerificationServiceFacade defaultHumanVerificationServiceFacade() {
        return new DefaultHumanVerificationServiceFacadeImpl();
    }

    @Bean
    @ConditionalOnMissingBean
    public CaptchaServiceFacade defaultCaptchaServiceFacade() {
        return new DefaultCaptchaServiceFacadeImpl();
    }
}
