

package com.apitable.starter.databus.autoconfigure;

import com.apitable.starter.databus.client.api.AutomationDaoApiApi;
import com.apitable.starter.databus.client.ApiClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * DatabusClientConfig.
 */
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(DatabusClientProperties.class)
public class DatabusClientAutoConfiguration {

    private static final Logger LOGGER = LoggerFactory.getLogger(DatabusClientAutoConfiguration.class);

    private final DatabusClientProperties databusClientProperties;

    public DatabusClientAutoConfiguration(DatabusClientProperties databusClientProperties) {
        this.databusClientProperties = databusClientProperties;
    }

    /**
     * Common databus client.
     *
     * @return {@link ApiClient}
     */
    @Bean
    public ApiClient apiClient() {
        LOGGER.info("Register Databus Client Bean");
        ApiClient client = new ApiClient();
        client.setBasePath(databusClientProperties.getHost());
        return client;
    }

    /**
     * Common databus automation client.
     *
     * @return {@link AutomationDaoApiApi}
     */
    @Bean
    public AutomationDaoApiApi automationDaoApiApi(ApiClient apiClient) {
        LOGGER.info("Register Databus AutomationDaoApiApi Bean");
        return new AutomationDaoApiApi(apiClient);
    }

}
