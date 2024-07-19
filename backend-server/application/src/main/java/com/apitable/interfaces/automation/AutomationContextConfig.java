

package com.apitable.interfaces.automation;

import com.apitable.interfaces.automation.facede.AutomationServiceFacade;
import com.apitable.interfaces.automation.facede.DefaultAutomationServiceFacadeImpl;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * automation context config.
 */
@Configuration(proxyBeanMethods = false)
public class AutomationContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public AutomationServiceFacade defaultAutomationServiceFacade() {
        return new DefaultAutomationServiceFacadeImpl();
    }
}
