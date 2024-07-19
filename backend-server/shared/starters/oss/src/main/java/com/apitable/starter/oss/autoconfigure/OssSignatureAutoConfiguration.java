

package com.apitable.starter.oss.autoconfigure;

import com.apitable.starter.oss.autoconfigure.OssProperties.Signature;
import com.apitable.starter.oss.core.OssSignatureTemplate;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Object Storage Auto Configuration.
 *
 * @author Benson Cheung
 */
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(OssProperties.class)
@ConditionalOnProperty(value = {"starter.oss.enabled", "starter.oss.signature.enabled"},
    havingValue = "true")
public class OssSignatureAutoConfiguration {

    private final OssProperties properties;

    public OssSignatureAutoConfiguration(OssProperties properties) {
        this.properties = properties;
    }

    /**
     * register oss signature template.
     *
     * @return oss signature template
     */
    @Bean
    @ConditionalOnMissingBean
    public OssSignatureTemplate ossSignatureTemplate() {
        Signature signature = properties.getSignature();
        return new OssSignatureTemplate(signature.getEncryptKey(),
            signature.getExpireSecond());
    }
}
