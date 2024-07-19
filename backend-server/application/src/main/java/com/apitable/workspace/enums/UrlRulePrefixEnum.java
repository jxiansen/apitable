

package com.apitable.workspace.enums;

/**
 * url rule prefix enum.
 *
 * @author tao
 */
public enum UrlRulePrefixEnum {

    WORKBENCH_URL_PFE_SUFFIX("/workbench"),

    SHARE_URL_PFE_SUFFIX("/share");

    private final String value;

    UrlRulePrefixEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
