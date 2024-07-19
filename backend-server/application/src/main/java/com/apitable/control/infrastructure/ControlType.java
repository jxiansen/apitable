

package com.apitable.control.infrastructure;

import lombok.Getter;

/**
 * Control Type.
 *
 * @author Shawn Deng
 */
@Getter
public enum ControlType {

    NODE(0),
    DATASHEET_FIELD(1),
    DATASHEET_VIEW(2);

    private final int val;

    ControlType(int val) {
        this.val = val;
    }
}
