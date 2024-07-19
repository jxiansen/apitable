

package com.apitable.workspace.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Button field action type.
 *
 */
@Getter
@AllArgsConstructor
public enum ButtonFieldActionType {

    OPEN_LINK(0),

    TRIGGER_AUTOMATION(1),

    ;

    private final int type;
}
