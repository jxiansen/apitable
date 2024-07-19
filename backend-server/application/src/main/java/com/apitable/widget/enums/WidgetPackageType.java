

package com.apitable.widget.enums;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * widget package type.
 */
@Getter
@AllArgsConstructor
public enum WidgetPackageType implements IBaseEnum {

    THIRD_PARTY(0),

    OFFICIAL(1);

    private final Integer value;

    /**
     * get enum by value.
     *
     * @param type type
     * @return enum
     */
    public static WidgetPackageType toEnum(Integer type) {
        if (null != type) {
            for (WidgetPackageType e : WidgetPackageType.values()) {
                if (e.getValue().equals(type)) {
                    return e;
                }
            }
        }
        throw new BusinessException("Wrong widget package type");
    }
}
