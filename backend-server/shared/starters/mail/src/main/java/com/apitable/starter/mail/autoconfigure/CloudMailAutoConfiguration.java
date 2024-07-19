

package com.apitable.starter.mail.autoconfigure;

import com.apitable.starter.mail.core.CloudMailSender;
import com.apitable.starter.mail.core.MailSenderFactory;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

/**
 * <p>
 * Cloud platform email push automation configuration.
 * </p>
 *
 * @author Chambers
 */
@AutoConfiguration
@ConditionalOnClass(CloudMailSender.class)
@ConditionalOnBean(MailSenderFactory.class)
@EnableConfigurationProperties(CloudMailProperties.class)
@ConditionalOnProperty(value = "starter.mail.enabled", havingValue = "true")
@Import({TencentMailAutoConfiguration.class})
public class CloudMailAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public CloudMailSender cloudMailSender(final MailSenderFactory mailSenderFactory) {
        return mailSenderFactory.createSender();
    }

}
