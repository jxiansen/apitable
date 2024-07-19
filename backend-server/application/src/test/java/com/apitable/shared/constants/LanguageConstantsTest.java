

package com.apitable.shared.constants;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import com.apitable.shared.sysconfig.i18n.I18nTypes;

/**
 *
 * @author Shawn Deng
 * @date 2022-03-18 15:31:23
 */
public class LanguageConstantsTest {

    @Test
    public void testStringI18nType() {
        Set<I18nTypes> languages = LanguageConstants.SUPPORTED_LANGUAGE.stream()
                .map(locale -> I18nTypes.aliasOf(locale.toLanguageTag()))
                .collect(Collectors.toSet());
        Assertions.assertThat(languages).isNotEmpty()
                .contains(I18nTypes.EN_US, I18nTypes.ZH_CN, I18nTypes.ZH_HK, I18nTypes.FR_FR);
    }
}
