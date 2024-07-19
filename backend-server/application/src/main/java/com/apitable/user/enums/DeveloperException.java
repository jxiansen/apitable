

package com.apitable.user.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * developer exception.
 */
@Getter
@AllArgsConstructor
public enum DeveloperException implements BaseException {

    HAS_CREATE(1001, "cannot be reproduced"),

    GENERATE_API_KEY_ERROR(1002, "failed to generate developer access token"),

    USER_DEVELOPER_NOT_FOUND(1003, "the user has not activated the developer platform"),

    INVALID_DEVELOPER_TOKEN(1004, "invalid access token");

    private final Integer code;

    private final String message;
}
