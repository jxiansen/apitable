

package com.apitable.interfaces.billing;

import com.apitable.interfaces.billing.facade.DefaultEntitlementServiceFacadeImpl;
import com.apitable.interfaces.billing.facade.EntitlementServiceFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * billing context config.
 */
@Configuration(proxyBeanMethods = false)
public class BillingContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public EntitlementServiceFacade defaultEntitlementServiceFacade() {
        return new DefaultEntitlementServiceFacadeImpl();
    }
}
