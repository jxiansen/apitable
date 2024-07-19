

package com.apitable.interfaces.notification;

import com.apitable.interfaces.notification.facade.DefaultMailFacadeImpl;
import com.apitable.interfaces.notification.facade.MailFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Notification Context Config.
 *
 * @author Chambers
 */
@Configuration(proxyBeanMethods = false)
public class NotificationContextConfig {

    /**
     * Inject Default Mail Facade.
     *
     * @return MailFacade
     */
    @Bean
    @ConditionalOnMissingBean
    public MailFacade defaultMailFacadeImpl() {
        return new DefaultMailFacadeImpl();
    }
}
