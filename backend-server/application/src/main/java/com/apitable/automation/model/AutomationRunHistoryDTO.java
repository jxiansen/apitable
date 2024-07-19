

package com.apitable.automation.model;

import java.time.LocalDateTime;
import lombok.Data;

/**
 * AutomationRunHistoryDTO base info.
 */
@Data
public class AutomationRunHistoryDTO {

    private String robotId;

    private String taskId;

    private Integer status;

    private LocalDateTime createdAt;

    private String actionIds;

    private String actionTypeIds;

    private String errorMessages;

}
