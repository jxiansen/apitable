

package com.apitable.space.enums;

import com.apitable.core.exception.BaseException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * space permission exception.
 *
 * @author Chambers
 */
@Getter
@AllArgsConstructor
public enum SpacePermissionException implements BaseException {

    NO_RESOURCE_ASSIGNABLE(601, "Permission resources are not assignable"),

    ILLEGAL_ASSIGN_RESOURCE(602, "Illegal allocation of resources"),

    INSUFFICIENT_PERMISSIONS(603, "Insufficient space management rights");

    private final Integer code;

    private final String message;
}
