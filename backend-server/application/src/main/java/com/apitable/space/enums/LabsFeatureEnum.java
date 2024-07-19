

package com.apitable.space.enums;

import cn.hutool.core.util.StrUtil;
import java.util.Objects;
import lombok.Getter;

/**
 * labs feature enum.
 */
@Getter
public enum LabsFeatureEnum {

    RENDER_PROMPT("render_prompt", LabsApplicantTypeEnum.USER_LEVEL_FEATURE),

    RENDER_NORMAL("render_normal", LabsApplicantTypeEnum.USER_LEVEL_FEATURE),

    ASYNC_COMPUTE("async_compute", LabsApplicantTypeEnum.USER_LEVEL_FEATURE),

    ROBOT("robot", LabsApplicantTypeEnum.SPACE_LEVEL_FEATURE),

    WIDGET_CENTER("widget_center", LabsApplicantTypeEnum.SPACE_LEVEL_FEATURE),

    VIEW_MANUAL_SAVE("view_manual_save", LabsApplicantTypeEnum.SPACE_LEVEL_FEATURE),

    UNKNOWN_LAB_FEATURE("unknown_lab_feature", LabsApplicantTypeEnum.UNKNOWN_LEVEL_FEATURE);

    private final String featureName;

    private final LabsApplicantTypeEnum applicantType;

    LabsFeatureEnum(String featureName, LabsApplicantTypeEnum applicantType) {
        this.featureName = featureName;
        this.applicantType = applicantType;
    }

    /**
     * transform featureKey to featureName.
     *
     * @param featureKey featureKey
     * @return featureName
     */
    public static String ofFeatureKey(String featureKey) {
        for (LabsFeatureEnum featureEnum : LabsFeatureEnum.values()) {
            if (featureEnum.name().equalsIgnoreCase(featureKey)) {
                return featureEnum.getFeatureName();
            }
        }
        return UNKNOWN_LAB_FEATURE.getFeatureName();
    }

    /**
     * transform featureName to LabsFeatureEnum.
     *
     * @param featureName featureName
     * @return LabsFeatureEnum
     */
    public static LabsFeatureEnum ofLabsFeature(String featureName) {
        if (StrUtil.isBlank(featureName)) {
            return UNKNOWN_LAB_FEATURE;
        }
        for (LabsFeatureEnum featureEnum : LabsFeatureEnum.values()) {
            if (Objects.equals(featureName, featureEnum.getFeatureName())
                || Objects.equals(featureName, featureEnum.name())) {
                return featureEnum;
            }
        }
        return UNKNOWN_LAB_FEATURE;
    }
}
