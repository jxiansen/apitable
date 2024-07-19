

package com.apitable.space.entity;


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
 * workbench-invitation table.
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
@TableName(keepGlobalPrefix = true, value = "invitation")
public class InvitationEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * space id.
     */
    private String spaceId;

    /**
     * team id.
     */
    private Long teamId;

    /**
     * node id.
     */
    private String nodeId;

    /**
     * the creator member id.
     */
    private Long creator;

    /**
     * invite token.
     */
    private String inviteToken;

    /**
     * number of successful invitees.
     */
    private Integer inviteNum;

    /**
     * link status(0:inactivated, 1:activation).
     */
    private Boolean status;

    /**
     * delete marker(0:false,1:true).
     */
    @TableLogic
    private Integer isDeleted;

    /**
     * creation time.
     */
    private LocalDateTime createdAt;

    /**
     * update time.
     */
    private LocalDateTime updatedAt;

}
