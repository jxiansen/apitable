

package com.apitable.widget.enums;

import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * widget package status.
 */
@Getter
@AllArgsConstructor
public enum WidgetPackageStatus implements IBaseEnum {

    DEVELOP(0),

    BANNED(1),

    UNPUBLISHED(2),

    ONLINE(3),

    UNPUBLISH(4),

    ;

    private final int value;

    @Override
    public Integer getValue() {
        return this.value;
    }
}
