

package com.apitable.shared.component;

import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.config.properties.ConstProperties;
import java.util.Locale;
import org.springframework.stereotype.Component;

/**
 * <p>
 * locale context manager.
 * </p>
 *
 * @author Chambers
 */
@Component
public class LanguageManager {

    public static LanguageManager me() {
        return SpringContextHolder.getBean(LanguageManager.class);
    }

    public Locale getDefaultLanguage() {
        String languageTag = SpringContextHolder.getBean(ConstProperties.class).getLanguageTag();
        return Locale.forLanguageTag(languageTag);
    }

    public String getDefaultLanguageTag() {
        return SpringContextHolder.getBean(ConstProperties.class).getLanguageTag();
    }

    /**
     * Get the default language string Tag, and convert the connecting character "-" to the underscore "_".
     *
     * @return locale string key
     */
    public String getDefaultLanguageTagWithUnderLine() {
        return getDefaultLanguageTag().replace("-", "_");
    }
}
