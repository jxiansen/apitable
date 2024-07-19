

package com.apitable.asset.enums;

import com.apitable.core.exception.BusinessException;
import com.apitable.core.support.serializer.IBaseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * asset upload source.
 * using: CallBack Body
 *
 * @author Pengap
 */
@Getter
@AllArgsConstructor
public enum AssetUploadSource implements IBaseEnum {

    /**
     * widget static resource.
     */
    WIDGET_STATIC(0),

    /**
     * space asset.
     */
    SPACE_ASSET(1),

    /**
     * public asset.
     */
    PUBLISH_ASSET(2),

    ;

    private final Integer value;

    /**
     * transform value to enum.
     *
     * @param value value
     * @return enum
     */
    public static AssetUploadSource of(Integer value) {
        for (AssetUploadSource type : AssetUploadSource.values()) {
            if (type.getValue().equals(value)) {
                return type;
            }
        }
        throw new BusinessException("Unknown UploadSource");
    }

}
