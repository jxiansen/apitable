

package com.apitable.player.ro;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * <p>
 * User notification paging list parameters.
 * </p>
 */
@Data
@Schema(description = "User notification paging list parameters")
public class NotificationPageRo {

    @Schema(description = "Read 1 Read, 0 Unread, Not Transferred means to query all",
        allowableValues = "range[0,1]", type = "Boolean", example = "0")
    private Boolean isRead;

    @Schema(description = "Notification Type", example = "system")
    private String notifyType;

    @Schema(description = "The earliest notification line number", example = "10")
    private Integer rowNo;

    @Schema(description = "Number of entries per page", example = "20")
    private Integer pageSize = 20;
}
