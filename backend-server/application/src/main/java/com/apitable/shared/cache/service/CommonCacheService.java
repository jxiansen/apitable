

package com.apitable.shared.cache.service;

/**
 * <p>
 * Common cache service.
 * </p>
 *
 * @author Chambers
 */
public interface CommonCacheService {

    boolean checkIfSpaceEnabledChatbot(String spaceId);

    void saveSpaceChatbotCache(String spaceId, Integer days);

    void delSpaceChatbotCache(String spaceId);
}
