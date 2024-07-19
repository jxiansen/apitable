

package com.apitable.control.infrastructure.exception;

import com.apitable.control.infrastructure.PrincipalType;

/**
 * unknown principal type exception.
 */
public class UnknownPrincipalTypeException extends RuntimeException {

    private final PrincipalType principalType;

    public UnknownPrincipalTypeException(PrincipalType principalType) {
        super("Unknown Principal Type: " + principalType);
        this.principalType = principalType;
    }

    public PrincipalType getPrincipalType() {
        return principalType;
    }
}
