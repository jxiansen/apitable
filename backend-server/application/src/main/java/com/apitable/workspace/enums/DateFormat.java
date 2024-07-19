

package com.apitable.workspace.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Date format.
 */
@Getter
@AllArgsConstructor
public enum DateFormat {

    SEPARATE(0, "yyyy/MM/dd"),

    NORM(1, "yyyy-MM-dd"),

    INVERSE(2, "dd/MM/yyyy"),

    NORM_MD(3, "MM-dd");

    private final int type;

    private final String pattern;

    /**
     * get pattern by type.
     *
     * @param type type
     * @return pattern
     */
    public static String getPattern(int type) {
        for (DateFormat format : DateFormat.values()) {
            if (format.getType() == type) {
                return format.getPattern();
            }
        }
        return SEPARATE.getPattern();
    }
}
