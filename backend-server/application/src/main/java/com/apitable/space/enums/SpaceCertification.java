

package com.apitable.space.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * space certification.
 * </p>
 *
 * @author zoe zheng
 */
@Getter
@AllArgsConstructor
public enum SpaceCertification {

    BASIC("basic"),

    SENIOR("senior"),

    ;

    private final String level;

    /**
     * transfer level to enum.
     *
     * @param level level
     * @return SpaceCertification
     */
    public static SpaceCertification toEnum(String level) {
        for (SpaceCertification e : SpaceCertification.values()) {
            if (e.getLevel().equals(level)) {
                return e;
            }
        }
        return null;
    }
}
