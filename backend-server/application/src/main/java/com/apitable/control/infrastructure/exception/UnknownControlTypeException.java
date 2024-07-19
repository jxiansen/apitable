

package com.apitable.control.infrastructure.exception;

import com.apitable.control.infrastructure.ControlType;
import lombok.Getter;

/**
 * unknown control type exception.
 */
@Getter
public class UnknownControlTypeException extends RuntimeException {

    private final ControlType controlType;

    public UnknownControlTypeException(ControlType controlType) {
        super("Unknown Control Type");
        this.controlType = controlType;
    }
}
