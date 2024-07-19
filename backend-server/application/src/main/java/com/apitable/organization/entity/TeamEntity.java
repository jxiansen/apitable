

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
 * Organizational Structure - Department Table.
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
@TableName(keepGlobalPrefix = true, value = "unit_team")
public class TeamEntity implements Serializable {

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
     * Parent ID, 0 if it is root department.
     */
    private Long parentId;

    /**
     * Department Name.
     */
    private String teamName;

    /**
     * Level, starting from 1 by default.
     */
    private Integer teamLevel;

    /**
     * Sort (sibling starts from 1 by default).
     */
    private Integer sequence;

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
