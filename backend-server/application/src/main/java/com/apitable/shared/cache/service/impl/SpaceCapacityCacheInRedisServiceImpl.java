

package com.apitable.shared.cache.service.impl;

import static com.apitable.core.constants.RedisConstants.GENERAL_STATICS;

import cn.hutool.core.util.StrUtil;
import com.apitable.shared.cache.service.SpaceCapacityCacheService;
import com.apitable.space.mapper.SpaceAssetMapper;
import jakarta.annotation.Resource;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * space capacity cache in redis.
 */
@Slf4j
@Service
public class SpaceCapacityCacheInRedisServiceImpl implements SpaceCapacityCacheService {

    @Resource
    private SpaceAssetMapper spaceAssetMapper;

    @Resource
    private RedisTemplate<String, Number> redisTemplate;

    private static final int TIMEOUT = 30;

    @Override
    public long getSpaceCapacity(String spaceId) {
        String key = StrUtil.format(GENERAL_STATICS, "space:capacity", spaceId);
        Number number = redisTemplate.opsForValue().get(key);
        if (number != null) {
            return number.longValue();
        }
        List<Integer> fileSizes = spaceAssetMapper.selectFileSizeBySpaceId(spaceId);
        long statics =
            fileSizes.stream().filter(Objects::nonNull).mapToLong(Integer::intValue).sum();
        redisTemplate.opsForValue().set(key, statics, TIMEOUT, TimeUnit.MINUTES);
        return statics;
    }

    @Override
    public void del(String spaceId) {
        String key = StrUtil.format(GENERAL_STATICS, "space:capacity", spaceId);
        redisTemplate.delete(key);
    }

}
