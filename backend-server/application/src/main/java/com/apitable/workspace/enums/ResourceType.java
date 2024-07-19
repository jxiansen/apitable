

package com.apitable.workspace.enums;

import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * resource type.
 */
@Getter
@AllArgsConstructor
public enum ResourceType implements IBaseEnum {

    DATASHEET(0),

    FROM(1),

    DASHBOARD(2),

    WIDGET(3),

    MIRROR(4);

    private final int value;

    @Override
    public Integer getValue() {
        return this.value;
    }
}
