

package com.apitable.shared.config.security;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpHeaders;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * <p>
 * execute in front of csrf filter.
 * </p>
 *
 * @author Shawn Deng
 */
@Slf4j
public class CsrfBeforeFilter extends OncePerRequestFilter {

    public List<String> ignorePath = CollUtil.newArrayList("/base/attach/cite");

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    @NotNull HttpServletResponse response,
                                    @NotNull FilterChain filterChain)
        throws ServletException, IOException {
        String bearerToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (log.isDebugEnabled()) {
            log.info("csrf before filter path: {}", request.getServletPath());
        }
        if (StrUtil.isNotBlank(bearerToken) || this.ignorePath.contains(request.getServletPath())) {
            CsrfFilter.skipRequest(request);
        }
        filterChain.doFilter(request, response);
    }
}
