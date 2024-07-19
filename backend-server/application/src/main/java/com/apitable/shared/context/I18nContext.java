

package com.apitable.shared.context;

import com.apitable.core.util.SpringContextHolder;
import com.apitable.shared.component.LanguageManager;
import java.util.Locale;
import org.springframework.context.MessageSource;

/**
 * <p>
 * i18n context util.
 * </p>
 *
 * @author Pengap
 */
public class I18nContext {

    private final MessageSource messageSource;

    public I18nContext(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public static I18nContext me() {
        return SpringContextHolder.getBean(I18nContext.class);
    }

    /**
     * transform.
     *
     * @param msgKey         message key
     * @param locale         locale
     * @param defaultMessage default message
     * @return message
     */
    public String transform(String msgKey, Locale locale, String defaultMessage) {
        try {
            return messageSource.getMessage(msgKey, null, defaultMessage, locale);
        } catch (Exception e) {
            return null;
        }
    }

    public String transform(String msgKey, String defaultMessage) {
        return transform(msgKey, LanguageManager.me().getDefaultLanguage(), defaultMessage);
    }

    public String transform(String msgKey, Locale locale) {
        return transform(msgKey, locale, msgKey);
    }

    public String transform(String msgKey) {
        return transform(msgKey, LanguageManager.me().getDefaultLanguage());
    }

}

