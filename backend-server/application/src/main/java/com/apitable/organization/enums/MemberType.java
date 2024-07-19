

package com.apitable.organization.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Unit member type.
 */
@AllArgsConstructor
@Getter
public enum MemberType {

    PRIMARY_ADMIN("PrimaryAdmin"),

    SUB_ADMIN("SubAdmin"),

    MEMBER("Member"),


    ;

    private final String type;

}
