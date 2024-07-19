

package com.apitable.space.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
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
 * Workbench - Invitation Record Table.
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
@TableName(keepGlobalPrefix = true, value = "space_invite_record")
public class SpaceInviteRecordEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Inviter Member ID.
     */
    private Long inviteMemberId;

    /**
     * Invitation Space ID.
     */
    private String inviteSpaceId;

    /**
     * Invite Space Name.
     */
    private String inviteSpaceName;

    /**
     * Invite Email.
     */
    private String inviteEmail;

    /**
     * Unique token ID of invitation link.
     */
    private String inviteToken;

    /**
     * Invite Link.
     */
    private String inviteUrl;

    /**
     * Mail send status(0:Fail,1:Success).
     */
    private Boolean sendStatus;

    /**
     * Status Description.
     */
    private String statusDesc;

    /**
     * Is it invalid(0:No,1:Yes).
     */
    private Boolean isExpired;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
