

package com.apitable.workspace.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * <p>
 * date formatter enum.
 * </p>
 *
 * @author Chambers
 */
@Getter
@AllArgsConstructor
public enum TimeFormat {

    TIME(0, "HH:mm");

    private final int type;

    private final String pattern;

    /**
     * <p>
     * get pattern by type.
     * </p>
     *
     * @param type type
     * @return pattern
     */
    public static String getPattern(int type) {
        for (TimeFormat format : TimeFormat.values()) {
            if (format.getType() == type) {
                return format.getPattern();
            }
        }
        return TIME.getPattern();
    }
}
