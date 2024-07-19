

package com.apitable.starter.oss.autoconfigure;

import com.apitable.starter.oss.core.OssClientRequestFactory;
import com.apitable.starter.oss.core.OssClientTemplate;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

/**
 * Object Storage Auto Configuration.
 *
 * @author Benson Cheung
 */
@AutoConfiguration
@EnableConfigurationProperties(OssProperties.class)
@ConditionalOnProperty(value = "starter.oss.enabled", havingValue = "true")
@ConditionalOnClass(OssClientTemplate.class)
@Import({
    AwsS3AutoConfiguration.class,
    QiniuCloudAutoConfiguration.class,
    HuaweiCloudOBSAutoConfiguration.class,
    MinioAutoConfiguration.class
})
public class OssAutoConfiguration {

    /**
     * register oss client template.
     *
     * @param factory oss client request factory
     * @return oss client template
     */
    @Bean
    @ConditionalOnMissingBean
    public OssClientTemplate ossClientTemplate(OssClientRequestFactory factory) {
        OssClientTemplate template = new OssClientTemplate();
        template.setOssClientRequestFactory(factory);
        return template;
    }
}
