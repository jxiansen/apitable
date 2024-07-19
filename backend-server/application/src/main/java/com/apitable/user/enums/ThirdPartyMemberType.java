

package com.apitable.user.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * third party member type.
 */
@Getter
@AllArgsConstructor
public enum ThirdPartyMemberType {

    WECHAT_MINIAPP(0),

    WECHAT_PUBLIC_ACCOUNT(1),

    WECOM(2),

    TENCENT(3),

    DING_TALK(4),

    FEI_SHU(5);

    private int type;
}
