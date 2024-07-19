

package com.apitable.player.vo;

import cn.hutool.json.JSONObject;
import com.apitable.shared.constants.NotificationConstants;
import com.apitable.shared.support.serializer.ImageSerializer;
import com.apitable.shared.support.serializer.LocalDateTimeToMilliSerializer;
import com.apitable.shared.support.serializer.NullNumberSerializer;
import com.apitable.shared.support.serializer.NullStringSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * <p>
 * User message notification list.
 * </p>
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "User message notification list")
public class NotificationDetailVo {

    /**
     * Message ID.
     */
    @Schema(description = "Message ID", example = "1261273764218")
    private String id;

    /**
     * is read.
     */
    @Schema(description = "Read 1 Read, 0 Unread", example = "1")
    private Integer isRead;

    /**
     * Notification Type.
     */
    @Schema(description = "Notification Type", example = "system")
    private String notifyType;

    /**
     * Creation time.
     */
    @Schema(description = "Creation time", example = "1573561644000")
    @JsonSerialize(using = LocalDateTimeToMilliSerializer.class)
    private LocalDateTime createdAt;

    /**
     * Update time.
     */
    @Schema(description = "Update time", example = "1573561644000")
    @JsonSerialize(using = LocalDateTimeToMilliSerializer.class)
    private LocalDateTime updatedAt;

    /**
     * Notified user uuid.
     */
    @Schema(description = "Notified user uuid", example = "aaaabb")
    private String toUuid;

    /**
     * Send notification to users.
     */
    @Schema(description = "Send notification to users")
    private PlayerBaseVo fromUser;

    /**
     * Notice content.
     */
    @Schema(description = "Notice content")
    private NotifyBody notifyBody;

    /**
     * Number of notification lines of the da.
     */
    @JsonSerialize(nullsUsing = NullNumberSerializer.class)
    @Schema(description = "Number of notification lines of the day")
    private Integer rowNo;

    /**
     * Notification template ID.
     */
    @Schema(description = "Notification template ID")
    private String templateId;

    /**
     * NotifyBody.
     */
    @Data
    @Builder
    @Schema(description = "Notice content")
    public static class NotifyBody {

        /**
         * Send notification to users.
         */
        @Schema(description = "Send notification to users")
        @Deprecated
        private String template;

        /**
         * Send notification to user.
         */
        @Schema(description = "Send notification to users")
        private String title;

        /**
         * Node Information.
         */
        @Schema(description = "Node Information")
        private Node node;

        /**
         * spatial information.
         */
        @Schema(description = "spatial information ")
        private Space space;

        /**
         * Notify additional fields.
         */
        @Schema(description = "Notify additional fields"
            + NotificationConstants.BODY_EXTRAS_DESC,
            example = NotificationConstants.BODY_EXTRAS_EXAMPLE)
        private JSONObject extras;

        /**
         * Notify Jump.
         */
        @Schema(description = "Notify Jump")
        private Intent intent;

    }

    /**
     * Intent.
     */
    @Data
    @Builder
    @Schema(description = "Notify Jump")
    public static class Intent {

        /**
         * Jump link.
         */
        @Schema(description = "Jump link", example = "https://apitable.com")
        private String url;
    }

    /**
     * Node.
     */
    @Data
    @Builder
    @Schema(description = "node")
    public static class Node {

        /**
         * Node ID.
         */
        @Schema(description = "Node ID")
        private String nodeId;

        /**
         * Node Information.
         */
        @Schema(description = "Node Information")
        private String nodeName;

        /**
         * Node icon.
         */
        @JsonSerialize(nullsUsing = NullStringSerializer.class)
        @Schema(description = "Node icon")
        private String icon;
    }

    /**
     * Space.
     */
    @Data
    @Builder
    @Schema(description = "space")
    public static class Space {

        /**
         * Space ID.
         */
        @Schema(description = "Space ID")
        private String spaceId;

        /**
         * Space name.
         */
        @Schema(description = "Space name")
        private String spaceName;

        /**
         * Space avatar.
         */
        @JsonSerialize(nullsUsing = NullStringSerializer.class,
            using = ImageSerializer.class)
        @Schema(description = "Space avatar")
        private String logo;
    }

}
