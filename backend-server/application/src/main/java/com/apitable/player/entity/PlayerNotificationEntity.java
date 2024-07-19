

package com.apitable.player.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * <p>
 * Notification Center - Notification Record Table.
 * </p>
 *
 * @author Mybatis Generator Tool
 */
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
@EqualsAndHashCode
@TableName(keepGlobalPrefix = true, value = "player_notification")
public class PlayerNotificationEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space ID.
     */
    private String spaceId;

    /**
     * Send user,this is system user if 0.
     */
    private Long fromUser;

    /**
     * Receive User.
     */
    private Long toUser;

    /**
     * Node ID(Redundant Field).
     */
    private String nodeId;

    /**
     * Notification Template ID.
     */
    private String templateId;

    /**
     * Notification Type.
     */
    private String notifyType;

    /**
     * Notification Message Body.
     */
    private String notifyBody;

    /**
     * Read or not (0: No, 1: Yes).
     */
    private Boolean isRead;

    /**
     * Delete Tag (0: No, 1: Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
