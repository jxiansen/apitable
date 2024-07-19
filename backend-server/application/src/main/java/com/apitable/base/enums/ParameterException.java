

package com.apitable.base.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Parameter Exception.
 * status code range（220-229）
 *
 * @author Chambers
 */
@Getter
@AllArgsConstructor
public enum ParameterException implements BaseException {

    NO_ARG(220, "no parameters"),

    INCORRECT_ARG(221, "wrong parameter");

    private final Integer code;

    private final String message;
}
