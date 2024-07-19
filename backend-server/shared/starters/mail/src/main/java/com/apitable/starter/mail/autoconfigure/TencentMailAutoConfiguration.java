

package com.apitable.starter.mail.autoconfigure;

import com.apitable.starter.mail.autoconfigure.CloudMailProperties.Tencent;
import com.apitable.starter.mail.core.MailSenderFactory;
import com.apitable.starter.mail.core.TencentMailSenderFactory;
import com.tencentcloudapi.ses.v20201002.SesClient;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * <p>
 * Tencent cloud mail configuration.
 * </p>
 *
 * @author Chambers
 */
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(SesClient.class)
@ConditionalOnProperty(value = "starter.mail.type", havingValue = "tencent")
public class TencentMailAutoConfiguration {

    private final CloudMailProperties properties;

    public TencentMailAutoConfiguration(CloudMailProperties properties) {
        this.properties = properties;
    }

    /**
     * register mail sender factory.
     *
     * @return mail sender factory
     */
    @Bean
    @ConditionalOnMissingBean
    public MailSenderFactory mailSenderFactory() {
        Tencent tencent = properties.getTencent();
        return new TencentMailSenderFactory(properties.getRegion(), tencent.getSecretId(),
            tencent.getSecretKey(), properties.getFrom(), properties.getReply());
    }

}
