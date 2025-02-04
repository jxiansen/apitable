

package com.apitable.space.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
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
 * Workspace Table.
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
@TableName(keepGlobalPrefix = true, value = "space")
public class SpaceEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space unique identifier character.
     */
    private String spaceId;

    /**
     * Space Name.
     */
    private String name;

    /**
     * Space Icon.
     */
    private String logo;

    /**
     * Space Level.
     */
    private Long level;

    /**
     * Option properties.
     */
    private String props;

    /**
     * Pre Delete Time.
     */
    private LocalDateTime preDeletionTime;

    /**
     * Whether all members can invite members(0:No,1:Yes).
     */
    private Boolean isInvite;

    /**
     * Do you want to prohibit all employees from export table(0:No,1:Yes).
     */
    private Boolean isForbid;

    /**
     * Allow others to apply to join the space station (0: No, 1: Yes).
     */
    private Boolean allowApply;

    /**
     * Delete tag(0:No,1:Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Owner.
     */
    private Long owner;

    /**
     * Creator.
     */
    private Long creator;

    /**
     * Create User.
     */
    @TableField(fill = FieldFill.INSERT)
    private Long createdBy;

    /**
     * Last Update User.
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Long updatedBy;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

    /**
     * Update Time.
     */
    private LocalDateTime updatedAt;

}
