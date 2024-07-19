

package com.apitable.organization.entity;

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
 * Unit Role Table.
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
@TableName(keepGlobalPrefix = true, value = "unit_role")
public class RoleEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Space ID(link#xxxx_space#space_id).
     */
    private String spaceId;

    /**
     * Role Name.
     */
    private String roleName;

    /**
     * Role sorting position (the default is 2000. For new roles, this value is the maximum space position multiplied by 2).
     */
    private Integer position;

    /**
     * Delete Tag(0: No, 1: Yes).
     */
    @TableLogic
    private Integer isDeleted;

    /**
     * Creator.
     */
    private Long createBy;

    /**
     * Updater.
     */
    private Long updateBy;

    /**
     * Create Time.
     */
    private LocalDateTime createAt;

    /**
     * Update Time.
     */
    private LocalDateTime updateAt;

}
