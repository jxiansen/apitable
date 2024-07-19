

package com.apitable.shared.cache.service.impl;

import cn.hutool.core.util.StrUtil;
import com.apitable.core.constants.RedisConstants;
import com.apitable.organization.mapper.MemberMapper;
import com.apitable.shared.cache.service.UserActiveSpaceCacheService;
import jakarta.annotation.Resource;
import java.util.concurrent.TimeUnit;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.BoundValueOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * user active space cache in redis.
 */
@Service
@Slf4j
public class UserActiveSpaceCacheInRedisServiceImpl implements UserActiveSpaceCacheService {

    @Resource
    private RedisTemplate<String, String> redisTemplate;

    @Resource
    private MemberMapper memberMapper;

    private static final int TIMEOUT = 7;

    @Override
    public void save(Long userId, String spaceId) {
        BoundValueOperations<String, String> opts =
            redisTemplate.boundValueOps(RedisConstants.getUserActiveSpaceKey(userId));
        opts.set(spaceId, TIMEOUT, TimeUnit.DAYS);
    }

    @Override
    public String getLastActiveSpace(Long userId) {
        BoundValueOperations<String, String> opts =
            redisTemplate.boundValueOps(RedisConstants.getUserActiveSpaceKey(userId));
        String spaceId = opts.get();
        if (StrUtil.isBlank(spaceId)) {
            spaceId = memberMapper.selectActiveSpaceByUserId(userId);
            if (StrUtil.isBlank(spaceId)) {
                spaceId = memberMapper.getFirstSpaceIdByUserId(userId);
            }
        }
        return spaceId;
    }

    @Override
    public void delete(Long userId) {
        redisTemplate.delete(RedisConstants.getUserActiveSpaceKey(userId));
    }
}
