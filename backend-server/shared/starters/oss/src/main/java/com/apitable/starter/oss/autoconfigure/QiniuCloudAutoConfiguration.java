

package com.apitable.starter.oss.autoconfigure;

import com.apitable.starter.oss.autoconfigure.OssProperties.Callback;
import com.apitable.starter.oss.autoconfigure.OssProperties.Qiniu;
import com.apitable.starter.oss.core.OssClientRequestFactory;
import com.apitable.starter.oss.core.OssSignatureTemplate;
import com.apitable.starter.oss.core.qiniu.QiniuOssClientRequestFactory;
import com.qiniu.storage.UploadManager;
import com.qiniu.util.Auth;
import java.util.Optional;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * autoconfiguration of Qiniu Cloud object storage.
 *
 * @author Shawn Deng
 */
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(UploadManager.class)
@ConditionalOnBean(OssSignatureTemplate.class)
@ConditionalOnProperty(value = "starter.oss.type", havingValue = "qiniu")
public class QiniuCloudAutoConfiguration extends OssConnectionConfiguration {

    QiniuCloudAutoConfiguration(OssProperties properties) {
        super(properties);
    }

    @Bean
    @ConditionalOnMissingBean(OssClientRequestFactory.class)
    OssClientRequestFactory ossClientRequestFactory(OssSignatureTemplate ossSignatureTemplate) {
        Qiniu qiniu = getProperties().getQiniu();
        Auth auth = Auth.create(qiniu.getAccessKey(), qiniu.getSecretKey());
        Callback callback = Optional.ofNullable(qiniu.getCallback()).orElseGet(Callback::new);

        return new QiniuOssClientRequestFactory(auth, qiniu.getRegion(),
            qiniu.getDownloadDomain(), callback, qiniu.getUploadUrl(), ossSignatureTemplate);
    }
}
