

package com.apitable.interfaces.billing.model;

import lombok.Getter;
import lombok.Setter;

/**
 * entitlement remark.
 */
@Getter
@Setter
public class EntitlementRemark {

    private Long userId;

    private String userName;

    public EntitlementRemark(Long userId, String userName) {
        this.userId = userId;
        this.userName = userName;
    }
}
