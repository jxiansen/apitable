

package com.apitable.interfaces.eventbus;

import com.apitable.interfaces.eventbus.facade.DefaultEventBusFacadeImpl;
import com.apitable.interfaces.eventbus.facade.EventBusFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * event bus context config.
 */
@Configuration(proxyBeanMethods = false)
public class EventBusContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public EventBusFacade defaultEventBusFacade() {
        return new DefaultEventBusFacadeImpl();
    }
}
