

package com.apitable.user.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * use operation type.
 */
@AllArgsConstructor
@Getter
public enum UserOperationType {

    APPLY_FOR_CLOSING(1),

    CANCEL_CLOSING(2),

    COMPLETE_CLOSING(3);

    private final int statusCode;
}
