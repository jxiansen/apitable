

package com.apitable.shared.cache.service;

import static org.assertj.core.api.Assertions.assertThat;

import cn.hutool.core.util.StrUtil;
import com.apitable.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;

public class TemplateConfigInRedisImplTest extends AbstractIntegrationTest {

    private final static String CATEGORIES_LIST_CONFIG =
        "[{\"templateIds\":[\"tpl1\",\"tpl2\"],\"categoryCode\":\"pc1\",\"categoryName\":\"cn1\"},"
            +
            "{\"templateIds\":[\"tpl3\",\"tpl4\"],\"categoryCode\":\"pc2\",\"categoryName\":\"cn2\"}]";

    @Test
    void testGetCategoriesListConfigCacheByLangFromCache() {
        String lang = "zh_CN";
        String key = StrUtil.format("config:{}:{}", "template", lang + ":online");
        redisTemplate.opsForValue().set(key, CATEGORIES_LIST_CONFIG);
        String cache = templateConfigCacheService.getCategoriesListConfigCacheByLang(lang);
        assertThat(cache).isEqualTo(CATEGORIES_LIST_CONFIG);
        redisTemplate.delete(key);
    }
}
