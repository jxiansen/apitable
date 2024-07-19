

package com.apitable.shared.cache.service;

import com.apitable.shared.cache.bean.SocialAuthInfo;

/**
 * social auth info cache service.
 */
public interface SocialAuthInfoCacheService {

    /**
     * Save user authorization information to cache.
     *
     * @param authInfo User authorization information
     * @return token
     */
    String saveAuthInfoToCache(SocialAuthInfo authInfo);

    /**
     * Get user information from cache.
     *
     * @param token token
     * @return UserAuthInfo
     */
    SocialAuthInfo getAuthInfoFromCache(String token);
}
