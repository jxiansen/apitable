

package com.apitable.interfaces.document;

import com.apitable.interfaces.document.facade.DefaultDocumentServiceFacadeImpl;
import com.apitable.interfaces.document.facade.DocumentServiceFacade;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * document context config.
 */
@Configuration(proxyBeanMethods = false)
public class DocumentContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public DocumentServiceFacade defaultDocumentServiceFacade() {
        return new DefaultDocumentServiceFacadeImpl();
    }
}
