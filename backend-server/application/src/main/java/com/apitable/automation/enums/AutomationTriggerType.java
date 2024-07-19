

package com.apitable.automation.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * automation trigger type.
 */
@Getter
@AllArgsConstructor
public enum AutomationTriggerType {

    FORM_SUBMITTED("form_submitted"),

    RECORD_MATCHES_CONDITIONS("record_matches_conditions"),

    RECORD_CREATED("record_created"),

    BUTTON_CLICKED("button_clicked"),

    SCHEDULED_TIME_ARRIVE("scheduled_time_arrive"),

    ;


    private final String type;
}
