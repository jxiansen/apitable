

package com.apitable.automation.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * automation exception.
 * </p>
 *
 * @author feng penglong
 */
@Getter
@AllArgsConstructor
public enum AutomationException implements BaseException {

    DST_ROBOT_LIMIT(1101, "The single-table robot has reached the upper limit"),

    DST_ROBOT_REPEAT(1102, "Do not recreate"),

    AUTOMATION_ERROR(1103, "Server error"),

    AUTOMATION_ROBOT_NOT_EXIST(1104, "The automation not exits"),

    AUTOMATION_TRIGGER_LIMIT(1105, "The number of triggers cannot exceed 3"),

    AUTOMATION_TRIGGER_NOT_EXIST(1106, "The trigger not exits"),

    ;

    private final Integer code;

    private final String message;
}
