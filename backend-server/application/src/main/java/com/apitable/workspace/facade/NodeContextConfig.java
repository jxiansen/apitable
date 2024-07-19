

package com.apitable.workspace.facade;

import com.apitable.workspace.mapper.NodeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * Node Context Config.
 *
 * @author Chambers
 */
@Configuration(proxyBeanMethods = false)
public class NodeContextConfig {

    private static final Logger logger = LoggerFactory.getLogger(NodeContextConfig.class);

    @Bean
    @ConditionalOnMissingBean
    public NodeFacade defaultCTENodeFacadeImpl(NodeMapper nodeMapper) {
        logger.debug("Inject CTE node facade implement class.");
        return new DefaultCTENodeFacadeImpl(nodeMapper);
    }

    @Bean
    @Primary
    @ConditionalOnProperty(value = "cte-sql.enabled", havingValue = "false")
    public NodeFacade nonCTENodeFacadeImpl(NodeMapper nodeMapper) {
        logger.debug("Inject No-CTE node facade implement class.");
        return new NonCTENodeFacadeImpl(nodeMapper);
    }
}
