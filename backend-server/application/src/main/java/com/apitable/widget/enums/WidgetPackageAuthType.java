

package com.apitable.widget.enums;

import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * widget package auth type.
 */
@Getter
@AllArgsConstructor
public enum WidgetPackageAuthType implements IBaseEnum {

    BOUND_SPACE(0),

    AUTH_SPACE(1);

    private final Integer value;

}
