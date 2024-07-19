

package com.apitable.shared.constants;

import com.apitable.shared.sysconfig.Converter;
import com.apitable.shared.sysconfig.wizard.PlayerConfigLoader;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Locale.LanguageRange;
import java.util.stream.Collectors;

/**
 * <p>
 * locale constants.
 * </p>
 *
 * @author Pengap
 */
public class LanguageConstants {

    public static final List<Locale> SUPPORTED_LANGUAGE = new ArrayList<>();

    static {
        try (InputStream resourceAsStream = PlayerConfigLoader.class.getResourceAsStream(
            "/sysconfig/language.manifest.json")) {
            if (resourceAsStream == null) {
                throw new IOException("Language Manifest file not found!");
            }
            ObjectNode manifest =
                Converter.getObjectMapper().readValue(resourceAsStream, ObjectNode.class);
            Iterator<String> languageKey = manifest.fieldNames();
            while (languageKey.hasNext()) {
                String key = languageKey.next();
                String[] codeArray = key.split("-");
                if (codeArray.length == 2) {
                    SUPPORTED_LANGUAGE.add(new Locale(codeArray[0], codeArray[1]));
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to load system configuration!", e);
        }
    }

    private static final List<LanguageRange> SUPPORTED_LANGUAGE_RANGES;

    static {
        SUPPORTED_LANGUAGE_RANGES = LanguageRange.parse(
            SUPPORTED_LANGUAGE.stream().map(Locale::toLanguageTag)
                .collect(Collectors.joining(",")));
    }

    /**
     * whether language supported.
     *
     * @param languageTag language
     */
    public static boolean isLanguagesSupported(String languageTag) {
        return isLanguagesSupported(Locale.forLanguageTag(languageTag));
    }

    /**
     * whether language supported.
     *
     * @param locale locale
     */
    public static boolean isLanguagesSupported(Locale locale) {
        return !Locale.filter(SUPPORTED_LANGUAGE_RANGES, Collections.singletonList(locale))
            .isEmpty();
    }

}
