

package com.apitable.shared.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.server.Cookie;

/**
 * <p>
 * Cookie properties.
 * </p>
 *
 * @author Shawn Deng
 */
@Data
@ConfigurationProperties(prefix = "cookie")
public class CookieProperties {

    /**
     * cookies name.
     */
    private String cookieName;

    /**
     * Session Domain Name Scope.
     */
    private String domainName;

    /**
     * locale 118n cookies name.
     */
    private String i18nCookieName = "lang";

    /**
     * Session Domain Name Scope（use regex pattern，use domainName first if existed）.
     */
    private String domainNamePattern;

    /**
     * Whether to open the http only, default: false.
     */
    private Boolean httpOnly;

    /**
     * Whether to open the session https, default: false.
     */
    private Boolean secure;

    /**
     * Available values：Strict，Lax，None，default: none.
     */
    private Cookie.SameSite sameSite;
}
