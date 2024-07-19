


package com.apitable.automation.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * automation action type.
 */
@Getter
@AllArgsConstructor
public enum AutomationActionType {

    SEND_MAIL("sendMail"),

    SEND_REQUEST("sendRequest"),


    ;


    private final String type;
}
