

package com.apitable.player.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * User notification list parameters.
 * </p>
 */
@Data
@Schema(description = "User notification list parameters")
public class NotificationListRo {

    @Schema(description = "Read 1 Read, 0 Unread, Default Unread",
        allowableValues = "range[0,1]", type = "Boolean", example = "1")
    private Boolean isRead = Boolean.FALSE;

    @Schema(description = "Notification type, default to system notification system",
        example = "system")
    private String notifyType = "system";
}
