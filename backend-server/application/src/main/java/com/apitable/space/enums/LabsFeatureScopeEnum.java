

package com.apitable.space.enums;

import cn.hutool.core.util.StrUtil;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * lab feature scope.
 */
@Getter
@AllArgsConstructor
public enum LabsFeatureScopeEnum {

    USER_SCOPE("user", 1),

    SPACE_SCOPE("space", 2),

    UNKNOWN_SCOPE("unknown", 0);

    private final String scopeName;

    private final Integer scopeCode;

    /**
     * transform scope code to scope enum.
     *
     * @param scopeCode scope code
     * @return scope enum
     */
    public static LabsFeatureScopeEnum ofLabsFeatureScope(Integer scopeCode) {
        for (LabsFeatureScopeEnum scopeEnum : LabsFeatureScopeEnum.values()) {
            if (Objects.equals(scopeCode, scopeEnum.getScopeCode())) {
                return scopeEnum;
            }
        }
        return UNKNOWN_SCOPE;
    }

    /**
     * transform scope name to scope enum.
     *
     * @param scopeName scope name
     * @return scope enum
     */
    public static LabsFeatureScopeEnum ofLabsFeatureScope(String scopeName) {
        if (StrUtil.isBlank(scopeName)) {
            return UNKNOWN_SCOPE;
        }
        for (LabsFeatureScopeEnum scopeEnum : LabsFeatureScopeEnum.values()) {
            if (Objects.equals(scopeName, scopeEnum.getScopeName())) {
                return scopeEnum;
            }
        }
        return UNKNOWN_SCOPE;
    }
}
