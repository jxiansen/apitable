

package com.apitable.shared.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.BeanClassLoaderAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.security.jackson2.SecurityJackson2Modules;
import org.springframework.session.data.redis.config.ConfigureRedisAction;

/**
 * <p>
 * Http Session Config.
 * </p>
 *
 * @author Shawn Deng
 */
@Configuration(proxyBeanMethods = false)
public class SessionSerializerConfig implements BeanClassLoaderAware {

    private ClassLoader classLoader;

    /**
     * Long Mixin.
     */
    public abstract static class LongMixin {

        @SuppressWarnings("unused")
        @JsonProperty("long")
        Long value;
    }


    /**
     * config spring session redis serializer.
     *
     * @return redis serializer
     */
    @Bean("springSessionDefaultRedisSerializer")
    public RedisSerializer<Object> springSessionDefaultRedisSerializer() {
        var mapper = new ObjectMapper();
        mapper.addMixIn(Long.class, LongMixin.class);
        mapper.registerModules(SecurityJackson2Modules.getModules(this.classLoader));
        return new GenericJackson2JsonRedisSerializer(mapper);
    }

    @Bean
    public ConfigureRedisAction configureRedisAction() {
        return ConfigureRedisAction.NO_OP;
    }

    @Override
    public void setBeanClassLoader(@NotNull ClassLoader classLoader) {
        this.classLoader = classLoader;
    }
}
