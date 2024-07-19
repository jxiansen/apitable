

package com.apitable.shared.sysconfig.i18n;

import java.util.Map;
import lombok.Data;

/**
 * <p>
 * I18n Configuration.
 * </p>
 */
@Data
public class I18nConfig {

    /**
     * Follow the format below.
     * {
     * "en-US": {
     * "i18-key": "value",
     * }
     * }
     */
    private Map<String, Map<String, String>> strings;
}
