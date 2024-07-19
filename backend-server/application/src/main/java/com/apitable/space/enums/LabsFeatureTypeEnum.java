

package com.apitable.space.enums;

import cn.hutool.core.util.StrUtil;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * labs feature type enum.
 */
@Getter
@AllArgsConstructor
public enum LabsFeatureTypeEnum {

    UNKNOWN_LABS_FEATURE_TYPE(null, 0),

    STATIC("static", 1),

    REVIEW("review", 2),

    NORMAL("normal", 3),

    NORMAL_PERSIST("normal_persist", 4),

    GLOBAL("global", 5);

    private final String featureKey;

    private final Integer type;

    /**
     * transform feature type name to enum.
     *
     * @param featureTypeName feature type name
     * @return feature type enum
     */
    public static LabsFeatureTypeEnum ofLabsFeatureType(String featureTypeName) {
        if (StrUtil.isBlank(featureTypeName)) {
            return UNKNOWN_LABS_FEATURE_TYPE;
        }
        for (LabsFeatureTypeEnum featureEnum : LabsFeatureTypeEnum.values()) {
            if (featureTypeName.equalsIgnoreCase(featureEnum.getFeatureKey())) {
                return featureEnum;
            }
        }
        return UNKNOWN_LABS_FEATURE_TYPE;
    }

    /**
     * transform feature type code to enum.
     *
     * @param typeCode feature type code
     * @return feature type enum
     */
    public static LabsFeatureTypeEnum ofLabsFeatureType(Integer typeCode) {
        if (Objects.isNull(typeCode) || typeCode == 0) {
            return UNKNOWN_LABS_FEATURE_TYPE;
        }
        for (LabsFeatureTypeEnum featureEnum : LabsFeatureTypeEnum.values()) {
            if (Objects.equals(typeCode, featureEnum.getType())) {
                return featureEnum;
            }
        }
        return UNKNOWN_LABS_FEATURE_TYPE;
    }
}
