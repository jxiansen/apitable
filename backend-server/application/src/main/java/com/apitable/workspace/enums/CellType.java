

package com.apitable.workspace.enums;

import lombok.Getter;

/**
 * <p>
 * cell type.
 * </p>
 *
 * @author Benson Cheung
 */
@Getter
public enum CellType {

    NOT_SUPPORT(0),

    TEXT(1);

    private final int type;

    CellType(int type) {
        this.type = type;
    }

}
