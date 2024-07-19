

package com.apitable.user.enums;

import com.apitable.core.exception.BusinessException;
import lombok.Getter;

/**
 * <p>
 * User Link Type.
 * </p>
 *
 * @author Chambers
 */
@Getter
public enum LinkType {

    DINGTALK(0),

    WECHAT(1),

    TENCENT(2),

    FEISHU(3);

    private final int type;

    LinkType(int type) {
        this.type = type;
    }

    /**
     * transform to enum.
     *
     * @param type type
     * @return LinkType
     */
    public static LinkType toEnum(Integer type) {
        for (LinkType e : LinkType.values()) {
            if (e.getType() == type) {
                return e;
            }
        }
        throw new BusinessException("unknown link type");
    }
}
