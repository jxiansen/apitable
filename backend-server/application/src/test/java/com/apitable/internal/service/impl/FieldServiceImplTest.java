

package com.apitable.internal.service.impl;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractIntegrationTest;
import com.apitable.internal.vo.UrlAwareContentsVo;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

public class FieldServiceImplTest extends AbstractIntegrationTest {

    @Test
    void testFetchOffSiteUrl() {
        List<String> urls = new ArrayList<>();
        urls.add("https://www.bilibili.com/");
        UrlAwareContentsVo urlAwareContents = iFieldService.getUrlAwareContents(urls, null);
        assertThat(urlAwareContents.getContents()).isNotNull();
    }

    @Test
    void testFetchOffSiteUrlMetaTitle() {
        List<String> urls = new ArrayList<>();
        urls.add("https://mp.weixin.qq.com/s/GRlMDR0DUjjuz82Ndbu96Q");
        UrlAwareContentsVo urlAwareContents = iFieldService.getUrlAwareContents(urls, null);
        assertThat(urlAwareContents.getContents()).isNotNull();
    }

    @Test
    void testFetchOffSiteUrls() {
        List<String> urls = new ArrayList<>();
        urls.add("https://aitable.ai");
        urls.add("www.baidu.com");
        urls.add("https://www.bilibili.com/");
        UrlAwareContentsVo urlAwareContents = iFieldService.getUrlAwareContents(urls, null);
        assertThat(urlAwareContents.getContents()).isNotNull();
    }

}
