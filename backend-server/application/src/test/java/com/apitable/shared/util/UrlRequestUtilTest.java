

package com.apitable.shared.util;

import static org.assertj.core.api.Assertions.assertThat;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

public class UrlRequestUtilTest {

    @Test
    void testGetTitle() throws ExecutionException, InterruptedException {
        CompletableFuture<String> title =
            UrlRequestUtil.getTitle("https://aitable.ai", new ArrayList<>());
        String titleString = title.get();
        assertThat(titleString).isNotNull();
    }

    @Test
    void testGetHtmlTitle() throws MalformedURLException {
        Optional<String> title = UrlRequestUtil.getHtmlTitle(new URL("https://aitable.ai"));
        assertThat(title).isNotNull();
    }

}
