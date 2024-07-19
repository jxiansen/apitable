

package com.apitable.interfaces.widget;

import com.apitable.interfaces.widget.facade.DefaultWidgetServiceAuditFacadeImpl;
import com.apitable.interfaces.widget.facade.WidgetServiceAuditFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * widget context config.
 */
@Configuration(proxyBeanMethods = false)
public class WidgetContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public WidgetServiceAuditFacade defaultWidgetServiceFacade() {
        return new DefaultWidgetServiceAuditFacadeImpl();
    }
}
