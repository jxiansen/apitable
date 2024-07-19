

package com.apitable.space.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * labs feature exception.
 */
@Getter
@AllArgsConstructor
public enum LabsFeatureException implements BaseException {

    SPACE_ID_NOT_EMPTY(952, "space id must not be empty"),

    FEATURE_KEY_IS_NOT_EXIST(953, "feature key does not exist"),

    FEATURE_SCOPE_IS_NOT_EXIST(954, "feature scope does not exist"),

    FEATURE_TYPE_IS_NOT_EXIST(955, "feature type does not exist"),

    FEATURE_ATTRIBUTE_AT_LEAST_ONE(956, "feature attribute at least one"),

    LAB_FEATURE_HAVE_BEEN_EXIST(956, "Lab feature have been existed"),

    LAB_FEATURE_NOT_EXIST(956, "Lab feature not exists"),

    ;

    private final Integer code;

    private final String message;
}
