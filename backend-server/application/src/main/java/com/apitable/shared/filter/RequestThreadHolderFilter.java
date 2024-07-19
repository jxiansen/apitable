

package com.apitable.shared.filter;

import static com.apitable.shared.constants.FilterConstants.REQUEST_THREAD_HOLDER_FILTER;

import com.apitable.shared.holder.ClientOriginInfoHolder;
import com.apitable.shared.holder.LoginUserHolder;
import com.apitable.shared.holder.MemberHolder;
import com.apitable.shared.holder.NotificationRenderFieldHolder;
import com.apitable.shared.holder.SpaceHolder;
import com.apitable.shared.holder.UserHolder;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


/**
 * <p>
 * Thread Holder Filter.
 * </p>
 *
 * @author Shawn Deng
 */
@Component
@Slf4j
public class RequestThreadHolderFilter extends OncePerRequestFilter implements Ordered {

    @Override
    protected void doFilterInternal(@NotNull HttpServletRequest httpServletRequest,
                                    @NotNull HttpServletResponse httpServletResponse,
                                    FilterChain filterChain) throws ServletException, IOException {
        UserHolder.init();
        LoginUserHolder.init();
        SpaceHolder.init();
        MemberHolder.init();
        NotificationRenderFieldHolder.init();
        ClientOriginInfoHolder.init();

        try {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
        } finally {
            UserHolder.remove();
            LoginUserHolder.remove();
            SpaceHolder.remove();
            MemberHolder.remove();
            NotificationRenderFieldHolder.remove();
            ClientOriginInfoHolder.remove();
        }
    }

    @Override
    public int getOrder() {
        return REQUEST_THREAD_HOLDER_FILTER;
    }
}
