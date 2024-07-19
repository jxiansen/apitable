

package com.apitable.shared.cache.service.impl;

import cn.hutool.core.util.StrUtil;
import com.apitable.shared.cache.service.CommonCacheService;
import com.apitable.shared.clock.spring.ClockManager;
import jakarta.annotation.Resource;
import java.util.concurrent.TimeUnit;
import org.springframework.data.redis.core.BoundValueOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * <p>
 * Common cache service implement.
 * </p>
 *
 * @author Chambers
 */
@Service
public class CommonCacheServiceImpl implements CommonCacheService {

    @Resource
    private RedisTemplate<String, String> redisTemplate;

    private static final String KEY = "cache:chatbot:{}";

    @Override
    public boolean checkIfSpaceEnabledChatbot(String spaceId) {
        String str = redisTemplate.opsForValue().get(StrUtil.format(KEY, spaceId));
        return str != null;
    }

    @Override
    public void saveSpaceChatbotCache(String spaceId, Integer days) {
        BoundValueOperations<String, String> opts =
            redisTemplate.boundValueOps(StrUtil.format(KEY, spaceId));
        if (days != null) {
            opts.set(ClockManager.me().getLocalDateTimeNow().toString(), days, TimeUnit.DAYS);
            return;
        }
        opts.set(ClockManager.me().getLocalDateTimeNow().toString());
    }

    @Override
    public void delSpaceChatbotCache(String spaceId) {
        redisTemplate.delete(StrUtil.format(KEY, spaceId));
    }
}
