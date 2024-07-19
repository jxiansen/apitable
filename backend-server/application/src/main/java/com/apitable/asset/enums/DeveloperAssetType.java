

package com.apitable.asset.enums;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * developer asset type.
 *
 * @author Pengap
 */
@Getter
@AllArgsConstructor
public enum DeveloperAssetType implements IBaseEnum {

    /**
     * widget.
     */
    WIDGET(0);

    private final Integer value;

    /**
     * transform value to enum.
     *
     * @param value value
     * @return enum
     */
    public static DeveloperAssetType of(Integer value) {
        for (DeveloperAssetType type : DeveloperAssetType.values()) {
            if (type.getValue().equals(value)) {
                return type;
            }
        }
        throw new BusinessException("unknown asset type");
    }

}
