

package com.apitable.organization.facade;

import com.apitable.organization.mapper.TeamMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * Team Context Config.
 *
 * @author Chambers
 */
@Configuration(proxyBeanMethods = false)
public class TeamContextConfig {

    private static final Logger logger = LoggerFactory.getLogger(TeamContextConfig.class);

    @Bean
    @ConditionalOnMissingBean
    public TeamFacade defaultCTETeamFacadeImpl(TeamMapper teamMapper) {
        logger.debug("Inject CTE team facade implement class.");
        return new DefaultCTETeamFacadeImpl(teamMapper);
    }

    @Bean
    @Primary
    @ConditionalOnProperty(value = "cte-sql.enabled", havingValue = "false")
    public TeamFacade nonCTETeamFacadeImpl(TeamMapper teamMapper) {
        logger.debug("Inject No-CTE team facade implement class.");
        return new NonCTETeamFacadeImpl(teamMapper);
    }
}
