

package com.apitable.organization.enums;

import com.apitable.core.exception.BusinessException;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * Organization unit type.
 * </p>
 *
 * @author Shawn Deng
 */
@AllArgsConstructor
@Getter
public enum UnitType {

    TEAM(1),

    ROLE(2),

    MEMBER(3);

    private final Integer type;

    /**
     * Convert to enum.
     *
     * @param type type
     * @return enum
     */
    public static UnitType toEnum(Integer type) {
        if (null != type) {
            for (UnitType e : UnitType.values()) {
                if (e.getType().equals(type)) {
                    return e;
                }
            }
        }
        throw new BusinessException("unknown unit type");
    }
}
