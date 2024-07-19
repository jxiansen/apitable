

package com.apitable.organization.entity;

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
 * Unit Role Member Table.
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
@TableName(keepGlobalPrefix = true, value = "unit_role_member")
public class RoleMemberEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * Primary Key.
     */
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /**
     * Role ID(link#xxxx_unit_role#id).
     */
    private Long roleId;

    /**
     * Member/Department ID(link#xxxx_unit_team#id | #xxxx_unit_member#id).
     */
    private Long unitRefId;

    /**
     * 1: Department；3: Member.
     */
    private Integer unitType;

    /**
     * Create Time.
     */
    private LocalDateTime createdAt;

}
