

package com.apitable.shared.sysconfig.i18n;

import com.apitable.shared.sysconfig.Converter;
import com.fasterxml.jackson.core.type.TypeReference;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

/**
 * <p>
 * I18n Config Manager.
 * </p>
 */
public class I18nConfigLoader {

    public static I18nConfig getConfig() {
        return I18nConfigLoader.Singleton.INSTANCE.getSingleton();
    }

    private enum Singleton {
        INSTANCE;

        private final I18nConfig singleton;

        // JVM guarantee this method is called absolutely only once
        Singleton() {
            try {
                InputStream resourceAsStream =
                    I18nConfigLoader.class.getResourceAsStream("/sysconfig/strings.json");
                if (resourceAsStream == null) {
                    throw new IOException("I18n file not found!");
                }
                TypeReference<Map<String, Map<String, String>>> typeReference =
                    new TypeReference<>() {
                    };
                Map<String, Map<String, String>> strings = Converter.getObjectMapper()
                    .readValue(resourceAsStream, typeReference);
                singleton = new I18nConfig();
                singleton.setStrings(strings);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load I18n!");
            }
        }

        public I18nConfig getSingleton() {
            return singleton;
        }
    }

    /**
     * get key text.
     *
     * @param key  string key
     * @param lang language tag
     * @return string text
     */
    public static String getText(String key, I18nTypes lang) {
        // alias defaults to a language code array
        String languageName = lang.getAlias()[0];
        Map<String, String> languageStrings =
            I18nConfigLoader.getConfig().getStrings().get(languageName);
        if (languageStrings == null) {
            return key;
        }
        return languageStrings.get(key);
    }

}
