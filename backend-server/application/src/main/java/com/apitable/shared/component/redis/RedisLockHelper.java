

package com.apitable.shared.component.redis;

import cn.hutool.core.util.ObjectUtil;
import com.apitable.core.exception.BusinessException;
import com.apitable.core.util.SpringContextHolder;
import jakarta.annotation.Resource;
import java.util.concurrent.TimeUnit;
import org.springframework.data.redis.core.BoundValueOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

/**
 * <p>
 * RedisLockHelper.
 * </p>
 *
 * @author Chambers
 */
@Component
public class RedisLockHelper {

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    public static RedisLockHelper me() {
        return SpringContextHolder.getBean(RedisLockHelper.class);
    }

    /**
     * <p>
     * preventDuplicateRequests.
     * </p>
     *
     * @param key a {@link java.lang.String} object.
     */
    public void preventDuplicateRequests(String key) {
        BoundValueOperations<String, Object> ops = redisTemplate.boundValueOps(key);
        if (ObjectUtil.isNotNull(ops.get())) {
            throw new BusinessException("repeat request");
        }
        ops.set("", 1, TimeUnit.HOURS);
    }
}
