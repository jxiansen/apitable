

package com.apitable.asset.enums;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * widget file type.
 *
 * @author tao
 */
@Getter
@AllArgsConstructor
public enum WidgetFileType implements IBaseEnum {
    /**
     * the widget asset.
     */
    ASSET(0),
    /**
     * the packaging file.
     */
    PACKAGE(1),
    /**
     * cover, icon.
     */
    PUBLIC(2);


    private final Integer value;

    /**
     * get enum by value.
     *
     * @param value value
     * @return enum
     */
    public static WidgetFileType of(Integer value) {
        for (WidgetFileType type : WidgetFileType.values()) {
            if (type.getValue().equals(value)) {
                return type;
            }
        }
        throw new BusinessException("Unknown WidgetFileType");
    }
}