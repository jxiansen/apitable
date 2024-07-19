

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
 * Organization Structure - Organization Unit Table.
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
@TableName(keepGlobalPrefix = true, value = "unit")
public class UnitEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Unit Show Id.
     */
    private String unitId;

    /**
     * Space ID(link#xxxx_space#space_id).
     */
    private String spaceId;

    /**
     * Type (1: Department, 2: Label, 3: Member).
     */
    private Integer unitType;

    /**
     * Organization Unit Association ID.
     */
    private Long unitRefId;

    /**
     * Delete Tag (0: No, 1: Yes).
     */
    @TableLogic
    private Boolean isDeleted;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
