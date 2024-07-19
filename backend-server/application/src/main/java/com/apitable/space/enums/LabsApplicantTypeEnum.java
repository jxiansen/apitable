

package com.apitable.space.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * labs applicant type enum.
 */
@Getter
@AllArgsConstructor
public enum LabsApplicantTypeEnum {

    USER_LEVEL_FEATURE("user_feature", 0),

    SPACE_LEVEL_FEATURE("space_feature", 1),

    UNKNOWN_LEVEL_FEATURE("unknown_level_feature", -1);

    private final String applicantTypeName;

    private final Integer code;
}
