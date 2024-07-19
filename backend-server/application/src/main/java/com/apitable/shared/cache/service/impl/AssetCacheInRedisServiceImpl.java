

package com.apitable.shared.cache.service.impl;

import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.apitable.shared.cache.bean.SpaceAssetDTO;
import com.apitable.shared.cache.service.AssetCacheService;
import jakarta.annotation.Resource;
import java.util.concurrent.TimeUnit;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * asset cache in redis service implement.
 */
@Service
public class AssetCacheInRedisServiceImpl implements AssetCacheService {

    @Resource
    private RedisTemplate<String, String> redisTemplate;

    private static final String ASSET_CACHE = "asset:{}";

    @Override
    public SpaceAssetDTO getSpaceAssetDTO(String key) {
        String str = redisTemplate.opsForValue().get(StrUtil.format(ASSET_CACHE, key));
        if (str != null) {
            return JSONUtil.toBean(str, SpaceAssetDTO.class);
        }
        return null;
    }

    @Override
    public void save(String key, SpaceAssetDTO spaceAssetDTO, int expireSecond) {
        redisTemplate.opsForValue()
            .set(StrUtil.format(ASSET_CACHE, key), JSONUtil.toJsonStr(spaceAssetDTO), expireSecond,
                TimeUnit.SECONDS);
    }
}
