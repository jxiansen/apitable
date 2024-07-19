

package com.apitable.shared.context;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.apitable.AbstractIntegrationTest;
import com.apitable.shared.constants.LanguageConstants;
import java.util.Locale;
import org.junit.jupiter.api.Test;

public class I18nContextTest extends AbstractIntegrationTest {

    @Test
    public void testTransform() {
        LanguageConstants.SUPPORTED_LANGUAGE.stream()
            .map(locale -> I18nContext.me().transform("SEND_CAPTCHA_TOO_MUSH", locale))
            .forEach(System.out::println);
    }

    @Test
    public void testChinese() {
        System.out.println(Locale.CHINESE);
        System.out.println(Locale.SIMPLIFIED_CHINESE);
        System.out.println(Locale.TRADITIONAL_CHINESE);

        assertEquals(Locale.CHINESE.getLanguage(), Locale.SIMPLIFIED_CHINESE.getLanguage());
        assertEquals(Locale.CHINESE.getLanguage(), Locale.TRADITIONAL_CHINESE.getLanguage());
    }

}
