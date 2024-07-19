

package com.apitable.interfaces.user;

import com.apitable.interfaces.user.facade.DefaultInvitationServiceFacadeImpl;
import com.apitable.interfaces.user.facade.DefaultUserLinkServiceFacadeImpl;
import com.apitable.interfaces.user.facade.DefaultUserServiceFacadeImpl;
import com.apitable.interfaces.user.facade.InvitationServiceFacade;
import com.apitable.interfaces.user.facade.UserLinkServiceFacade;
import com.apitable.interfaces.user.facade.UserServiceFacade;
import com.apitable.organization.service.IMemberService;
import com.apitable.user.service.IUserService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * user context config.
 */
@Configuration(proxyBeanMethods = false)
public class UserContextConfig {

    @Bean
    @ConditionalOnMissingBean
    public UserServiceFacade defaultUserServiceFacade() {
        return new DefaultUserServiceFacadeImpl();
    }

    @Bean
    @ConditionalOnMissingBean
    public InvitationServiceFacade defaultInvitationServiceFacade(IUserService userService,
                                                                  IMemberService memberService) {
        return new DefaultInvitationServiceFacadeImpl(userService, memberService);
    }

    @Bean
    @ConditionalOnMissingBean
    public UserLinkServiceFacade defaultUserLinkServiceFacade() {
        return new DefaultUserLinkServiceFacadeImpl();
    }
}
