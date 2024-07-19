

package com.apitable.workspace.enums;

import lombok.Getter;

/**
 * node permission enum.
 */
@Getter
public enum NodePermissionEnum {
    MANAGER(0),
    EDITOR(1),
    UPDATE_ONLY(2),
    READ_ONLY(3);

    private final int value;

    NodePermissionEnum(int value) {
        this.value = value;
    }

    /**
     * transform int to enum.
     *
     * @param value int value
     * @return enum
     */
    public static NodePermissionEnum toEnum(int value) {
        for (NodePermissionEnum e : NodePermissionEnum.values()) {
            if (e.getValue() == value) {
                return e;
            }
        }
        throw new RuntimeException("unknown node permission");
    }
}
