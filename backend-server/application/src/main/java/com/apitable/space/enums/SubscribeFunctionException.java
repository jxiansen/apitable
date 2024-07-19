

package com.apitable.space.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * subscription exception.
 * </p>
 *
 * @author Shawn Deng
 */
@Getter
@AllArgsConstructor
public enum SubscribeFunctionException implements BaseException {

    NODE_LIMIT(951, "The number of tables exceeds the limit"),

    CAPACITY_LIMIT(951, "Capacity exceeds limit"),

    ROW_LIMIT(951, "The number of lines exceeds the limit"),

    ADMIN_LIMIT(951, "The number of administrators exceeds the limit"),

    MEMBER_LIMIT(951, "The number of members exceeds the limit"),

    AUDIT_LIMIT(951, "Audit query days exceed the limit"),

    ;

    private final Integer code;

    private final String message;
}
