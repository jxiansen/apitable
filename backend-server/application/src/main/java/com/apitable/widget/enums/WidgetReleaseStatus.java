

package com.apitable.widget.enums;

import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * widget release status.
 */
@Getter
@AllArgsConstructor
public enum WidgetReleaseStatus implements IBaseEnum {

    WAIT_REVIEW(0),

    PASS_REVIEW(1),

    REJECT(2);

    private final int value;

    @Override
    public Integer getValue() {
        return this.value;
    }
}
