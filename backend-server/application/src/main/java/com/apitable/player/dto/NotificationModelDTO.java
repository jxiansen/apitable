

package com.apitable.player.dto;

import java.time.LocalDateTime;
import lombok.Data;

/**
 * Notification model.
 */
@Data
public class NotificationModelDTO {

    /**
     * id.
     */
    private Long id;

    /**
     * is read.
     */
    private Integer isRead;

    /**
     * notify type.
     */
    private String notifyType;

    /**
     * created time.
     */
    private LocalDateTime createdAt;

    /**
     * update time.
     */
    private LocalDateTime updatedAt;

    /**
     * node id.
     */
    private String nodeId;

    /**
     * space id.
     */
    private String spaceId;

    /**
     * to user id.
     */
    private Long toUser;

    /**
     * template id.
     */
    private String templateId;

    /**
     * from user id.
     */
    private Long fromUser;

    /**
     * notify body.
     */
    private String notifyBody;

    /**
     * row number.
     */
    private Integer rowNo;
}
