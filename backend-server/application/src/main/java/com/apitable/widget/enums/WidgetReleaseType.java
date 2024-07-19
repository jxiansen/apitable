

package com.apitable.widget.enums;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * widget release type.
 */
@Getter
@AllArgsConstructor
public enum WidgetReleaseType implements IBaseEnum {

    SPACE(0),

    GLOBAL(1),

    WAIT_REVIEW(10),

    ;

    private final Integer value;

    /**
     * get enum by value.
     *
     * @param type value
     * @return enum
     */
    public static WidgetReleaseType toEnum(Integer type) {
        if (null != type) {
            for (WidgetReleaseType e : WidgetReleaseType.values()) {
                if (e.getValue().equals(type)) {
                    return e;
                }
            }
        }
        throw new BusinessException("Applet Publishing Type Error");
    }

}
